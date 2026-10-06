import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BellRing, CheckCircle2 } from 'lucide-react';
import { InsightsSection } from '../components/InsightsSection';
import { CtaBanner } from '../components/CtaBanner';

interface GrantsPageProps {
  onReadArticle?: () => void;
  onReserveSeat?: (eventTitle: string) => void;
}

const grantStats = [
  { value: '300+', label: 'Funding Sources' },
  { value: '1,200+', label: 'Active Opportunities' },
  { value: 'Daily', label: 'Updated' },
  { value: '80+', label: 'Countries Covered' },
];

const categories = [
  { emoji: '🏛️', title: 'Grants' },
  { emoji: '🎓', title: 'Fellowships' },
  { emoji: '🚀', title: 'Accelerators' },
  { emoji: '🏆', title: 'Competitions' },
  { emoji: '💡', title: 'Incubators' },
  { emoji: '📚', title: 'Scholarships' },
];

const GrantAlertsCard: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div style={{ position: 'relative', backgroundColor: '#ffffff', borderRadius: '20px', border: '1px solid #e8ecef', boxShadow: '0 30px 70px -20px rgba(15,23,42,0.18)', padding: '36px 34px 28px 34px' }}>
      {subscribed ? (
        <div style={{ textAlign: 'center', padding: '40px 10px' }}>
          <span style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#e6f4f1', color: '#1a7b74', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', boxShadow: '0 0 32px rgba(26,123,116,0.25)' }}>
            <CheckCircle2 size={34} />
          </span>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0a0a0a', marginBottom: '10px' }}>Alerts on!</h3>
          <p style={{ fontSize: '14.5px', color: '#5b6472', lineHeight: 1.6, marginBottom: '24px' }}>
            Fresh grants, fellowships and deadlines will land in your inbox every morning.
          </p>
          <button onClick={() => setSubscribed(false)} style={{ background: 'none', border: 'none', color: '#1a7b74', fontWeight: 700, fontSize: '14px', cursor: 'pointer', textDecoration: 'underline' }}>
            Use a different email
          </button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSubscribed(true); }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#e6f4f1', color: '#1a7b74', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 800, letterSpacing: '1.4px', marginBottom: '18px' }}>
            <BellRing size={13} /> GRANT ALERTS
          </span>
          <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0a0a0a', lineHeight: 1.3, letterSpacing: '-0.01em', marginBottom: '12px' }}>
            Never miss a deadline again.
          </h3>
          <p style={{ fontSize: '14.5px', color: '#5b6472', lineHeight: 1.6, marginBottom: '22px' }}>
            One morning email with new opportunities matched to your stage and sector.
          </p>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="founder@startup.com"
            style={{ width: '100%', padding: '15px 18px', borderRadius: '12px', border: '1px solid #e5e7eb', fontSize: '14.5px', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a', marginBottom: '12px' }}
          />
          <button
            type="submit"
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: '#1a7b74', color: '#fff', border: 'none', borderRadius: '12px', padding: '15px', fontWeight: 800, fontSize: '14.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(26,123,116,0.5)' }}
          >
            <span>Notify Me</span><ArrowRight size={16} />
          </button>
        </form>
      )}
    </div>
  );
};

export const GrantsPage: React.FC<GrantsPageProps> = ({ onReadArticle, onReserveSeat }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero — same system as Programs hero */}
      <section style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#ffffff', overflow: 'hidden' }}>
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
          <div className="grants-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '64px', alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1a7b74', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '24px' }}>
                GRANTS & FUNDING DISCOVERY
              </div>
              <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.6rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '24px' }}>
                <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>Find Your Next</span><br />
                <span style={{ color: '#0a0a0a' }}>Funding Opportunity.</span>
              </h1>
              <p style={{ fontSize: '17px', color: '#5b6472', maxWidth: '560px', lineHeight: 1.65, marginBottom: '32px' }}>
                Search grants, fellowships, accelerators, and competitions from 300+ sources — all in one place.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button onClick={() => navigate('/grants/search')} className="btn-primary" style={{ padding: '13px 28px', fontSize: '15px' }}>
                  <span>Browse Opportunities</span><ArrowRight size={16} />
                </button>
                <button onClick={() => navigate('/grants/sources')} className="btn-secondary" style={{ padding: '12px 26px', fontSize: '15px' }}>
                  View Data Sources
                </button>
              </div>
            </div>
            <GrantAlertsCard />
          </div>
        </div>

        <style>{`
          @media (max-width: 1100px) {
            .grants-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>

      {/* Stats band */}
      <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '40px 48px 70px 48px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {grantStats.map((s, idx) => (
            <div key={idx} style={{ textAlign: 'center', borderRadius: '20px', backgroundColor: '#f7faf9', border: '1px solid #e6f0ee', padding: '30px 20px' }}>
              <div style={{ fontSize: '34px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{s.value}</div>
              <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#1a7b74', marginTop: '8px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by category */}
      <section style={{ width: '100%', backgroundColor: '#f7faf9', padding: '90px 48px 100px 48px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1b736b', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '16px' }}>
              BROWSE BY CATEGORY
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
              What are you <span style={{ color: '#1a7b74' }}>looking for?</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '18px' }}>
            {categories.map((c, idx) => (
              <button
                key={idx}
                onClick={() => navigate('/grants/search')}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', borderRadius: '20px', backgroundColor: '#ffffff', border: '1px solid rgba(226,232,240,0.9)', padding: '32px 16px', cursor: 'pointer', boxShadow: '0 10px 26px -10px rgba(18,86,81,0.08)', transition: 'all 0.25s ease', fontFamily: 'inherit' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = 'rgba(20,184,166,0.5)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(18,86,81,0.16)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(226,232,240,0.9)'; e.currentTarget.style.boxShadow = '0 10px 26px -10px rgba(18,86,81,0.08)'; }}
              >
                <span style={{ fontSize: '40px', lineHeight: 1 }}>{c.emoji}</span>
                <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>{c.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guidance banner */}
      <section style={{ width: '100%', backgroundColor: '#f7faf9', padding: '0 48px 100px 48px' }}>
        <div
          style={{
            maxWidth: '1180px', margin: '0 auto', borderRadius: '28px', overflow: 'hidden', position: 'relative',
            background: 'radial-gradient(700px 320px at 90% -10%, rgba(26,123,116,0.4) 0%, rgba(26,123,116,0) 60%), linear-gradient(180deg, #071a15 0%, #030d0a 100%)',
            border: '1px solid rgba(255,255,255,0.12)', padding: '56px',
            display: 'grid', gridTemplateColumns: '1fr auto', gap: '32px', alignItems: 'center',
          }}
          className="grants-guidance-grid"
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(45,212,191,0.14)', border: '1px solid rgba(45,212,191,0.35)', color: '#5eead4', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 800, letterSpacing: '1.4px', marginBottom: '18px' }}>
              #GROWWITHGUIDANCE
            </div>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.25, letterSpacing: '-0.02em', maxWidth: '560px' }}>
              Combine expert mentorship with the right funding to scale your startup.
            </h2>
          </div>
          <button
            onClick={() => navigate('/mentors')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#2dd4bf', color: '#052e22', fontWeight: 800, fontSize: '15px', padding: '15px 32px', borderRadius: '9999px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: '0 14px 36px -8px rgba(45,212,191,0.5)' }}
          >
            <span>Find a Mentor</span><ArrowRight size={17} />
          </button>
        </div>
        <style>{`@media (max-width: 900px) { .grants-guidance-grid { grid-template-columns: 1fr !important; padding: 40px 32px !important; } }`}</style>
      </section>

      <InsightsSection onReadArticle={onReadArticle} onReserveSeat={onReserveSeat} />
      <CtaBanner />
    </>
  );
};
