import React from 'react';
import { ArrowRight, Search, FileBarChart2, FileCheck2, BarChart3 } from 'lucide-react';

interface FundingSectionProps {
  onGetFunded?: () => void;
}

const steps = [
  { no: '01', icon: Search, text: 'Seeking The capital to boost your growth' },
  { no: '02', icon: FileBarChart2, text: 'Discover tailored funding solutions' },
  { no: '03', icon: FileCheck2, text: 'Submit your application with ease' },
  { no: '04', icon: BarChart3, text: 'Watch your startup thrive with funding' },
];

export const FundingSection: React.FC<FundingSectionProps> = ({ onGetFunded }) => {
  return (
    <section id="funding" style={{ position: 'relative', width: '100%', overflow: 'hidden', background: 'linear-gradient(180deg, #ffffff 0%, #f4fbfa 55%, #e9f5f4 100%)', padding: '110px 48px 150px 48px' }}>
      {/* Soft mint blob behind cards */}
      <div style={{ position: 'absolute', top: '40px', right: '-120px', width: '760px', height: '760px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(204,241,235,0.85) 0%, rgba(204,241,235,0.35) 45%, rgba(204,241,235,0) 70%)', pointerEvents: 'none' }} />

      {/* Dotted orbit arc behind cards */}
      <svg style={{ position: 'absolute', top: '20px', right: '60px', width: '720px', height: '720px', pointerEvents: 'none', overflow: 'visible' }} viewBox="0 0 720 720" fill="none">
        <ellipse cx="360" cy="380" rx="300" ry="300" stroke="#7dd3c8" strokeWidth="1.5" strokeDasharray="5 7" opacity="0.55" />
        <circle cx="360" cy="80" r="11" fill="#7dd3c8" opacity="0.7" />
        <circle cx="120" cy="230" r="9" fill="#5eead4" opacity="0.8" />
        <circle cx="630" cy="560" r="8" fill="#99f6e4" opacity="0.9" />
        <circle cx="470" cy="60" r="6" fill="#5eead4" opacity="0.5" />
      </svg>

      {/* Bottom waves */}
      <svg style={{ position: 'absolute', bottom: '-10px', left: 0, width: '100%', height: '220px', pointerEvents: 'none' }} viewBox="0 0 1440 220" preserveAspectRatio="none">
        <path d="M0,140 C240,60 420,60 720,130 C1020,200 1200,180 1440,110 L1440,220 L0,220 Z" fill="#dff0ef" opacity="0.7" />
        <path d="M0,170 C260,110 480,110 760,165 C1040,220 1240,210 1440,160 L1440,220 L0,220 Z" fill="#cfe8e7" opacity="0.55" />
      </svg>

      <div className="funding-layout" style={{ position: 'relative', zIndex: 10, maxWidth: '1380px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(360px, 470px) 1fr', gap: '48px', alignItems: 'center' }}>
        {/* Left copy */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1b736b', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '20px' }}>
            FUNDING FOR STARTUPS
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.6rem)', fontWeight: 800, lineHeight: 1.14, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: '20px' }}>
            Seeking the capital
            <br />
            <span style={{ color: '#1a7b74' }}>to boost your growth.</span>
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.65, color: '#52606d', fontWeight: 450, marginBottom: '36px', maxWidth: '460px' }}>
            Get connected with the right funding opportunities and access tailored support to take your startup forward.
          </p>
          <button
            onClick={onGetFunded}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              backgroundColor: '#0b5e56', color: '#ffffff',
              fontWeight: 700, fontSize: '16.5px', padding: '17px 38px',
              borderRadius: '9999px', border: 'none', cursor: 'pointer',
              boxShadow: '0 14px 30px -6px rgba(11,94,86,0.5)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 20px 38px -6px rgba(11,94,86,0.6)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 14px 30px -6px rgba(11,94,86,0.5)'; }}
          >
            <span>Get Funded Now</span>
            <ArrowRight size={19} />
          </button>
        </div>

        {/* Right staircase cards */}
        <div className="funding-cards" style={{ display: 'flex', alignItems: 'flex-end', gap: '18px', justifyContent: 'flex-end' }}>
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="funding-card"
                style={{
                  width: '190px', flexShrink: 0,
                  backgroundColor: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(6px)',
                  borderRadius: '22px',
                  padding: '20px 16px 22px 16px',
                  boxShadow: '0 24px 48px -16px rgba(15,157,143,0.28), 0 4px 12px rgba(15,157,143,0.08)',
                  border: '1px solid rgba(255,255,255,0.9)',
                  marginBottom: `${(3 - idx) * 40}px`,
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontSize: '34px', fontWeight: 800, color: '#c9e9e4', lineHeight: 1, marginBottom: '6px', letterSpacing: '-0.02em' }}>
                  {s.no}
                </div>
                <div style={{ width: '84px', height: '84px', borderRadius: '50%', background: 'radial-gradient(circle at 50% 40%, #eefaf8 0%, #dcf2ee 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px auto' }}>
                  <Icon size={40} style={{ color: '#0f9d8f' }} strokeWidth={1.6} />
                </div>
                <div style={{ width: '22px', height: '3px', borderRadius: '2px', backgroundColor: '#0f9d8f', marginBottom: '10px' }} />
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#101c3d', lineHeight: 1.45, margin: 0 }}>
                  {s.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1180px) {
          .funding-layout { grid-template-columns: 1fr !important; gap: 56px !important; }
          .funding-cards { justify-content: flex-start !important; flex-wrap: wrap !important; align-items: flex-start !important; }
          .funding-card { margin-bottom: 0 !important; }
        }
      `}</style>
    </section>
  );
};
