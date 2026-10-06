import React from 'react';

const storyParagraphs = [
  'GHC GrowthLab is a trailblazing consulting platform dedicated to empowering startups and MSMEs. Since day one, our mission has been to turn bold ideas into thriving businesses by simplifying complex challenges and unlocking growth opportunities.',
  'From securing funding to boosting digital presence, we provide end-to-end solutions tailored to the unique needs of early-stage ventures. Our flagship platform, elevate.ghcgrowthlab.com, serves as a one-stop destination for entrepreneurs seeking expert guidance, funding advisory, and strategic mentorship.',
  'We are a young and passionate team of business management professionals, driven by a shared goal, to create a lasting impact on the startup ecosystem and help founders achieve their biggest ambitions.',
  'Launched in 2021, GHC GrowthLab has been steadily growing beyond borders, working with founders across countries and industries. We believe every startup deserves a strong foundation, and we are here to help you build it.',
];

const team = [
  { label: 'Team Member 1', name: 'Manu Francis', role: 'Founder & CEO', initials: 'MF', color: '#0d9488' },
  { label: 'Team Member 2', name: 'Anna Jain Jose', role: 'Co-Founder', initials: 'AJ', color: '#7c3aed' },
];

export const OurStoryPage: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', width: '100%', backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.055) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 130% 110% at 50% 42%, black 62%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 130% 110% at 50% 42%, black 62%, transparent 100%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '130px 48px 20px 48px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1a7b74', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '20px' }}>
              Our Story
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.4vw, 3.6rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0f172a', lineHeight: 1.12, marginBottom: '16px' }}>
              A journey driven <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>by founders, for founders.</span>
            </h1>
            <p style={{ fontSize: '15.5px', color: '#52606d', lineHeight: 1.65 }}>
              Turning bold ideas into thriving businesses since 2021.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '20px 48px 80px 48px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {storyParagraphs.map((p, idx) => (
            <article
              key={idx}
              style={{
                borderRadius: '20px', backgroundColor: '#ffffff', border: '1px solid #e6f0ee',
                padding: '30px 32px', boxShadow: '0 10px 26px -12px rgba(15,157,143,0.1)',
              }}
            >
              <p style={{ fontSize: '15px', color: '#3f4753', lineHeight: 1.8, margin: 0 }}>{p}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ width: '100%', backgroundColor: '#f7faf9', padding: '80px 48px 100px 48px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', textAlign: 'center', marginBottom: '40px' }}>
            Meet Our <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>Team</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {team.map((m, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: '24px', overflow: 'hidden', backgroundColor: '#ffffff',
                  border: '1px solid rgba(226,232,240,0.9)', boxShadow: '0 12px 32px -8px rgba(18,86,81,0.1)',
                }}
              >
                <div style={{ height: '240px', background: 'linear-gradient(135deg, #e7f6f3 0%, #d3ece8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ width: '110px', height: '110px', borderRadius: '50%', backgroundColor: m.color, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '36px', border: '4px solid #ffffff', boxShadow: '0 12px 28px -6px rgba(0,0,0,0.2)' }}>
                    {m.initials}
                  </span>
                </div>
                <div style={{ padding: '22px 24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1.5px', color: '#94a3b8', marginBottom: '6px' }}>{m.label}</div>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#0f172a' }}>{m.name}</h3>
                  <p style={{ fontSize: '13.5px', color: '#64748b', marginTop: '4px' }}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
