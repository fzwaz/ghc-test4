import React from 'react';

const members = [
  { name: 'Manu Francis', role: 'Founder & CEO', initials: 'MF', color: '#0d9488' },
  { name: 'Anna Jain Jose', role: 'Co-Founder', initials: 'AJ', color: '#7c3aed' },
];

export const OurTeam: React.FC = () => {
  return (
    <section style={{ width: '100%', backgroundColor: '#f7faf9', padding: '90px 48px 100px 48px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
        <div style={{ marginBottom: '44px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1b736b', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            OUR TEAM
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)', fontWeight: 800, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#0f172a', marginBottom: '16px' }}>
            A young and<br />passionate team<br /><span style={{ color: '#1a7b74' }}>with a shared goal.</span>
          </h2>
          <p style={{ fontSize: '14.5px', color: '#52606d', lineHeight: 1.65, maxWidth: '420px' }}>
            We are a team of business management professionals, driven by a shared goal to create a lasting impact on the startup ecosystem and help founders achieve their biggest ambitions.
          </p>
        </div>

        <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', maxWidth: '900px' }}>
          {members.map((m, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: '24px', overflow: 'hidden', backgroundColor: '#ffffff',
                border: '1px solid rgba(226,232,240,0.9)', boxShadow: '0 12px 32px -8px rgba(18,86,81,0.1)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(18,86,81,0.18)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 12px 32px -8px rgba(18,86,81,0.1)'; }}
            >
              <div style={{ height: '300px', background: `linear-gradient(135deg, #e7f6f3 0%, #d3ece8 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: m.color, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '38px', border: '4px solid #ffffff', boxShadow: '0 12px 28px -6px rgba(0,0,0,0.2)' }}>
                  {m.initials}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px' }}>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>{m.name}</h3>
                  <p style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>{m.role}</p>
                </div>
                <span style={{ minWidth: '34px', height: '34px', borderRadius: '8px', backgroundColor: '#0a66c2', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '14px', fontWeight: 900, padding: '0 8px' }}>
                  in
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 760px) { .team-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};
