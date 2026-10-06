import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays, User, Clock, Share2, Loader2 } from 'lucide-react';
import { CtaBanner } from '../components/CtaBanner';
import { fetchPostBySlug, fetchAllPosts } from '../lib/sanity';
import { SanityPortableText } from '../components/SanityPortableText';
import type { BlogPost } from '../data/blogs';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadPost() {
      if (!slug) return;
      setLoading(true);
      try {
        // Sanity is the single source of truth
        const [sanityPost, allSanityPosts] = await Promise.all([
          fetchPostBySlug(slug),
          fetchAllPosts(),
        ]);

        if (!isMounted) return;

        setPost(sanityPost);
        setRelated(allSanityPosts.filter((b) => b.slug !== slug).slice(0, 3));
      } catch (err) {
        console.warn('Failed to load blog post from Sanity:', err);
        if (isMounted) {
          setPost(null);
          setRelated([]);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadPost();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  const share = async () => {
    if (!post) return;
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: post.title, url });
      else {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      }
    } catch { /* dismissed */ }
  };

  if (loading) {
    return (
      <section style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '160px 48px 100px 48px', backgroundColor: '#fff' }}>
        <Loader2 size={36} style={{ color: '#1a7b74', marginBottom: '16px', animation: 'spin 1s linear infinite' }} />
        <p style={{ fontSize: '15px', color: '#64748b', fontWeight: 500 }}>Loading article...</p>
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </section>
    );
  }

  if (!post) {
    return (
      <section style={{ padding: '160px 48px 100px 48px', textAlign: 'center', backgroundColor: '#fff', minHeight: '60vh' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>Article not found</h2>
        <p style={{ fontSize: '14.5px', color: '#64748b', marginBottom: '24px' }}>The requested article does not exist or has been moved.</p>
        <button onClick={() => navigate('/blog')} className="btn-secondary" style={{ padding: '11px 26px', fontSize: '14px' }}>
          Back to Blog
        </button>
      </section>
    );
  }

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
          <div>
            <span style={{ display: 'inline-flex', fontSize: '11px', fontWeight: 800, letterSpacing: '1.4px', color: '#1a7b74', backgroundColor: '#e6f4f1', padding: '6px 14px', borderRadius: '9999px', marginBottom: '18px' }}>
              {post.category.toUpperCase()}
            </span>
          </div>
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
          {post.coverImageUrl ? (
            <div style={{ borderRadius: '24px', overflow: 'hidden', maxHeight: '420px', width: '100%' }}>
              <img src={post.coverImageUrl} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ) : (
            <div style={{ background: post.coverGradient, borderRadius: '24px', minHeight: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '110px', padding: '60px 24px' }}>
              <span>{post.coverEmoji}</span>
            </div>
          )}
        </div>
      </section>

      <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '36px 48px 90px 48px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <SanityPortableText content={post.content} />

          {post.tags && post.tags.length > 0 && (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '36px', paddingTop: '24px', borderTop: '1px solid #eef2f1' }}>
              {post.tags.map((t) => (
                <span key={t} style={{ fontSize: '12.5px', fontWeight: 600, color: '#1a7b74', backgroundColor: '#eefaf8', border: '1px solid rgba(20,184,166,0.25)', padding: '6px 14px', borderRadius: '9999px' }}>#{t}</span>
              ))}
            </div>
          )}

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
