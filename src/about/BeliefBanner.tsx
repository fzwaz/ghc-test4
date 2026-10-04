import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BeliefBannerProps {
  onPartner?: () => void;
}

export const BeliefBanner: React.FC<BeliefBannerProps> = ({ onPartner }) => {
  return (
    <section style={{ width: '100%', backgroundColor: '#f7faf9', padding: '0 48px 90px 48px' }}>
      <div
        style={{
          maxWidth: '1380px', margin: '0 auto', borderRadius: '28px', overflow: 'hidden',
          position: 'relative', boxShadow: '0 25px 60px -15px rgba(18,86,81,0.35)',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80"
          alt="Modern office building"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(8,55,51,0.96) 20%, rgba(8,55,51,0.82) 55%, rgba(8,55,51,0.55) 100%)' }} />
        <div className="belief-grid" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', padding: '64px 56px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)', color: '#99f6e4', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '20px' }}>
              OUR BELIEF
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, lineHeight: 1.25, color: '#ffffff', letterSpacing: '-0.02em' }}>
              We don't just help businesses raise funds. We help them become{' '}
              <span style={{ color: '#5eead4' }}>investment-ready</span> and{' '}
              <span style={{ color: '#5eead4' }}>future-ready.</span>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#ccfbf1', marginBottom: '28px' }}>
              We believe every startup deserves a strong foundation, and we are here to help you build it — with the right capital, the right strategy, and the right support.
            </p>
            <button
              onClick={onPartner}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#ffffff', color: '#125651', fontWeight: 700, fontSize: '14.5px', padding: '13px 28px', borderRadius: '9999px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
            >
              <span>Partner With Us</span><ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .belief-grid { grid-template-columns: 1fr !important; padding: 44px 32px !important; } }`}</style>
    </section>
  );
};
