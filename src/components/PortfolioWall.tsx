import React from 'react';

interface Company {
  name: string;
  // TODO: picks up real client logos later — just set e.g. logo: '/logos/eduport.png'
  // (transparent PNG, square). When set, it renders inside the circle instead of the placeholder initial.
  logo?: string;
  color: string;
}

const placeholderPalette = [
  '#f97316', '#0d9488', '#2563eb', '#7c3aed', '#db2777',
  '#059669', '#d97706', '#0891b2', '#4f46e5', '#be123c',
];

const companyNames = [
  'Varsya', 'WebCRS', 'FemiSafe', 'NaturUp', 'Agua', "BHOOSHAN's Junior",
  'Apothecary', 'Tutar', 'Manetain', 'INTERVAL', 'Aifer', 'Carbon & Whale',
  'Eduport', 'Elance', 'Jezt Tech', 'Medecro AI', 'Rail Rolls', 'Risknox AI',
  'Rootflo', 'SuperBryn',
];

const focusLines = [
  'Mentored on fundraising, valuation and investor readiness.',
  'Supported through compliance, entity setup and grant access.',
  'Guided on go-to-market, pricing and early revenue growth.',
  'Advised on pitch deck, unit economics and scale-up planning.',
  'Backed with 1-on-1 mentoring and funding connections.',
];

const bottomTags = [
  'MENTORED BY GHC',
  'FUNDED WITH GHC',
  'GHC COMMUNITY',
  'PORTFOLIO STARTUP',
];

const companies: Company[] = companyNames.map((name, idx) => ({
  name,
  logo: undefined,
  color: placeholderPalette[idx % placeholderPalette.length],
}));

function placeholderInitial(name: string) {
  const clean = name.replace(/[^A-Za-z0-9 ]/g, '').trim();
  return clean ? clean[0].toUpperCase() : '?';
}

function renderCard(c: Company, idx: number, dark: boolean) {
  const focus = focusLines[idx % focusLines.length];
  const tag = bottomTags[idx % bottomTags.length];
  const topLabel = idx % 2 === 0 ? 'Portfolio Startup' : 'Community Member';

  return (
    <div
      key={idx}
      style={{
        borderRadius: '22px',
        padding: '28px 26px',
        backgroundColor: dark ? '#0b0f0e' : '#ffffff',
        border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e8e8e8',
        boxShadow: dark
          ? '0 18px 40px -12px rgba(0,0,0,0.45)'
          : '0 14px 32px -12px rgba(18,86,81,0.12)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <span style={{ fontSize: '15px', fontWeight: 500, color: dark ? '#9ca3af' : '#6b7280' }}>
        {topLabel}
      </span>

      <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span
          style={{
            width: '44px', height: '44px', borderRadius: '50%',
            backgroundColor: c.color, color: '#ffffff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden', flexShrink: 0,
          }}
        >
          {c.logo ? (
            <img
              src={c.logo}
              alt={`${c.name} logo`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <span style={{ fontSize: '18px', fontWeight: 800, lineHeight: 1 }}>
              {placeholderInitial(c.name)}
            </span>
          )}
        </span>
        <span style={{ fontSize: '18px', fontWeight: 800, color: dark ? '#ffffff' : '#0f172a', letterSpacing: '-0.01em' }}>
          {c.name}
        </span>
      </span>

      <p style={{ fontSize: '16.5px', lineHeight: 1.55, color: dark ? '#e5e7eb' : '#1f2937', margin: 0 }}>
        {focus}
      </p>

      <span style={{ fontSize: '11.5px', fontWeight: 500, letterSpacing: '2.5px', color: dark ? '#6b7280' : '#9ca3af' }}>
        {tag}
      </span>
    </div>
  );
}

export const PortfolioWall: React.FC = () => {
  const colA = companies.slice(0, 10);
  const colB = companies.slice(10);

  const renderColumn = (list: Company[], offset: number, duration: string, reverse: boolean) => (
    <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div
        className="portfolio-track"
        style={{
          display: 'flex', flexDirection: 'column', gap: '20px',
          animation: `portfolioScrollUp ${duration} linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {[0, 1].map((half) => (
          <div key={half} aria-hidden={half === 1} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {list.map((c, idx) => renderCard(c, offset + idx, (offset + idx) % 3 === 2))}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="portfolio" style={{ width: '100%', backgroundColor: '#ffffff', padding: '110px 48px 120px 48px', overflow: 'hidden' }}>
      <div className="portfolio-layout" style={{ maxWidth: '1380px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(340px, 440px) 1fr', gap: '64px', alignItems: 'start' }}>
        {/* Left sticky headline */}
        <div style={{ position: 'sticky', top: '120px' }}>
          <h2 style={{ fontSize: 'clamp(2.6rem, 4.2vw, 3.9rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.03em', color: '#0a0a0a', marginBottom: '24px' }}>
            <span style={{ fontStyle: 'italic', fontWeight: 700, color: '#1a7b74' }}>Discover inspiring</span> stories from founders.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.65, color: '#5b6470', maxWidth: '400px' }}>
            Real journeys from startups building with GHC Growth Lab — across funding, mentorship, compliance and scale-up.
          </p>
        </div>

        {/* Right dual-column vertical marquee */}
        <div className="portfolio-marquee" style={{ position: 'relative', height: '660px', overflow: 'hidden' }}>
          <div className="portfolio-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', height: '100%' }}>
            {renderColumn(colA, 0, '48s', false)}
            {renderColumn(colB, 10, '62s', false)}
          </div>

          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '110px', background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0) 100%)', pointerEvents: 'none', zIndex: 5 }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '110px', background: 'linear-gradient(0deg, #ffffff 0%, rgba(255,255,255,0) 100%)', pointerEvents: 'none', zIndex: 5 }} />
        </div>
      </div>

      <style>{`
        @keyframes portfolioScrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .portfolio-marquee:hover .portfolio-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .portfolio-track { animation: none !important; }
        }
        @media (max-width: 1024px) {
          .portfolio-layout { grid-template-columns: 1fr !important; gap: 44px !important; }
          .portfolio-marquee { height: 560px !important; }
        }
        @media (max-width: 640px) {
          .portfolio-cols { grid-template-columns: 1fr !important; }
          .portfolio-cols > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
};
