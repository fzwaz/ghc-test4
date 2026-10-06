import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, User, Clock, Share2 } from 'lucide-react';
import { CtaBanner } from '../components/CtaBanner';
import { getAllBlogs } from '../utils/blogStore';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const blogs = useMemo(() => getAllBlogs(), []);
  const post = blogs.find((b) => b.slug === slug);
  const related = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <section style={{ padding: '160px 48px 100px 48px', textAlign: 'center', backgroundColor: '#fff' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>Article not found</h2>
        <button onClick={() => navigate('/blog')} className="btn-secondary" style={{ padding: '11px 26px', fontSize: '14px' }}>
          Back to Blog
        </button>
      </section>
    );
  }

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: post.title, url });
      else {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      }
    } catch { /* dismissed */ }
  };

  return (
    <>
      <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '130px 48px 20px 48px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <button
            onClick={() => navigate('/blog')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#ffffff', color: '#0f172a', border: '1px solid #dce7e4', borderRadius: '9999px', padding: '10px 20px', fontWeight: 700, fontSize: '13.5px', cursor: 'pointer', marginBottom: '26px', fontFamily: 'inherit' }}
          >
            <ArrowLeft size={15} /> All Articles
          </button>
          <span style={{ display: 'inline-flex', fontSize: '11px', fontWeight: 800, letterSpacing: '1.4px', color: '#1a7b74', backgroundColor: '#e6f4f1', padding: '6px 14px', borderRadius: '9999px', marginBottom: '18px' }}>
            {post.category.toUpperCase()}
          </span>
          <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '16px' }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', fontSize: '13.5px', color: '#64748b', flexWrap: 'wrap', marginBottom: '28px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><CalendarDays size={14} /> Published {post.date}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><User size={14} /> By {post.author}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><Clock size={14} /> {post.readTime}</span>
            <button onClick={share} style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'none', border: '1px solid #e2e8f0', borderRadius: '9999px', padding: '7px 16px', fontSize: '13px', fontWeight: 700, color: '#0f172a', cursor: 'pointer' }}>
              <Share2 size={13} /> Share
            </button>
          </div>
        </div>
      </section>

      <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '0 48px 20px 48px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ background: post.coverGradient, borderRadius: '24px', minHeight: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '110px', padding: '60px 24px' }}>
            <span>{post.coverEmoji}</span>
          </div>
        </div>
      </section>

      <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '36px 48px 90px 48px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {post.content.map((block, i) => {
            if (block.type === 'intro')
              return <p key={i} style={{ fontSize: '18px', color: '#334155', lineHeight: 1.75, marginBottom: '30px', fontWeight: 500 }}>{block.text}</p>;
            if (block.type === 'heading')
              return <h2 key={i} style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em', margin: '38px 0 14px 0' }}>{block.text}</h2>;
            if (block.type === 'paragraph')
              return <p key={i} style={{ fontSize: '16px', color: '#475569', lineHeight: 1.75, marginBottom: '18px' }}>{block.text}</p>;
            if (block.type === 'example')
              return (
                <div key={i} style={{ borderLeft: '4px solid #1a7b74', backgroundColor: '#f0fdfa', borderRadius: '0 12px 12px 0', padding: '16px 20px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1.4px', color: '#1a7b74', marginBottom: '6px' }}>EXAMPLE</div>
                  <p style={{ fontSize: '15.5px', fontStyle: 'italic', color: '#0f172a', lineHeight: 1.6 }}>“{block.text}”</p>
                </div>
              );
            if (block.type === 'list')
              return (
                <ul key={i} style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {block.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', gap: '10px', fontSize: '15.5px', color: '#334155', lineHeight: 1.6 }}>
                      <span style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#e6f4f1', color: '#1a7b74', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 800, flexShrink: 0, marginTop: '2px' }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            if (block.type === 'quote')
              return (
                <blockquote key={i} style={{ borderRadius: '16px', backgroundColor: '#0f2a3c', color: '#ffffff', padding: '28px 30px', margin: '32px 0', fontSize: '17px', lineHeight: 1.7, fontStyle: 'italic' }}>
                  “{block.text}”
                </blockquote>
              );
            return (
              <div key={i} style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #071a15 0%, #0d3a34 100%)', padding: '36px', margin: '36px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>{block.title}</h3>
                  <p style={{ fontSize: '14.5px', color: '#a7c4c0', lineHeight: 1.6 }}>{block.text}</p>
                </div>
                <button
                  onClick={() => navigate('/')}
                  style={{ backgroundColor: '#2dd4bf', color: '#052e22', border: 'none', borderRadius: '9999px', padding: '13px 28px', fontWeight: 800, fontSize: '14px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}
                >
                  <span>{block.buttonLabel}</span><ArrowRight size={15} />
                </button>
              </div>
            );
          })}

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '36px', paddingTop: '24px', borderTop: '1px solid #eef2f1' }}>
            {post.tags.map((t) => (
              <span key={t} style={{ fontSize: '12.5px', fontWeight: 600, color: '#1a7b74', backgroundColor: '#eefaf8', border: '1px solid rgba(20,184,166,0.25)', padding: '6px 14px', borderRadius: '9999px' }}>#{t}</span>
            ))}
          </div>

          {related.length > 0 && (
            <div style={{ marginTop: '56px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '20px' }}>Keep reading</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
                {related.map((r) => (
                  <div key={r.slug} onClick={() => navigate(`/blog/${r.slug}`)} style={{ backgroundColor: '#f7faf9', border: '1px solid #e6f0ee', borderRadius: '16px', padding: '22px', cursor: 'pointer' }}>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#1a7b74', letterSpacing: '1px', marginBottom: '8px' }}>{r.category.toUpperCase()}</div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', lineHeight: 1.4, marginBottom: '8px' }}>{r.title}</div>
                    <div style={{ fontSize: '12.5px', color: '#94a3b8' }}>{r.date} · {r.readTime}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
};
