import React from 'react';
import { ArrowRight, Rocket, Handshake, BarChart3, Globe } from 'lucide-react';

const impacts = [
  { icon: Rocket, title: 'Empower', desc: 'Startups & MSMEs' },
  { icon: Handshake, title: 'Bridge', desc: 'The Gap Between Capital & Ideas' },
  { icon: BarChart3, title: 'Enable', desc: 'Sustainable Growth' },
  { icon: Globe, title: 'Connect', desc: 'Global Opportunities' },
];

export const Impact: React.FC = () => {
  return (
    <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '20px 48px 80px 48px' }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1b736b', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '40px' }}>
          OUR IMPACT
        </div>
        <div className="impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {impacts.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px' }}>
                <span style={{ width: '52px', height: '52px', borderRadius: '16px', backgroundColor: '#e6f4f1', color: '#125651', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Icon size={24} />
                </span>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>{item.title}</h3>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5, maxWidth: '200px' }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`@media (max-width: 860px) { .impact-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
    </section>
  );
};

interface ClosingCtaProps {
  onTalk?: () => void;
  onFunded?: () => void;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({ onTalk, onFunded }) => {
  return (
    <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '0 48px 100px 48px' }}>
      <div
        className="about-cta-grid"
        style={{
          maxWidth: '1380px', margin: '0 auto', borderRadius: '28px',
          background: 'linear-gradient(120deg, #eef7f6 0%, #e2f0ee 100%)',
          border: '1px solid rgba(20,184,166,0.18)',
          padding: '56px', display: 'grid', gridTemplateColumns: '1fr auto',
          gap: '32px', alignItems: 'center',
        }}
      >
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1b736b', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            LET'S BUILD TOGETHER
          </div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#0f172a' }}>
            Building something ambitious?<br /><span style={{ color: '#1a7b74' }}>Let's build it together.</span>
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <button onClick={onTalk} className="btn-primary" style={{ padding: '13px 28px', fontSize: '15px' }}>
            <span>Talk to GHC</span><ArrowRight size={16} />
          </button>
          <button onClick={onFunded} className="btn-secondary" style={{ padding: '12px 26px', fontSize: '15px' }}>
            <span>Explore Funding</span><ArrowRight size={16} />
          </button>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .about-cta-grid { grid-template-columns: 1fr !important; padding: 40px 32px !important; } }`}</style>
    </section>
  );
};
