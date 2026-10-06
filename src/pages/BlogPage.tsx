import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Search, Clock, CalendarDays, User, Plus, BookOpen } from 'lucide-react';
import { CtaBanner } from '../components/CtaBanner';
import { InsightsSection } from '../components/InsightsSection';
import { blogCategories } from '../data/blogs';
import { getAllBlogs } from '../utils/blogStore';

interface BlogPageProps {
  onReadArticle?: () => void;
  onReserveSeat?: (eventTitle: string) => void;
}

const trustPoints = [
  'New playbooks weekly',
  'Operator-written',
  'Free for founders',
];

const monoLabel: React.CSSProperties = {
  fontSize: '11.5px',
  fontWeight: 600,
  letterSpacing: '2.2px',
  color: '#6b7280',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
};

export const BlogPage: React.FC<BlogPageProps> = ({ onReadArticle, onReserveSeat }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const blogs = useMemo(() => getAllBlogs(), []);
  const filtered = blogs.filter((b) => {
    const matchCat = category === 'All' || b.category === category;
    const q = query.trim().toLowerCase();
    const matchQ =
      !q ||
      `${b.title} ${b.excerpt} ${b.author} ${b.tags.join(' ')}`.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  return (
    <>
      {/* Hero — same grid system as Programs / Services / Grants heroes */}
      <section data-hero style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.055) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 130% 110% at 50% 42%, black 62%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 130% 110% at 50% 42%, black 62%, transparent 100%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '122px 48px 20px 48px' }}>
          <div className="blog-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '64px', alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1a7b74', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '24px' }}>
                GHC GrowthLab Blog
              </div>
              <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.6rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '24px' }}>
                <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>Playbooks & stories</span><br />
                <span style={{ color: '#0a0a0a' }}>for founders.</span>
              </h1>
              <p style={{ fontSize: '17px', color: '#5b6472', maxWidth: '560px', lineHeight: 1.65, marginBottom: '32px' }}>
                Fundraising hacks, growth frameworks and operator notes — short, practical reads you can apply the same day.
              </p>
              <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', marginBottom: '32px' }}>
                {trustPoints.map((t, idx) => (
                  <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#5b6472', fontWeight: 500 }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1a7b74', boxShadow: '0 0 10px rgba(26,123,116,0.5)' }} /> {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '9999px', padding: '13px 20px', width: '100%', maxWidth: '400px' }}>
                  <Search size={17} style={{ color: '#64748b', flexShrink: 0 }} />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') document.getElementById('blog-list')?.scrollIntoView({ behavior: 'smooth' }); }}
                    placeholder="Search articles..."
                    style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '14.5px', width: '100%', color: '#0f172a' }}
                  />
                </div>
                <button
                  onClick={() => navigate('/blog/admin')}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#ffffff', border: '1px solid #dce7e4', borderRadius: '9999px', padding: '13px 22px', fontSize: '13.5px', fontWeight: 700, color: '#0f172a', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  <Plus size={15} /> Write / Manage
                </button>
              </div>
            </div>

            {/* Right card — same role as Programs apply card / Resources vault card */}
            <div style={{ position: 'relative', backgroundColor: '#ffffff', borderRadius: '20px', border: '1px solid #e8ecef', boxShadow: '0 30px 70px -20px rgba(15,23,42,0.18)', padding: '36px 34px 28px 34px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={monoLabel}>START READING</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', fontWeight: 700, letterSpacing: '2px', color: '#1a7b74', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#1a7b74', boxShadow: '0 0 10px rgba(26,123,116,0.6)' }} /> {blogs.length} LIVE
                </span>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.3, letterSpacing: '-0.01em', marginBottom: '16px' }}>
                Pick an article, apply it today.
              </h3>
              <p style={{ fontSize: '14px', color: '#5b6472', lineHeight: 1.55, marginBottom: '22px' }}>
                Browse by topic — fundraising, growth, legal, product — or search for exactly what you need.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '22px' }}>
                {blogCategories.filter((c) => c !== 'All').slice(0, 4).map((c) => (
                  <button
                    key={c}
                    onClick={() => { setCategory(c); document.getElementById('blog-list')?.scrollIntoView({ behavior: 'smooth' }); }}
                    style={{ padding: '8px 16px', borderRadius: '9999px', fontSize: '12.5px', fontWeight: 700, cursor: 'pointer', backgroundColor: category === c ? '#1a7b74' : '#f0fdfa', color: category === c ? '#ffffff' : '#1a7b74', border: '1px solid #99f6e4', fontFamily: 'inherit' }}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <button
                onClick={() => document.getElementById('blog-list')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  backgroundColor: '#1a7b74', color: '#ffffff', border: 'none', borderRadius: '12px',
                  padding: '16px 22px', fontWeight: 700, fontSize: '14px', letterSpacing: '1px',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', cursor: 'pointer',
                  boxShadow: '0 14px 30px -8px rgba(26,123,116,0.38)', transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#14635d'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1a7b74'; }}
              >
                <span>BROWSE ALL ARTICLES</span>
                <ArrowRight size={18} />
              </button>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
                <span style={{ ...monoLabel, fontSize: '10.5px' }}>• SHORT & PRACTICAL</span>
                <span style={{ ...monoLabel, fontSize: '10.5px' }}>FREE FOREVER</span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 1100px) {
            .blog-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>

      {/* Listing — vertical rectangle cards, same grid language as Programs tracks */}
      <section id="blog-list" style={{ width: '100%', backgroundColor: '#f7faf9', padding: '40px 48px 100px 48px' }}>
        <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
              Latest Articles{' '}
              <span style={{ color: '#1a7b74', fontSize: '20px' }}>
                ({filtered.length} Article{filtered.length === 1 ? '' : 's'})
              </span>
            </h2>
            <p style={{ fontSize: '14.5px', color: '#64748b', marginTop: '4px' }}>
              Operator notes on fundraising, growth and company building.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' }}>
            {blogCategories.map((c) => {
              const active = category === c;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  style={{
                    padding: '8px 18px', borderRadius: '9999px', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                    backgroundColor: active ? '#1a7b74' : '#ffffff', color: active ? '#ffffff' : '#475569',
                    border: active ? '1px solid #1a7b74' : '1px solid #e2e8f0',
                    boxShadow: active ? '0 4px 14px rgba(26, 123, 116, 0.28)' : '0 2px 4px rgba(0,0,0,0.02)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {c}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 24px', backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #eef2f1' }}>
              <span style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#e6f4f1', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <BookOpen size={28} style={{ color: '#1a7b74' }} />
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>No articles found</h3>
              <p style={{ fontSize: '14.5px', color: '#94a3b8' }}>Try a different search or category.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {filtered.map((b) => (
                <div
                  key={b.slug}
                  onClick={() => navigate(`/blog/${b.slug}`)}
                  style={{
                    borderRadius: '24px', overflow: 'hidden', backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0', boxShadow: '0 10px 24px -6px rgba(0,0,0,0.05)',
                    display: 'flex', flexDirection: 'column', minHeight: '540px',
                    cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = '#99f6e4'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(18,86,81,0.18)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = '0 10px 24px -6px rgba(0,0,0,0.05)'; }}
                >
                  <div style={{ background: b.coverGradient, height: '230px', minHeight: '230px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '76px', position: 'relative', overflow: 'hidden' }}>
                    <span>{b.coverEmoji}</span>
                    <span style={{ position: 'absolute', top: '16px', left: '16px', fontSize: '11px', fontWeight: 800, letterSpacing: '1px', color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.35)', padding: '5px 12px', borderRadius: '9999px' }}>
                      {b.category.toUpperCase()}
                    </span>
                  </div>
                  <div style={{ padding: '26px 24px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#0f172a', lineHeight: 1.35, marginBottom: '10px' }}>{b.title}</h3>
                    <p style={{ fontSize: '13.5px', color: '#52606d', lineHeight: 1.6, marginBottom: '18px', flex: 1 }}>{b.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '12.5px', color: '#64748b', marginBottom: '20px', flexWrap: 'wrap' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><CalendarDays size={13} /> {b.date}</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><Clock size={13} /> {b.readTime}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: '#64748b', marginBottom: '20px' }}>
                      <User size={13} />
                      <span style={{ fontWeight: 600, color: '#334155' }}>{b.author}</span>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(`/blog/${b.slug}`); }}
                      className="btn-secondary"
                      style={{ width: '100%', padding: '11px', fontSize: '13.5px', borderRadius: '12px', justifyContent: 'center' }}
                    >
                      <span>Read Article</span><ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <InsightsSection onReadArticle={onReadArticle} onReserveSeat={onReserveSeat} />
      <CtaBanner />
    </>
  );
};
