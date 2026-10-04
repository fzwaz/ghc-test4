import React from 'react';
import { Play, Clock3 } from 'lucide-react';

const shorts = [
  { title: 'Partnership and LLP Can Be Converted to a Company', tag: 'Entity Setup', duration: '0:58' },
  { title: 'Can NRIs do business in India?', tag: 'Compliance', duration: '1:12' },
  { title: 'Stop chasing investors — build a product that makes them chase you', tag: 'Fundraising', duration: '1:05' },
  { title: 'Difference between LLP and Company', tag: 'Legal Basics', duration: '0:47' },
  { title: 'Foreign Direct Investment', tag: 'Investment', duration: '1:20' },
  { title: 'The Power of Multiple Expertise in Business', tag: 'Strategy', duration: '0:55' },
];

export const ShortsSection: React.FC = () => {
  return (
    <section style={{ width: '100%', backgroundColor: '#f7faf9', padding: '90px 48px 100px 48px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', marginBottom: '44px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1b736b', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              GHC SHORTS
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)', fontWeight: 800, lineHeight: 1.2, color: '#0f172a', letterSpacing: '-0.02em' }}>
              Bite-sized <span style={{ color: '#1a7b74' }}>founder knowledge</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#52606d', maxWidth: '560px', marginTop: '12px', lineHeight: 1.6 }}>
              60-second explainers on compliance, fundraising and company building.
            </p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {shorts.map((s, idx) => (
            <div key={idx} style={{ borderRadius: '22px', overflow: 'hidden', backgroundColor: '#0c2220', border: '1px solid rgba(20,184,166,0.2)', boxShadow: '0 12px 32px -8px rgba(18,86,81,0.18)', cursor: 'pointer', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ height: '170px', background: `linear-gradient(135deg, #115651 0%, #177068 ${30 + idx * 8}%, #083733 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '14px', left: '14px', fontSize: '10.5px', fontWeight: 800, letterSpacing: '1px', backgroundColor: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', color: '#99f6e4', padding: '4px 10px', borderRadius: '8px', textTransform: 'uppercase' }}>
                  {s.tag}
                </span>
                <span style={{ position: 'absolute', bottom: '14px', right: '14px', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11.5px', fontWeight: 700, color: '#ccfbf1', backgroundColor: 'rgba(0,0,0,0.35)', padding: '4px 10px', borderRadius: '8px' }}>
                  <Clock3 size={12} /> {s.duration}
                </span>
                <span style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#ffffff', color: '#125651', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 28px rgba(0,0,0,0.3)' }}>
                  <Play size={22} fill="#125651" />
                </span>
              </div>
              <div style={{ padding: '18px 20px 20px 20px' }}>
                <h3 style={{ fontSize: '14.5px', fontWeight: 700, color: '#ffffff', lineHeight: 1.45 }}>{s.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
