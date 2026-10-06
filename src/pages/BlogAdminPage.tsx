/**
 * NOTE: Sanity Studio (in `studio-ghc/`) is the primary source of truth for GHC content.
 * This localStorage admin page is preserved as a legacy fallback editor.
 */
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Pencil, Trash2, Eye, Save, X } from 'lucide-react';
import { blogCategories, type BlogPost, type BlogBlock } from '../data/blogs';
import { getAllBlogs, getCustomBlogs, saveBlog, deleteBlog, slugify, estimateReadTime } from '../utils/blogStore';

const ADMIN_KEY = 'ghc_blog_admin_ok';
const ADMIN_PASSWORD = 'ghc-admin'; // change to whatever you like

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0',
  fontSize: '14px', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a', fontFamily: 'inherit',
};

const labelStyle: React.CSSProperties = { display: 'block', fontSize: '12px', fontWeight: 800, letterSpacing: '1px', color: '#475569', marginBottom: '6px' };

/**
 * Simple formatting guide for the no-code editor:
 *   ## My Heading      → section heading
 *   - bullet point      → list item (consecutive - lines group into one list)
 *   > quote text        → highlighted quote
 *   ! Example text      → green example callout
 *   (blank line)        → paragraph break
 *   first paragraph     → large intro styling
 */
function parseContent(raw: string): BlogBlock[] {
  const lines = raw.split('\n');
  const blocks: BlogBlock[] = [];
  let listBuffer: string[] = [];
  let isFirst = true;
  const flushList = () => {
    if (listBuffer.length > 0) {
      blocks.push({ type: 'list', items: listBuffer });
      listBuffer = [];
    }
  };
  for (const line of lines) {
    const t = line.trim();
    if (t === '') {
      flushList();
      continue;
    }
    if (t.startsWith('## ')) {
      flushList();
      blocks.push({ type: 'heading', text: t.slice(3).trim() });
    } else if (t.startsWith('- ')) {
      listBuffer.push(t.slice(2).trim());
    } else if (t.startsWith('> ')) {
      flushList();
      blocks.push({ type: 'quote', text: t.slice(2).trim() });
    } else if (t.startsWith('! ')) {
      flushList();
      blocks.push({ type: 'example', text: t.slice(2).trim() });
    } else {
      flushList();
      blocks.push({ type: isFirst ? 'intro' : 'paragraph', text: t });
      isFirst = false;
    }
  }
  flushList();
  return blocks;
}

function blocksToText(post: BlogPost): string {
  return post.content
    .map((b) => {
      if (b.type === 'heading') return `## ${b.text}`;
      if (b.type === 'list') return b.items.map((i) => `- ${i}`).join('\n');
      if (b.type === 'quote') return `> ${b.text}`;
      if (b.type === 'example') return `! ${b.text}`;
      if (b.type === 'cta') return '';
      return b.text;
    })
    .filter(Boolean)
    .join('\n\n');
}

const emptyForm = { title: '', excerpt: '', author: 'GHC GrowthLab', date: '', category: 'Fundraising', coverEmoji: '🚀', tags: '', body: '' };

export const BlogAdminPage: React.FC = () => {
  const navigate = useNavigate();
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(ADMIN_KEY) === '1');
  const [password, setPassword] = useState('');
  const [refresh, setRefresh] = useState(0);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const all = useMemo(() => getAllBlogs(), [refresh]);
  const customCount = useMemo(() => getCustomBlogs().length, [refresh]);

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(ADMIN_KEY, '1');
      setAuthed(true);
    } else alert('Wrong password. Hint: ask your developer (default is ghc-admin).');
  };

  const startNew = () => {
    setForm({ ...emptyForm, date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) });
    setEditingSlug(null);
    setShowForm(true);
  };

  const startEdit = (slug: string) => {
    const post = all.find((b) => b.slug === slug);
    if (!post) return;
    setForm({
      title: post.title,
      excerpt: post.excerpt,
      author: post.author,
      date: post.date,
      category: post.category,
      coverEmoji: post.coverEmoji,
      tags: post.tags.join(', '),
      body: blocksToText(post),
    });
    setEditingSlug(slug);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.body.trim()) {
      alert('Title and article body are required.');
      return;
    }
    const slug = editingSlug ?? slugify(form.title);
    const content = parseContent(form.body);
    const post: BlogPost = {
      slug,
      title: form.title.trim(),
      excerpt: form.excerpt.trim() || form.body.split('\n').find((l) => l.trim() && !l.trim().startsWith('#'))?.slice(0, 160) + '...' || '',
      date: form.date || new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      author: form.author || 'GHC GrowthLab',
      category: form.category,
      readTime: estimateReadTime(content),
      coverEmoji: form.coverEmoji || '🚀',
      coverGradient: 'linear-gradient(135deg, #0d5f59 0%, #1a7b74 60%, #2ea096 100%)',
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
      content: [
        ...content,
        { type: 'cta', title: 'Want expert eyes on your startup?', text: 'Talk to our team and get a tailored growth roadmap.', buttonLabel: 'Talk to Us' },
      ],
    };
    saveBlog(post);
    setShowForm(false);
    setEditingSlug(null);
    setForm(emptyForm);
    setRefresh((r) => r + 1);
  };

  const handleDelete = (slug: string) => {
    if (confirm('Delete this article permanently?')) {
      deleteBlog(slug);
      setRefresh((r) => r + 1);
    }
  };

  if (!authed) {
    return (
      <section style={{ minHeight: '100vh', backgroundColor: '#f7faf9', padding: '160px 24px 100px 24px', display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={login} style={{ backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '40px', maxWidth: '400px', width: '100%', height: 'fit-content' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>Blog Admin Login</h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>Enter the team password to add or edit articles — no coding needed.</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Admin password" style={{ ...inputStyle, marginBottom: '14px' }} />
          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}><span>Unlock Editor</span></button>
          <button type="button" onClick={() => navigate('/blog')} style={{ width: '100%', background: 'none', border: 'none', marginTop: '12px', color: '#64748b', fontSize: '13.5px', cursor: 'pointer' }}>← Back to blog</button>
        </form>
      </section>
    );
  }

  return (
    <section style={{ minHeight: '100vh', backgroundColor: '#f7faf9', padding: '130px 48px 100px 48px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <button onClick={() => navigate('/blog')} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#fff', border: '1px solid #dce7e4', borderRadius: '9999px', padding: '10px 20px', fontWeight: 700, fontSize: '13.5px', cursor: 'pointer', marginBottom: '20px', fontFamily: 'inherit' }}>
          <ArrowLeft size={15} /> View Blog
        </button>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>Blog CMS — no code needed</h1>
          <button onClick={startNew} className="btn-primary" style={{ padding: '11px 22px', fontSize: '13.5px' }}><Plus size={15} /><span>New Article</span></button>
        </div>
        <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '26px' }}>
          {all.length} article{all.length === 1 ? '' : 's'} live · {customCount} created in this editor (stored in this browser). To make team-wide publishing permanent, connect this same structure to a headless CMS later.
        </p>

        {showForm && (
          <form onSubmit={handleSave} style={{ backgroundColor: '#fff', borderRadius: '20px', border: '1.5px solid #14b8a6', padding: '32px', marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>{editingSlug ? 'Edit article' : 'New article'}</h3>
              <button type="button" onClick={() => setShowForm(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}><X size={20} /></button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="admin-grid">
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>TITLE *</label>
                <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. How We Helped a D2C Brand 3x Revenue" style={inputStyle} required />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>SHORT SUMMARY (shows on cards)</label>
                <input value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} placeholder="1–2 lines shown under the title" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>AUTHOR</label>
                <input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>DATE</label>
                <input value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} placeholder="15 Aug 2025" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>CATEGORY</label>
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} style={{ ...inputStyle, cursor: 'pointer' }}>
                  {blogCategories.filter((c) => c !== 'All').map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>COVER EMOJI</label>
                <input value={form.coverEmoji} onChange={(e) => setForm({ ...form, coverEmoji: e.target.value })} placeholder="🚀" style={inputStyle} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>TAGS (comma separated)</label>
                <input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="Pitch Deck, Fundraising" style={inputStyle} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>ARTICLE BODY * — use ## for headings, - for bullets, &gt; for quotes, ! for examples</label>
                <textarea value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} rows={14} placeholder={'First paragraph becomes the intro...\n\n## Start With a Bang\nYour first slide should...\n\n- Keep it simple\n- One idea per slide\n\n> A memorable quote\n\n! An example callout'} style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, fontFamily: 'inherit' }} required />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit" className="btn-primary" style={{ padding: '12px 28px', fontSize: '14px' }}><Save size={15} /><span>{editingSlug ? 'Save Changes' : 'Publish Article'}</span></button>
              <button type="button" onClick={() => setShowForm(false)} className="btn-secondary" style={{ padding: '12px 24px', fontSize: '14px' }}>Cancel</button>
            </div>
          </form>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {all.map((b) => (
            <div key={b.slug} style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '32px' }}>{b.coverEmoji}</span>
              <div style={{ flex: '1 1 280px' }}>
                <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1px', color: '#1a7b74' }}>{b.category.toUpperCase()} · {b.date}</div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>{b.title}</div>
                <div style={{ fontSize: '12.5px', color: '#94a3b8' }}>/blog/{b.slug}</div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => navigate(`/blog/${b.slug}`)} title="View" style={{ width: '38px', height: '38px', borderRadius: '10px', border: '1px solid #e2e8f0', backgroundColor: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}><Eye size={16} /></button>
                <button onClick={() => startEdit(b.slug)} title="Edit" style={{ width: '38px', height: '38px', borderRadius: '10px', border: '1px solid #e2e8f0', backgroundColor: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a7b74' }}><Pencil size={16} /></button>
                <button onClick={() => handleDelete(b.slug)} title="Delete" style={{ width: '38px', height: '38px', borderRadius: '10px', border: '1px solid #fecdd3', backgroundColor: '#fff1f2', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#be123c' }}><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 720px) { .admin-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};
