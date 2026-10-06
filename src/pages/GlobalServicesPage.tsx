import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, Globe, Check } from 'lucide-react';
import { CtaBanner } from '../components/CtaBanner';
import { InsightsSection } from '../components/InsightsSection';

interface GlobalServicesPageProps {
  onSelectService?: (serviceName: string) => void;
  onReadArticle?: () => void;
  onReserveSeat?: (eventTitle: string) => void;
}

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

const heroPoints = [
  { title: 'Global Reach', desc: 'Upto 100%' },
  { title: 'Convenience', desc: 'Services delivered right to your inbox' },
];

const markets = [
  {
    country: 'USA',
    desc: 'Empower your entrepreneurial vision and navigate the dynamic US startup landscape with confidence. GHC GrowthLab offers a comprehensive suite of tailored services designed to propel your business toward success.',
  },
  {
    country: 'UK',
    desc: "We offer a tailored suite of solutions designed to address the unique challenges faced by startups in the UK's competitive landscape. Our team of experts provides strategic planning, market analysis, and ongoing support, ensuring your venture thrives in today's dynamic market.",
  },
  {
    country: 'Singapore',
    desc: "Our signature services provide a comprehensive solution for startups seeking to flourish in Singapore. We offer tailored consultations, strategic guidance, and access to essential resources, accelerating your growth trajectory. From navigating complex regulations to fostering groundbreaking innovation, our team empowers you to thrive within Singapore's dynamic business landscape.",
  },
  {
    country: 'UAE',
    desc: 'Unleash your entrepreneurial vision and thrive in the dynamic UAE market. We provide strategic guidance and bespoke solutions tailored for accelerated growth. Our expertise spans the entire startup journey, from fostering innovative ideas to achieving successful market penetration. We navigate the complexities of the UAE landscape with precision, ensuring your venture reaches its full potential.',
  },
];

const GlobalEnquiryCard: React.FC<{ onSubmit?: (market: string) => void }> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [market, setMarket] = useState('USA');
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
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0a0a0a', marginBottom: '10px' }}>Enquiry received{name ? `, ${name.split(' ')[0]}` : ''}!</h3>
          <p style={{ fontSize: '14.5px', color: '#5b6472', lineHeight: 1.6, marginBottom: '24px' }}>
            Our global expansion team will reach out within 24 hours with your {market} market roadmap.
          </p>
          <button onClick={() => setSubmitted(false)} style={{ background: 'none', border: 'none', color: '#1a7b74', fontWeight: 700, fontSize: '14px', cursor: 'pointer', textDecoration: 'underline' }}>
            Submit another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); onSubmit?.(market); }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span style={monoLabel}>GO GLOBAL</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', fontWeight: 700, letterSpacing: '2px', color: '#1a7b74', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#1a7b74', boxShadow: '0 0 10px rgba(26,123,116,0.6)' }} /> 4 MARKETS
            </span>
          </div>

          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.3, letterSpacing: '-0.01em', marginBottom: '20px' }}>
            Expand beyond borders.
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
              <label style={{ ...monoLabel, display: 'block', marginBottom: '8px' }}>TARGET MARKET</label>
              <div style={{ position: 'relative' }}>
                <select value={market} onChange={(e) => setMarket(e.target.value)} style={{ ...inputStyle, appearance: 'none', WebkitAppearance: 'none', color: '#0f172a', cursor: 'pointer', paddingRight: '44px' }}>
                  <option value="USA">USA Expansion</option>
                  <option value="UK">UK Expansion</option>
                  <option value="Singapore">Singapore Expansion</option>
                  <option value="UAE">UAE Expansion</option>
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
              <span>GET GLOBAL ROADMAP</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
        <span style={{ ...monoLabel, fontSize: '10.5px' }}>• USA • UK • SG • UAE</span>
        <span style={{ ...monoLabel, fontSize: '10.5px' }}>REPLY &lt; 24H</span>
      </div>
    </div>
  );
};

export const GlobalServicesPage: React.FC<GlobalServicesPageProps> = ({ onSelectService, onReadArticle, onReserveSeat }) => {
  return (
    <>
      {/* Hero — same system as Programs hero: grid backdrop, headline left, enquiry card right */}
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
          <div className="global-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '64px', alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1a7b74', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '24px' }}>
                Why Choose Us
              </div>
              <h1 style={{ fontSize: 'clamp(2.4rem, 4.6vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '24px' }}>
                <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>Global Business Enhancement</span><br />
                <span style={{ color: '#0a0a0a' }}>Solutions for Startups.</span>
              </h1>
              <p style={{ fontSize: '16.5px', color: '#5b6472', maxWidth: '580px', lineHeight: 1.7, marginBottom: '32px' }}>
                Unlock boundless potential with our expert guidance. We craft customized strategies to propel your venture towards international success. Navigate vibrant markets like the USA and UK, or conquer dynamic landscapes like Singapore and the UAE. Together, let&apos;s break geographical barriers and propel your vision to the world.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {heroPoints.map((p, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: '#1a7b74', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>{p.title}</div>
                      <div style={{ fontSize: '13.5px', color: '#5b6472', marginTop: '2px' }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <GlobalEnquiryCard onSubmit={(m) => onSelectService?.(`${m} Global Services`)} />
          </div>
        </div>

        <style>{`
          @media (max-width: 1100px) {
            .global-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>

      {/* Markets grid — GHC aesthetic: white canvas, teal system, glass cards */}
      <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '40px 48px 100px 48px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1b736b', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              TARGET MARKETS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '14px' }}>
              Four markets. <span style={{ color: '#1a7b74' }}>One growth playbook.</span>
            </h2>
            <p style={{ fontSize: '15.5px', color: '#52606d', maxWidth: '600px', margin: '0 auto', lineHeight: 1.65 }}>
              Entity setup, compliance, banking and go-to-market — handled for you in every geography we operate in.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
          {markets.map((m, idx) => (
            <div
              key={m.country}
              style={{
                borderRadius: '24px', backgroundColor: '#ffffff', border: '1px solid #e6f0ee',
                padding: '32px 30px', boxShadow: '0 10px 26px -10px rgba(15,157,143,0.12)',
                display: 'flex', flexDirection: 'column', transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(20,184,166,0.6)';
                e.currentTarget.style.boxShadow = '0 0 0 4px rgba(20,184,166,0.12), 0 24px 48px -12px rgba(18,86,81,0.28)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e6f0ee';
                e.currentTarget.style.boxShadow = '0 10px 26px -10px rgba(15,157,143,0.12)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ width: '52px', height: '52px', borderRadius: '16px', backgroundColor: '#e6f4f1', color: '#125651', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 24px rgba(20,184,166,0.18)' }}>
                  <Globe size={24} />
                </span>
                <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1.5px', color: '#94a3b8' }}>
                  MARKET 0{idx + 1}
                </span>
              </div>
              <h3 style={{ fontSize: '21px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em', marginBottom: '10px' }}>{m.country}</h3>
              <p style={{ fontSize: '14px', color: '#52606d', lineHeight: 1.65, marginBottom: '24px', flex: 1 }}>{m.desc}</p>
              <button
                onClick={() => onSelectService?.(`${m.country} Global Services`)}
                className="btn-secondary"
                style={{ padding: '11px 22px', fontSize: '13.5px', alignSelf: 'flex-start' }}
              >
                <span>Explore {m.country}</span><ArrowRight size={14} />
              </button>
            </div>
          ))}
          </div>
        </div>
      </section>

      <InsightsSection onReadArticle={onReadArticle} onReserveSeat={onReserveSeat} />
      <CtaBanner />
    </>
  );
};
