import React, { useState } from 'react';
import { Send, MapPin, Mail, CheckCircle2, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer
      id="about"
      style={{
        backgroundColor: '#0c2220',
        color: '#e2e8f0',
        padding: '80px 48px 40px 48px',
        borderTop: '1px solid rgba(20, 184, 166, 0.2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background radial soft aura */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1380px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1.3fr',
            gap: '40px',
            marginBottom: '64px',
          }}
          className="footer-grid"
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span
                style={{
                  fontSize: '28px',
                  fontWeight: '900',
                  color: '#ffffff',
                  letterSpacing: '-0.5px',
                  lineHeight: '1',
                }}
              >
                GHC
              </span>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderLeft: '1.5px solid #2dd4bf',
                  paddingLeft: '8px',
                  height: '24px',
                }}
              >
                <span style={{ fontSize: '11px', fontWeight: '700', lineHeight: '1.1', color: '#ccfbf1' }}>
                  Growth
                </span>
                <span style={{ fontSize: '11px', fontWeight: '700', lineHeight: '1.1', color: '#ccfbf1' }}>
                  Lab
                </span>
              </div>
            </div>

            <p
              style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#94a3b8',
                marginBottom: '24px',
                maxWidth: '290px',
              }}
            >
              Consulting & investment banking platform dedicated to turning ambitious startup ideas into venture-backed scalable enterprises.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={15} style={{ color: '#2dd4bf', flexShrink: 0 }} />
                <span>Kadavanthra, Kochi, Kerala, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} style={{ color: '#2dd4bf', flexShrink: 0 }} />
                <span>connect@ghcgrowthlab.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '18px' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '13.5px' }}>
              <li><a href="#services" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Investment Banking</a></li>
              <li><a href="#services" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Valuation & Due Diligence</a></li>
              <li><a href="#services" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Entity Setup & DPIIT</a></li>
              <li><a href="#services" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Tax Exemption (80-IAC)</a></li>
              <li><a href="#services" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>M&A & Secondary Sales</a></li>
            </ul>
          </div>

          {/* Col 3: Programs & Mentors */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '18px' }}>
              Programs
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '13.5px' }}>
              <li><a href="#framework" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Incubate (0 to 1)</a></li>
              <li><a href="#framework" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Accelerate (1 to 10)</a></li>
              <li><a href="#mentors" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>1-on-1 Mentor Network</a></li>
              <li><a href="#framework" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Series A Syndicate</a></li>
              <li><a href="#framework" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Global Expansion Track</a></li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '18px' }}>
              Knowledge Vault
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '13.5px' }}>
              <li><a href="#resources" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Financial Models</a></li>
              <li><a href="#resources" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Pitch Deck Frameworks</a></li>
              <li><a href="#resources" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>KSUM Grant Roadmap</a></li>
              <li><a href="#resources" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Cap Table Simulator</a></li>
              <li><a href="#resources" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')} onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}>Term Sheet Glossary</a></li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '18px' }}>
              Founder Dispatch
            </h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5', marginBottom: '16px' }}>
              Curated venture insights, funding trends, and founder opportunities delivered bi-weekly.
            </p>

            {subscribed ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(20, 184, 166, 0.15)',
                  border: '1px solid #14b8a6',
                  color: '#5eead4',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: '600',
                }}
              >
                <CheckCircle2 size={16} /> Subscribed to Dispatch!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  required
                  placeholder="founder@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    color: '#ffffff',
                    fontSize: '13px',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#14b8a6',
                    color: '#073834',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '0 16px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Send size={14} />
                </button>
              </form>
            )}

            {/* Recognition Badges */}
            <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '14px', color: '#64748b', fontSize: '11.5px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Shield size={13} style={{ color: '#2dd4bf' }} /> KSUM Recognized
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Shield size={13} style={{ color: '#2dd4bf' }} /> Startup India Partner
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '12.5px',
            color: '#64748b',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            © {new Date().getFullYear()} GHC Growth Lab Private Limited. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Compliance & Regulatory</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
