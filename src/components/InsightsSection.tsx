import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Presentation, ChevronLeft, ChevronRight, CalendarDays, Ticket, Mail, Send, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import type { GhcEvent } from '../data/events';
import { fetchAllEvents, fetchAllPosts, fetchFeaturedPost } from '../lib/sanity';
import type { BlogPost } from '../data/blogs';

interface InsightsSectionProps {
  onReadArticle?: () => void;
  onReserveSeat?: (eventTitle: string) => void;
  showNewsletter?: boolean;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({
  onReadArticle,
  onReserveSeat,
  showNewsletter = false,
}) => {
  const [eventsList, setEventsList] = useState<GhcEvent[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [eventIdx, setEventIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        const [sanityEvents, sanityFeaturedPost] = await Promise.all([
          fetchAllEvents(),
          fetchFeaturedPost(),
        ]);
        if (!isMounted) return;
        // Sanity is the single source of truth — no seed merge
        setEventsList(sanityEvents || []);
        if (sanityFeaturedPost) {
          setFeaturedPost(sanityFeaturedPost);
        } else {
          // No featured flag set in Studio — fall back to latest Sanity post if any
          try {
            const all = await fetchAllPosts();
            if (isMounted && all.length > 0) setFeaturedPost(all[0]);
          } catch { /* keep empty */ }
        }
      } catch (err) {
        console.warn('Failed to load insights data from Sanity:', err);
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (paused || eventsList.length < 2 || showNewsletter) return;
    const timer = window.setInterval(() => {
      setEventIdx((i) => (i + 1) % eventsList.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, showNewsletter, eventsList.length]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const current = eventsList.length > 0 ? eventsList[eventIdx % eventsList.length] : null;

  return (
    <section id="resources" style={{ width: '100%', backgroundColor: '#f7faf9', padding: '90px 48px 100px 48px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1b736b', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            FOUNDER INSIGHTS
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)', fontWeight: 800, lineHeight: 1.2, color: '#0f172a', letterSpacing: '-0.02em' }}>
            Learn. Apply. <span style={{ color: '#1a7b74' }}>Raise.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '24px', alignItems: 'stretch' }} className="insights-grid">
          {/* Left Card: Pitch Deck Article */}
          <div style={{ borderRadius: '28px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '36px', boxShadow: '0 10px 28px -6px rgba(18,86,81,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#125651', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Presentation size={20} />
                </span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>
                  {featuredPost ? `${featuredPost.date} • ${featuredPost.readTime} • ${featuredPost.category}` : 'No featured article yet'}
                </span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                {featuredPost ? featuredPost.title : 'Add your first blog post in Sanity Studio'}
              </h3>
              <p style={{ fontSize: '15px', color: '#52606d', lineHeight: 1.65, marginBottom: '28px' }}>
                {featuredPost ? featuredPost.excerpt : 'Publish a post in Studio and mark it Featured to show it here.'}
              </p>
            </div>
            <button onClick={onReadArticle} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: '#125651', fontWeight: 800, fontSize: '15px', cursor: 'pointer', padding: 0 }}>
              <span>Read Full Article</span><ArrowUpRight size={18} />
            </button>
          </div>

          {/* Right Card: Glow Card with Newsletter (Homepage) or Events Carousel (Other Pages) */}
          <div style={{ borderRadius: '28px', background: 'radial-gradient(560px 280px at 90% -10%, rgba(26,123,116,0.4) 0%, rgba(26,123,116,0) 60%), radial-gradient(480px 300px at -10% 112%, rgba(26,123,116,0.3) 0%, rgba(26,123,116,0) 60%), linear-gradient(180deg, #071a15 0%, #030d0a 100%)', border: '1px solid rgba(255,255,255,0.12)', padding: '36px 32px', boxShadow: '0 25px 60px -15px rgba(0,0,0,0.5), 0 0 44px rgba(26,123,116,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 400 560" preserveAspectRatio="xMidYMid slice">
              <defs>
                <filter id="insightsGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <path d="M 260,-30 C 230,140 130,300 -20,390" stroke="#1a7b74" strokeWidth="2" fill="none" opacity="0.8" filter="url(#insightsGlow)" />
              <path d="M 260,-30 C 230,140 130,300 -20,390" stroke="#9adcd2" strokeWidth="0.8" fill="none" opacity="0.6" />
            </svg>
            <div style={{ position: 'absolute', top: '20px', left: '18px', width: '64px', height: '80px', backgroundImage: 'radial-gradient(rgba(26,123,116,0.5) 1.2px, transparent 1.6px)', backgroundSize: '16px 16px', pointerEvents: 'none', maskImage: 'radial-gradient(circle at 0% 0%, black 20%, transparent 75%)', WebkitMaskImage: 'radial-gradient(circle at 0% 0%, black 20%, transparent 75%)' }} />
            <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '260px', height: '200px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(26,123,116,0.35) 0%, rgba(26,123,116,0) 70%)', pointerEvents: 'none' }} />

            {showNewsletter ? (
              /* Newsletter Subscription Mode (Homepage Only) */
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1.4px', color: '#125651', backgroundColor: '#e6f4f1', padding: '4px 10px', borderRadius: '6px' }}>
                      NEWSLETTER
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', fontWeight: 700, color: '#2dd4bf', letterSpacing: '0.8px' }}>
                      <Sparkles size={13} /> BI-WEEKLY
                    </span>
                  </div>

                  <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', lineHeight: 1.25, marginBottom: '10px' }}>
                    Founder Dispatch & Insights
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#a7bcb8', lineHeight: 1.6, marginBottom: '22px' }}>
                    Get exclusive venture blueprints, funding alerts, and proven growth playbooks delivered straight to your inbox.
                  </p>
                </div>

                <div>
                  {isSubscribed ? (
                    <div
                      style={{
                        backgroundColor: 'rgba(45, 212, 191, 0.15)',
                        border: '1px solid #2dd4bf',
                        borderRadius: '14px',
                        padding: '18px 16px',
                        textAlign: 'center',
                        color: '#5eead4',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        marginBottom: '10px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '15px' }}>
                        <CheckCircle2 size={18} color="#2dd4bf" /> You're Subscribed!
                      </div>
                      <span style={{ fontSize: '12.5px', color: '#99f6e4' }}>
                        Check your inbox for the latest edition of Founder Dispatch.
                      </span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ position: 'relative' }}>
                        <Mail
                          size={17}
                          style={{
                            position: 'absolute',
                            left: '14px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#5eead4',
                            pointerEvents: 'none',
                          }}
                        />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your work email..."
                          style={{
                            width: '100%',
                            boxSizing: 'border-box',
                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '12px',
                            padding: '14px 14px 14px 42px',
                            fontSize: '14px',
                            color: '#ffffff',
                            outline: 'none',
                            transition: 'border-color 0.2s',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = '#2dd4bf')}
                          onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)')}
                        />
                      </div>

                      <button
                        type="submit"
                        style={{
                          width: '100%',
                          backgroundColor: '#ffffff',
                          color: '#125651',
                          border: 'none',
                          borderRadius: '12px',
                          padding: '14px',
                          fontWeight: 700,
                          fontSize: '15.5px',
                          letterSpacing: '0.2px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#2dd4bf';
                          e.currentTarget.style.color = '#031e1a';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#ffffff';
                          e.currentTarget.style.color = '#125651';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <Send size={16} />
                        <span>Subscribe</span>
                      </button>
                    </form>
                  )}

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '16px',
                      paddingTop: '12px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                      fontSize: '11.5px',
                      color: '#7d938f',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      <ShieldCheck size={14} color="#2dd4bf" /> No spam guaranteed
                    </span>
                    <span>10,000+ founders</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Events Carousel Mode (Default for other pages) */
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1.4px', color: '#125651', backgroundColor: '#e6f4f1', padding: '4px 10px', borderRadius: '6px' }}>
                    EVENTS
                  </span>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#7d8f8c', letterSpacing: '1px' }}>
                    {eventsList.length > 0 ? `${(eventIdx % eventsList.length) + 1} / ${eventsList.length}` : '0 / 0'}
                  </span>
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '14px' }}>Ongoing & Upcoming Events</h3>
                {current && (
                  <div style={{ minHeight: '148px' }}>
                    {current.status === 'ongoing' ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '11px', fontWeight: 800, letterSpacing: '1.6px', color: '#2dd4bf', backgroundColor: 'rgba(45,212,191,0.12)', border: '1px solid rgba(45,212,191,0.35)', padding: '5px 12px', borderRadius: '9999px', marginBottom: '12px' }}>
                        <span className="event-pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2dd4bf' }} /> ONGOING NOW
                      </span>
                    ) : (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '11px', fontWeight: 800, letterSpacing: '1.6px', color: '#99f6e4', backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.16)', padding: '5px 12px', borderRadius: '9999px', marginBottom: '12px' }}>
                        <CalendarDays size={12} /> UPCOMING
                      </span>
                    )}
                    <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#fff', lineHeight: 1.35, marginBottom: '6px' }}>{current.title}</h4>
                    <p style={{ fontSize: '12.5px', fontWeight: 600, color: '#99f6e4', marginBottom: '8px' }}>{current.schedule} · {current.mode}</p>
                    <p style={{ fontSize: '13.5px', color: '#a7bcb8', lineHeight: 1.55 }}>{current.desc}</p>
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px', marginBottom: '16px' }}>
                  <button
                    aria-label="Previous event"
                    onClick={() => setEventIdx((i) => (i - 1 + eventsList.length) % eventsList.length)}
                    style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.16)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    aria-label="Next event"
                    onClick={() => setEventIdx((i) => (i + 1) % eventsList.length)}
                    style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.16)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                  >
                    <ChevronRight size={16} />
                  </button>
                  <div style={{ display: 'flex', gap: '6px', marginLeft: '4px' }}>
                    {eventsList.map((e, dotIdx) => (
                      <button
                        key={e.id}
                        aria-label={`Go to event ${dotIdx + 1}`}
                        onClick={() => setEventIdx(dotIdx)}
                        style={{ width: dotIdx === eventIdx % eventsList.length ? '22px' : '8px', height: '8px', borderRadius: '9999px', border: 'none', cursor: 'pointer', backgroundColor: dotIdx === eventIdx % eventsList.length ? '#2dd4bf' : 'rgba(255,255,255,0.25)', transition: 'all 0.25s ease', padding: 0 }}
                      />
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => current && onReserveSeat?.(current.title)}
                  style={{ width: '100%', backgroundColor: '#fff', color: '#125651', border: 'none', borderRadius: '12px', padding: '15px', fontWeight: 700, fontSize: '16.5px', letterSpacing: '0.2px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                >
                  <Ticket size={19} strokeWidth={2.2} /><span>Reserve a Seat</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes eventPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(45,212,191,0.55); }
          50% { box-shadow: 0 0 0 6px rgba(45,212,191,0); }
        }
        .event-pulse-dot { animation: eventPulse 1.8s ease-out infinite; }
        @media (max-width: 1100px) { .insights-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};
