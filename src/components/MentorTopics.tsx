import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface MentorTopicsProps {
  onConnectMentor?: () => void;
}

const topics = [
  'Idea Validation', 'SEO', 'Fundraising', 'Pitch Deck', 'Branding',
  'AI/ML', 'Growth Strategy', 'Sales', 'Go to Market Strategy',
];

const stats = [
  { value: '1000+', label: 'Startup Consultations' },
  { value: '300+', label: 'Business Valuations' },
  { value: '100+', label: 'Fundings Facilitated' },
];

export const MentorTopics: React.FC<MentorTopicsProps> = ({ onConnectMentor }) => {
  return (
    <section id="topics" style={{ width: '100%', backgroundColor: '#f7faf9', padding: '90px 48px 100px 48px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '56px', alignItems: 'center' }} className="topics-grid">
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1b736b', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            1-ON-1 MENTORSHIP
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)', fontWeight: 800, lineHeight: 1.2, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Personalised 1-on-1 sessions <span style={{ color: '#1a7b74' }}>100% tailored to you</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#52606d', lineHeight: 1.6, marginBottom: '24px', maxWidth: '560px' }}>
            Get advice, support and feedback from top startup mentors on exactly what you're stuck on.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
            {topics.map((t, idx) => (
              <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: '#134e4a', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '8px 14px', borderRadius: '9999px' }}>
                <CheckCircle2 size={14} style={{ color: '#0d9488' }} /> {t}
              </span>
            ))}
          </div>
          <button onClick={onConnectMentor} className="btn-primary" style={{ padding: '13px 28px', fontSize: '15px' }}>
            <span>Connect with Mentor</span><ArrowRight size={16} />
          </button>
        </div>
        <div style={{ borderRadius: '32px', background: 'radial-gradient(600px 300px at 90% -10%, rgba(26,123,116,0.4) 0%, rgba(26,123,116,0) 60%), radial-gradient(500px 320px at -10% 112%, rgba(26,123,116,0.32) 0%, rgba(26,123,116,0) 60%), linear-gradient(180deg, #071a15 0%, #030d0a 100%)', border: '1px solid rgba(255,255,255,0.12)', padding: '48px 40px', boxShadow: '0 25px 60px -15px rgba(0,0,0,0.5), 0 0 44px rgba(26,123,116,0.1)', position: 'relative', overflow: 'hidden' }}>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 400 460" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="topicsGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <path d="M 250,-30 C 220,120 120,260 -20,340" stroke="#1a7b74" strokeWidth="2" fill="none" opacity="0.8" filter="url(#topicsGlow)" />
            <path d="M 250,-30 C 220,120 120,260 -20,340" stroke="#9adcd2" strokeWidth="0.8" fill="none" opacity="0.6" />
          </svg>
          <div style={{ position: 'absolute', top: '24px', left: '20px', width: '70px', height: '90px', backgroundImage: 'radial-gradient(rgba(26,123,116,0.5) 1.2px, transparent 1.6px)', backgroundSize: '16px 16px', pointerEvents: 'none', maskImage: 'radial-gradient(circle at 0% 0%, black 20%, transparent 75%)', WebkitMaskImage: 'radial-gradient(circle at 0% 0%, black 20%, transparent 75%)' }} />
          <div style={{ position: 'absolute', top: '-90px', right: '-70px', width: '280px', height: '220px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(26,123,116,0.35) 0%, rgba(26,123,116,0) 70%)', pointerEvents: 'none' }} />
          <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 800, marginBottom: '28px', position: 'relative', zIndex: 2 }}>Outcomes that compound</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 2 }}>
            {stats.map((s, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '18px', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '18px', padding: '18px 22px' }}>
                <span style={{ fontSize: '32px', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px', minWidth: '110px', textShadow: '0 0 26px rgba(45,212,191,0.4)' }}>{s.value}</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#ccfbf1' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 1100px) { .topics-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};
