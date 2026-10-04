import React, { useState } from 'react';
import { ArrowRight, Check, Coins, Users, FileCheck2, BarChart3, CheckCircle2, ChevronDown } from 'lucide-react';
import { CtaBanner } from '../components/CtaBanner';
import { InsightsSection } from '../components/InsightsSection';

interface ServicesPageProps {
  onSelectService?: (serviceName: string) => void;
  onReadArticle?: () => void;
  onReserveSeat?: (eventTitle: string) => void;
}

const trustPoints = [
  'Institutional fundraising',
  '100+ vetted mentors',
  'Full compliance & setup',
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

const ServiceBookingCard: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Fundraising & Investment Banking');
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
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0a0a0a', marginBottom: '10px' }}>Consultation requested{ name ? `, ${name.split(' ')[0]}` : ''}!</h3>
          <p style={{ fontSize: '14.5px', color: '#5b6472', lineHeight: 1.6, marginBottom: '24px' }}>
            Our advisory team will reach out within 24 hours to schedule your strategy session.
          </p>
          <button onClick={() => setSubmitted(false)} style={{ background: 'none', border: 'none', color: '#1a7b74', fontWeight: 700, fontSize: '14px', cursor: 'pointer', textDecoration: 'underline' }}>
            Request another service
          </button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span style={monoLabel}>REQUEST ADVISORY</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', fontWeight: 700, letterSpacing: '2px', color: '#1a7b74', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#1a7b74', boxShadow: '0 0 10px rgba(26,123,116,0.6)' }} /> FAST TRACK
            </span>
          </div>

          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.3, letterSpacing: '-0.01em', marginBottom: '20px' }}>
            Get expert guidance for your startup.
          </h3>
          <div style={{ height: '1px', backgroundColor: '#eef1f4', marginBottom: '22px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <label style={{ ...monoLabel, display: 'block', marginBottom: '8px' }}>FULL NAME <span style={{ color: '#1a7b74' }}>*</span></label>
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Aanya Sharma" style={inputStyle} />
            </div>
            <div>
              <label style={{ ...monoLabel, display: 'block', marginBottom: '8px' }}>WORK EMAIL <span style={{ color: '#1a7b74' }}>*</span></label>
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="founder@startup.com" style={inputStyle} />
            </div>
            <div>
              <label style={{ ...monoLabel, display: 'block', marginBottom: '8px' }}>SELECT SERVICE AREA</label>
              <div style={{ position: 'relative' }}>
                <select value={service} onChange={(e) => setService(e.target.value)} style={{ ...inputStyle, appearance: 'none', WebkitAppearance: 'none', color: '#0f172a', cursor: 'pointer', paddingRight: '44px' }}>
                  <option value="Fundraising & Investment Banking">Fundraising & Investment Banking</option>
                  <option value="1-on-1 Mentorship">1-on-1 Mentorship</option>
                  <option value="Company Setup & Registration">Company Setup & Registration</option>
                  <option value="Growth & Scaling Strategy">Growth & Scaling Strategy</option>
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
              <span>GET CUSTOM ADVISORY</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
        <span style={{ ...monoLabel, fontSize: '10.5px' }}>• 100% CONFIDENTIAL</span>
        <span style={{ ...monoLabel, fontSize: '10.5px' }}>REPLY &lt; 24H</span>
      </div>
    </div>
  );
};

const services = [
  {
    id: 'service-funding',
    no: '01',
    icon: Coins,
    title: 'Fundraising & Investment Banking',
    desc: 'Debt and equity funding with full investor readiness — from pitch deck to term sheet execution.',
    points: [
      'Institutional-grade pitch deck & financial teaser',
      'Data room setup, cap table cleanup & valuation advisory',
      'Curated introductions to angels, syndicates & VCs',
      'Term sheet negotiation & due diligence support',
    ],
  },
  {
    id: 'service-mentorship',
    no: '02',
    icon: Users,
    title: '1-on-1 Mentorship',
    desc: 'Personalized guidance from exited founders, operators and venture leaders who have been there.',
    points: [
      '100+ vetted mentors across fintech, SaaS, AI & D2C',
      'Sessions tailored to fundraising, GTM, product & hiring',
      'Flexible scheduling with transparent pricing',
      'Ongoing advisory beyond the first session',
    ],
  },
  {
    id: 'service-setup',
    no: '03',
    icon: FileCheck2,
    title: 'Company Setup & Registration',
    desc: 'Entity setup, Startup India & KSUM recognition, compliance and tax — done right from day one.',
    points: [
      'Private limited incorporation & founder agreements',
      'DPIIT recognition & Section 80-IAC tax exemption',
      'KSUM grants, seed support & compliance calendar',
      'Bookkeeping, GST filings & statutory support',
    ],
  },
  {
    id: 'service-growth',
    no: '04',
    icon: BarChart3,
    title: 'Growth & Scaling Strategy',
    desc: 'Financial modeling, funnel engineering and process automation that turn traction into scale.',
    points: [
      'CAC/LTV optimization & growth funnel engineering',
      '3-year P&L, cash flow & unit economics modeling',
      'Hiring playbooks for engineering & sales leaders',
      'Bi-weekly strategic reviews with operators',
    ],
  },
];

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onReadArticle, onReserveSeat }) => {
  return (
    <>
      {/* Hero — grid backdrop, headline left, request card right */}
      <section data-hero style={{ position: 'relative', width: '100%', backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.055) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 130% 110% at 50% 42%, black 62%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 130% 110% at 50% 42%, black 62%, transparent 100%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1380px', margin: '0 auto', padding: '130px 48px 56px 48px' }}>
          <div className="services-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '64px', alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1a7b74', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '24px' }}>
                OUR SERVICES & ADVISORY
              </div>
              <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.6rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '24px' }}>
                <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>One trusted partner.</span><br />
                <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>Every venture</span>{' '}
                <span style={{ color: '#0a0a0a' }}>growth need.</span>
              </h1>
              <p style={{ fontSize: '17px', color: '#5b6472', maxWidth: '560px', lineHeight: 1.65, marginBottom: '32px' }}>
                End-to-end strategic advisory for startup founders — from fundraising and mentorship to legal compliance and growth acceleration.
              </p>
              <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                {trustPoints.map((t, idx) => (
                  <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#5b6472', fontWeight: 500 }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1a7b74', boxShadow: '0 0 10px rgba(26,123,116,0.5)' }} /> {t}
                  </span>
                ))}
              </div>
            </div>

            <ServiceBookingCard />
          </div>
        </div>

        <style>{`
          @media (max-width: 1100px) {
            .services-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>

      {/* Services List Section */}
      <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '40px 48px 100px 48px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {services.map((s, idx) => {
            const Icon = s.icon;
            const flip = idx % 2 === 1;
            return (
              <div
                key={s.id}
                id={s.id}
                className="service-row"
                style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0',
                  backgroundColor: '#ffffff', border: '1px solid rgba(226,232,240,0.9)',
                  borderRadius: '28px', overflow: 'hidden',
                  boxShadow: '0 12px 32px -8px rgba(18,86,81,0.08)',
                }}
              >
                <div style={{ padding: '44px 40px', order: flip ? 2 : 1 }}>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#94a3b8', letterSpacing: '1.5px' }}>SERVICE {s.no}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', margin: '14px 0 12px 0' }}>
                    <span style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#1a7b74', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={22} />
                    </span>
                    <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.25 }}>{s.title}</h2>
                  </div>
                  <p style={{ fontSize: '15px', color: '#52606d', lineHeight: 1.65, marginBottom: '22px' }}>{s.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {s.points.map((p, pIdx) => (
                      <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#334155', lineHeight: 1.5 }}>
                        <span style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#e6f4f1', color: '#1a7b74', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => onSelectService?.(s.title)} className="btn-primary" style={{ padding: '12px 26px', fontSize: '14px', backgroundColor: '#1a7b74' }}>
                    <span>Consult on {s.title.split(' &')[0]}</span><ArrowRight size={15} />
                  </button>
                </div>
                <div style={{ order: flip ? 1 : 2, background: `radial-gradient(circle at ${flip ? '20% 80%' : '80% 20%'}, #177068 0%, #115651 45%, #083733 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px', minHeight: '320px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '220px', height: '220px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.12)', pointerEvents: 'none' }} />
                  <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    <span style={{ width: '84px', height: '84px', borderRadius: '24px', backgroundColor: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                      <Icon size={40} strokeWidth={1.6} />
                    </span>
                    <div style={{ fontSize: '44px', fontWeight: 900, color: 'rgba(255,255,255,0.9)', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.no}</div>
                    <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#99f6e4', marginTop: '8px' }}>GHC GROWTH LAB</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <style>{`@media (max-width: 900px) { .service-row { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <InsightsSection onReadArticle={onReadArticle} onReserveSeat={onReserveSeat} />
      <CtaBanner />
    </>
  );
};
