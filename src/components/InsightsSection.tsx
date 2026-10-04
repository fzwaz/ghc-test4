import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Send, CheckCircle2, Presentation } from 'lucide-react';

interface InsightsSectionProps {
  onReadArticle?: () => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onReadArticle }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
          <div style={{ borderRadius: '28px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '36px', boxShadow: '0 10px 28px -6px rgba(18,86,81,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#125651', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Presentation size={20} />
                </span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>15 Aug 2025 • 6 min read • Fundraising</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Pitch Deck Hacks: How to Impress Investors in the First 3 Minutes
              </h3>
              <p style={{ fontSize: '15px', color: '#52606d', lineHeight: 1.65, marginBottom: '28px' }}>
                In the world of fundraising, your pitch deck is more than just slides — it's your startup's story, your vision, and your invitation for investors to join your journey. Most investors decide whether to keep listening within the first 3 minutes. Here's how to make those minutes count.
              </p>
            </div>
            <button onClick={onReadArticle} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: '#125651', fontWeight: 800, fontSize: '15px', cursor: 'pointer', padding: 0 }}>
              <span>Read Full Article</span><ArrowUpRight size={18} />
            </button>
          </div>

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
            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Subscribe to our Newsletter</h3>
            <p style={{ fontSize: '14.5px', color: '#ccfbf1', lineHeight: 1.6, marginBottom: '24px' }}>
              Stay updated with latest trends and techniques in the world of entrepreneurship. Subscribe now!
            </p>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.25)', color: '#5eead4', padding: '12px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: 600 }}>
                <CheckCircle2 size={17} /> You're subscribed. Welcome aboard!
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <input type="email" required placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}
                  style={{ flex: '1 1 200px', backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '12px', padding: '13px 16px', color: '#fff', fontSize: '14px', outline: 'none' }} />
                <button type="submit" style={{ backgroundColor: '#fff', color: '#125651', border: 'none', borderRadius: '12px', padding: '0 20px', minHeight: '48px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Send size={15} /><span>Subscribe</span>
                </button>
              </form>
            )}
            <div style={{ marginTop: '22px', display: 'flex', alignItems: 'center', gap: '8px', color: '#99f6e4', fontSize: '12.5px', fontWeight: 600 }}>
              <ArrowRight size={14} /> Join 5,000+ founders reading weekly
            </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 1100px) { .insights-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};
