import React from 'react';

const milestones = [
  {
    no: '01',
    title: 'The Beginning',
    desc: 'GHC GrowthLab began with a simple mission: to turn bold ideas into thriving businesses by simplifying complex challenges and unlocking growth opportunities.',
  },
  {
    no: '02',
    title: 'Building the Ecosystem',
    desc: 'From funding advisory to strategic mentorship and digital growth, we expanded our capabilities around the real needs of early-stage ventures, creating a one-stop platform for founders.',
  },
  {
    no: '03',
    title: 'Beyond Borders',
    desc: 'Launched in 2021, GHC GrowthLab has been steadily growing beyond borders, working with founders across countries and industries. We believe every startup deserves a strong foundation, and we are here to help you build it.',
  },
];

export const OurStory: React.FC = () => {
  return (
    <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '40px 48px 100px 48px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1b736b', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            OUR STORY
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)', fontWeight: 800, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#0f172a' }}>
            A journey driven<br />by founders, <span style={{ color: '#1a7b74' }}>for founders.</span>
          </h2>
        </div>

        <div className="story-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 440px) 1fr', gap: '72px', alignItems: 'start' }}>
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="GHC GrowthLab workspace"
              style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 20px 44px -12px rgba(18,86,81,0.22)', display: 'block' }}
            />
            <div
              className="glass-badge animate-float"
              style={{
                position: 'absolute', bottom: '28px', right: '-24px',
                backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: '16px',
                padding: '16px 22px', boxShadow: '0 16px 36px -8px rgba(18,86,81,0.2)',
                display: 'flex', flexDirection: 'column',
              }}
            >
              <span style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '1.5px', color: '#125651' }}>EST. 2021</span>
              <span style={{ fontSize: '12.5px', color: '#52606d', marginTop: '4px' }}>Turning ambition<br />into opportunity.</span>
            </div>
          </div>

          <div style={{ position: 'relative', paddingLeft: '36px' }}>
            <div style={{ position: 'absolute', left: '9px', top: '10px', bottom: '10px', width: '2px', background: 'linear-gradient(180deg, #99f6e4 0%, #14b8a6 50%, #99f6e4 100%)', borderRadius: '2px', opacity: 0.6 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {milestones.map((m, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '-36px', top: '2px', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#125651', border: '4px solid #ccfbf1', boxShadow: '0 0 0 4px rgba(20,184,166,0.15)' }} />
                  <div style={{ display: 'flex', gap: '18px', alignItems: 'baseline' }}>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#0d9488', letterSpacing: '1px' }}>{m.no}</span>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>{m.title}</h3>
                      <p style={{ fontSize: '14.5px', color: '#52606d', lineHeight: 1.65, maxWidth: '560px' }}>{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 1100px) { .story-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  );
};
