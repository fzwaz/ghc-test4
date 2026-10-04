import React from 'react';
import { ArrowRight, Video, CalendarClock, Network } from 'lucide-react';

interface BecomeMentorSectionProps {
  onBecomeMentor?: () => void;
}

const benefits = [
  { icon: Video, title: 'Connect and earn virtually with ease', desc: 'Host paid 1:1 sessions from anywhere — we handle discovery, scheduling and payments.' },
  { icon: CalendarClock, title: 'Set your own price and availability', desc: 'Full control over your calendar, session formats and pricing.' },
  { icon: Network, title: 'Build your personal brand and network', desc: 'Get featured across GHC startups, shorts and founder stories.' },
];

export const BecomeMentorSection: React.FC<BecomeMentorSectionProps> = ({ onBecomeMentor }) => {
  return (
    <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '90px 48px 100px 48px', borderTop: '1px solid rgba(226,232,240,0.6)' }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '56px', alignItems: 'center' }} className="become-grid">
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1b736b', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            FOR OPERATORS & FOUNDERS
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)', fontWeight: 800, lineHeight: 1.18, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Thinking about <span style={{ color: '#1a7b74' }}>mentoring?</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#52606d', lineHeight: 1.6, marginBottom: '28px' }}>
            Joining as a mentor has many benefits — share what you learned the hard way and get paid for it.
          </p>
          <button onClick={onBecomeMentor} className="btn-primary" style={{ padding: '13px 28px', fontSize: '15px' }}>
            <span>Become a Mentor</span><ArrowRight size={16} />
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', borderRadius: '20px', padding: '24px', backgroundColor: '#f7faf9', border: '1px solid #e2e8f0' }}>
                <span style={{ width: '46px', height: '46px', borderRadius: '14px', backgroundColor: '#125651', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={21} />
                </span>
                <div>
                  <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>{b.title}</h3>
                  <p style={{ fontSize: '14px', color: '#52606d', lineHeight: 1.6 }}>{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`@media (max-width: 1100px) { .become-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};
