import React, { useState } from 'react';
import { ArrowRight, Check, CheckCircle2, ChevronDown, TrendingUp, Coins, Handshake } from 'lucide-react';
import { CtaBanner } from '../components/CtaBanner';
import { InsightsSection } from '../components/InsightsSection';

interface FundingPageProps {
  onApply?: (fundingType: string) => void;
  onGetFunded?: () => void;
  onReadArticle?: () => void;
  onReserveSeat?: (eventTitle: string) => void;
}

const trustPoints = [
  'Equity + venture debt expertise',
  '20+ investor & lender partners',
  'Angel to FDI advisory',
];

const monoLabel: React.CSSProperties = {
  fontSize: '11.5px',
  fontWeight: 600,
  letterSpacing: '2.2px',
  color: '#6b7280',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
};

const CornerTick: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <span style={{ position: 'absolute', width: '14px', height: '14px', borderColor: '#cbd5e1', borderStyle: 'solid', borderWidth: 0, pointerEvents: 'none', ...style }} />
);

const FundingApplyCard: React.FC<{ onApply?: (fundingType: string) => void }> = ({ onApply }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [fundingType, setFundingType] = useState('Equity Funding');
  const [submitted, setSubmitted] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '15px 18px', borderRadius: '10px',
    border: '1px solid #e5e7eb', fontSize: '14.5px', outline: 'none',
    backgroundColor: '#ffffff', color: '#0f172a',
  };

  return (
    <div style={{ position: 'relative', backgroundColor: '#ffffff', borderRadius: '20px', border: '1px solid #e8ecef', boxShadow: '0 30px 70px -20px rgba(15,23,42,0.18)', padding: '36px 34px 28px 34px' }}>
      <CornerTick style={{ top: '10px', left: '10px', borderTopWidth: '1.5px', borderLeftWidth: '1.5px', borderTopLeftRadius: '4px' }} />
      <CornerTick style={{ top: '10px', right: '10px', borderTopWidth: '1.5px', borderRightWidth: '1.5px', borderTopRightRadius: '4px' }} />
      <CornerTick style={{ bottom: '10px', left: '10px', borderBottomWidth: '1.5px', borderLeftWidth: '1.5px', borderBottomLeftRadius: '4px' }} />
      <CornerTick style={{ bottom: '10px', right: '10px', borderBottomWidth: '1.5px', borderRightWidth: '1.5px', borderBottomRightRadius: '4px' }} />

      {submitted ? (
        <div style={{ textAlign: 'center', padding: '40px 10px' }}>
          <span style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#e6f4f1', color: '#1a7b74', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', boxShadow: '0 0 32px rgba(26,123,116,0.25)' }}>
            <CheckCircle2 size={34} />
          </span>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0a0a0a', marginBottom: '10px' }}>Application received{name ? `, ${name.split(' ')[0]}` : ''}!</h3>
          <p style={{ fontSize: '14.5px', color: '#5b6472', lineHeight: 1.6, marginBottom: '24px' }}>
            Our funding desk will review your venture and reach out within 24 hours with next steps for {fundingType}.
          </p>
          <button onClick={() => { setSubmitted(false); onApply?.(fundingType); }} style={{ background: 'none', border: 'none', color: '#1a7b74', fontWeight: 700, fontSize: '14px', cursor: 'pointer', textDecoration: 'underline' }}>
            Submit another application
          </button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); onApply?.(fundingType); }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span style={monoLabel}>JOIN FUNDING DESK</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', fontWeight: 700, letterSpacing: '2px', color: '#1a7b74', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#1a7b74', boxShadow: '0 0 10px rgba(26,123,116,0.6)' }} /> FUNDING OPEN
            </span>
          </div>

          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.3, letterSpacing: '-0.01em', marginBottom: '20px' }}>
            Get funded on your terms.
          </h3>
          <div style={{ height: '1px', backgroundColor: '#eef1f4', marginBottom: '22px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <label style={{ ...monoLabel, display: 'block', marginBottom: '8px' }}>FOUNDER NAME <span style={{ color: '#1a7b74' }}>*</span></label>
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Rahul Raghav" style={inputStyle} />
            </div>
            <div>
              <label style={{ ...monoLabel, display: 'block', marginBottom: '8px' }}>WORK EMAIL <span style={{ color: '#1a7b74' }}>*</span></label>
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="rahul@venture.io" style={inputStyle} />
            </div>
            <div>
              <label style={{ ...monoLabel, display: 'block', marginBottom: '8px' }}>FUNDING TYPE</label>
              <div style={{ position: 'relative' }}>
                <select value={fundingType} onChange={(e) => setFundingType(e.target.value)} style={{ ...inputStyle, appearance: 'none', WebkitAppearance: 'none', color: '#0f172a', cursor: 'pointer', paddingRight: '44px' }}>
                  <option value="Equity Funding">Equity Funding — Angel, Bank Loans & FDI</option>
                  <option value="Venture Debt Funding">Venture Debt Funding — Non-dilutive growth capital</option>
                </select>
                <ChevronDown size={16} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }} />
              </div>
            </div>
            <button
              type="submit"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                backgroundColor: '#1a7b74', color: '#ffffff', border: 'none', borderRadius: '12px',
                padding: '18px 24px', fontWeight: 700, fontSize: '14px', letterSpacing: '2px',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                cursor: 'pointer', marginTop: '6px', boxShadow: '0 14px 30px -8px rgba(26,123,116,0.38)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#14635d'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1a7b74'; }}
            >
              <span>APPLY FOR FUNDING</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
        <span style={{ ...monoLabel, fontSize: '10.5px' }}>• INVESTOR READY</span>
        <span style={{ ...monoLabel, fontSize: '10.5px' }}>REPLY &lt; 24H</span>
      </div>
    </div>
  );
};

const fundingOptions = [
  {
    id: 'equity-funding',
    tag: 'EQUITY FUNDING • STRATEGIC INVESTMENT',
    title: 'Equity Funding',
    icon: TrendingUp,
    desc: 'Partner with us to unlock a strategic investment from Equity Funding. We offer a full spectrum of investment banking solutions, from Angel Investments and traditional Bank Loans, personalized financing solutions, customized financing options, and navigating Foreign Direct Investment (FDI). Our experts will craft a strategic funding plan to empower your entrepreneurial vision and ignite long-term success.',
    points: [
      'Angel Investments & curated investor introductions',
      'Traditional Bank Loans with personalized financing solutions',
      'Customized financing options structured around your stage',
      'Foreign Direct Investment (FDI) navigation & compliance',
    ],
    associates: ['Kalaari Capital', '100x.vc', 'Dexter Capital'],
    extraCount: '+9',
  },
  {
    id: 'venture-debt-funding',
    tag: 'VENTURE DEBT • NON-DILUTIVE GROWTH CAPITAL',
    title: 'Venture Debt Funding',
    icon: Coins,
    desc: 'We understand the unique challenges and opportunities you face, and our team is here to help you leverage venture debt to efficiently fuel your growth journey. Our Venture Debt program is a powerful financial tool designed to propel eligible startups forward.',
    points: [
      'Non-dilutive capital to extend runway between rounds',
      'Eligibility assessment & debt-readiness preparation',
      'Curated introductions to venture debt partners',
      'Repayment structures aligned to your cash flows',
    ],
    associates: ['Phoenix Angels', 'Stride Ventures', 'Venture Catalysts', '100x.vc'],
    extraCount: '+10',
  },
];

const AssociatesRow: React.FC<{ associates: string[]; extraCount: string }> = ({ associates, extraCount }) => (
  <div>
    <div style={{ ...monoLabel, marginBottom: '12px' }}>OUR ASSOCIATES</div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
      {associates.map((name) => (
        <span
          key={name}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: '#f0fdfa', border: '1px solid #ccfbf1',
            color: '#115651', fontSize: '13px', fontWeight: 700,
            padding: '8px 14px', borderRadius: '9999px',
          }}
        >
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#14b8a6' }} />
          {name}
        </span>
      ))}
      <span
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: '#0b5e56', color: '#ffffff',
          fontSize: '12.5px', fontWeight: 800,
          padding: '8px 14px', borderRadius: '9999px', letterSpacing: '0.3px',
        }}
      >
        {extraCount}
      </span>
    </div>
  </div>
);

export const FundingPage: React.FC<FundingPageProps> = ({ onApply, onGetFunded, onReadArticle, onReserveSeat }) => {
  return (
    <>
      {/* Hero — same system as Programs hero */}
      <section data-hero style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.055) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 130% 110% at 50% 42%, black 62%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 130% 110% at 50% 42%, black 62%, transparent 100%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '122px 48px 20px 48px' }}>
          <div className="funding-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '64px', alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1a7b74', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '24px' }}>
                STRATEGIC FUNDING SOLUTIONS
              </div>
              <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.6rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '24px' }}>
                <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>Unlock strategic capital</span><br />
                <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>for every</span>{' '}
                <span style={{ color: '#0a0a0a' }}>growth stage.</span>
              </h1>
              <p style={{ fontSize: '17px', color: '#5b6472', maxWidth: '560px', lineHeight: 1.65, marginBottom: '32px' }}>
                From Angel Investments and Bank Loans to personalized financing, FDI navigation and Venture Debt — we craft a strategic funding plan to empower your vision and ignite long-term success.
              </p>
              <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                {trustPoints.map((t, idx) => (
                  <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#5b6472', fontWeight: 500 }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1a7b74', boxShadow: '0 0 10px rgba(26,123,116,0.5)' }} /> {t}
                  </span>
                ))}
              </div>
            </div>

            <FundingApplyCard onApply={onApply} />
          </div>
        </div>

        <style>{`
          @media (max-width: 1100px) {
            .funding-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>

      {/* Funding options */}
      <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '40px 48px 40px 48px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {fundingOptions.map((opt, idx) => {
            const Icon = opt.icon;
            const flip = idx % 2 === 1;
            return (
              <div
                key={opt.id}
                id={opt.id}
                className="funding-row"
                style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0',
                  backgroundColor: '#ffffff', border: '1px solid rgba(226,232,240,0.9)',
                  borderRadius: '28px', overflow: 'hidden',
                  boxShadow: '0 12px 32px -8px rgba(18,86,81,0.08)',
                }}
              >
                <div style={{ padding: '44px 40px', order: flip ? 2 : 1, display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#1a7b74', letterSpacing: '1.5px' }}>{opt.tag}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#1a7b74', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={22} />
                    </span>
                    <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{opt.title}</h2>
                  </div>
                  <p style={{ fontSize: '15px', color: '#52606d', lineHeight: 1.65 }}>{opt.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {opt.points.map((p, pIdx) => (
                      <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#334155', lineHeight: 1.5 }}>
                        <span style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#e6f4f1', color: '#1a7b74', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <AssociatesRow associates={opt.associates} extraCount={opt.extraCount} />
                  <div>
                    <button onClick={() => onApply?.(opt.title)} className="btn-primary" style={{ padding: '12px 30px', fontSize: '14px', backgroundColor: '#0b5e56' }}>
                      <span>Apply Now</span><ArrowRight size={15} />
                    </button>
                  </div>
                </div>
                <div style={{ order: flip ? 1 : 2, background: `radial-gradient(circle at ${flip ? '20% 80%' : '80% 20%'}, #177068 0%, #115651 45%, #083733 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px', minHeight: '380px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '220px', height: '220px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.12)', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '260px', height: '260px', borderRadius: '50%', border: '1.5px dashed rgba(255,255,255,0.12)', pointerEvents: 'none' }} />
                  <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: '340px' }}>
                    <span style={{ width: '84px', height: '84px', borderRadius: '24px', backgroundColor: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                      <Icon size={40} strokeWidth={1.6} />
                    </span>
                    <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', color: '#99f6e4', marginBottom: '10px' }}>VENTURE ILLUSTRATION</div>
                    <div style={{ fontSize: '30px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '10px' }}>{opt.title}</div>
                    <div style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '22px' }}>
                      {opt.associates.length}+ showcased partners{opt.extraCount ? ` and ${opt.extraCount.replace('+', '')} more` : ''} ready to back eligible startups.
                    </div>
                    <button
                      onClick={() => onGetFunded?.()}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#ffffff', color: '#0b5e56', fontWeight: 800, fontSize: '14px', padding: '13px 30px', borderRadius: '9999px', border: 'none', cursor: 'pointer', boxShadow: '0 14px 30px -8px rgba(0,0,0,0.35)' }}
                    >
                      <span>GET FUNDED NOW</span><ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <style>{`@media (max-width: 900px) { .funding-row { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Venture CTA strip */}
      <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '40px 48px 90px 48px' }}>
        <div
          className="funding-cta-strip"
          style={{
            maxWidth: '1180px', margin: '0 auto', borderRadius: '28px', overflow: 'hidden', position: 'relative',
            background: 'radial-gradient(700px 320px at 90% -10%, rgba(26,123,116,0.4) 0%, rgba(26,123,116,0) 60%), linear-gradient(180deg, #071a15 0%, #030d0a 100%)',
            border: '1px solid rgba(255,255,255,0.12)', padding: '52px',
            display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '28px', alignItems: 'center',
          }}
        >
          <span style={{ width: '64px', height: '64px', borderRadius: '18px', backgroundColor: 'rgba(45,212,191,0.14)', border: '1px solid rgba(45,212,191,0.35)', color: '#5eead4', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <Handshake size={30} />
          </span>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(45,212,191,0.14)', border: '1px solid rgba(45,212,191,0.35)', color: '#5eead4', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 800, letterSpacing: '1.4px', marginBottom: '12px' }}>
              EQUITY + VENTURE DEBT
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
              Not sure which capital fits? Get a strategic funding plan in 24 hours.
            </h2>
          </div>
          <button
            onClick={() => onGetFunded?.()}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#2dd4bf', color: '#052e22', fontWeight: 800, fontSize: '15px', padding: '15px 32px', borderRadius: '9999px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: '0 14px 36px -8px rgba(45,212,191,0.5)' }}
          >
            <span>GET FUNDED NOW</span><ArrowRight size={17} />
          </button>
        </div>
        <style>{`@media (max-width: 900px) { .funding-cta-strip { grid-template-columns: 1fr !important; padding: 40px 32px !important; } }`}</style>
      </section>

      <InsightsSection onReadArticle={onReadArticle} onReserveSeat={onReserveSeat} />
      <CtaBanner />
    </>
  );
};
