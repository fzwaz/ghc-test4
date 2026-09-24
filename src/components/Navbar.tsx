import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Menu, X, Sparkles, Award, ShieldCheck, Briefcase } from 'lucide-react';

interface NavbarProps {
  onGetStartedClick?: () => void;
  onLoginClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onGetStartedClick, onLoginClick }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesList = [
    { title: 'Fundraising & Investment Banking', desc: 'Debt & equity funding, investor readiness', icon: Sparkles, id: '#services' },
    { title: '1-on-1 Mentorship', desc: 'Personalized guidance from top venture leaders', icon: Award, id: '#mentors' },
    { title: 'Company Setup & Registration', desc: 'Startup India, KSUM, compliance & tax', icon: ShieldCheck, id: '#services' },
    { title: 'Growth & Scaling Strategy', desc: 'Financial modeling, process automation', icon: Briefcase, id: '#services' },
  ];

  return (
    <div
      style={{
        position: 'sticky',
        top: '12px',
        zIndex: 100,
        width: '100%',
        padding: '0 24px',
        pointerEvents: 'none',
      }}
    >
      <header
        style={{
          width: '100%',
          maxWidth: '1380px',
          margin: '0 auto',
          padding: scrolled ? '12px 32px' : '16px 36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '9999px',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          boxShadow: scrolled
            ? '0 12px 30px -4px rgba(18, 86, 81, 0.12), 0 4px 10px rgba(0, 0, 0, 0.04)'
            : '0 8px 24px -4px rgba(18, 86, 81, 0.06), 0 2px 6px rgba(0, 0, 0, 0.02)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'auto',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <span
            style={{
              fontSize: '26px',
              fontWeight: '900',
              letterSpacing: '-0.5px',
              color: '#111827',
              lineHeight: '1',
              fontFamily: 'var(--font-sans)',
            }}
          >
            GHC
          </span>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderLeft: '1.5px solid #cbd5e1',
              paddingLeft: '8px',
              height: '22px',
            }}
          >
            <span
              style={{
                fontSize: '10.5px',
                fontWeight: '700',
                lineHeight: '1.1',
                color: '#475569',
                letterSpacing: '0.2px',
              }}
            >
              Growth
            </span>
            <span
              style={{
                fontSize: '10.5px',
                fontWeight: '700',
                lineHeight: '1.1',
                color: '#475569',
                letterSpacing: '0.2px',
              }}
            >
              Lab
            </span>
          </div>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {/* Services with Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <a
              href="#services"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                background: 'none',
                border: 'none',
                fontSize: '14.5px',
                fontWeight: '600',
                color: isServicesOpen ? '#125651' : '#334155',
                cursor: 'pointer',
                padding: '6px 0',
                transition: 'color 0.2s ease',
                fontFamily: 'inherit',
                textDecoration: 'none',
              }}
            >
              <span>Services</span>
              <ChevronDown
                size={14}
                style={{
                  transition: 'transform 0.2s ease',
                  transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: '#64748b',
                }}
              />
            </a>

            {/* Dropdown Menu */}
            {isServicesOpen && (
              <div
                className="glass-panel"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-30px',
                  width: '320px',
                  padding: '12px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 20px 40px -10px rgba(18, 86, 81, 0.16)',
                  animation: 'fadeIn 0.2s ease',
                  zIndex: 100,
                }}
              >
                {servicesList.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.id}
                    onClick={() => setIsServicesOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '10px',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#f0fdfa';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <div
                      style={{
                        padding: '8px',
                        borderRadius: '8px',
                        background: '#e6f4f1',
                        color: '#125651',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <item.icon size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                        {item.desc}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#mentors"
            style={{
              fontSize: '14.5px',
              fontWeight: '600',
              color: '#334155',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#125651')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
          >
            Mentors
          </a>

          <a
            href="#framework"
            style={{
              fontSize: '14.5px',
              fontWeight: '600',
              color: '#334155',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#125651')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
          >
            Programs
          </a>

          <a
            href="#resources"
            style={{
              fontSize: '14.5px',
              fontWeight: '600',
              color: '#334155',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#125651')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
          >
            Resources
          </a>

          <a
            href="#about"
            style={{
              fontSize: '14.5px',
              fontWeight: '600',
              color: '#334155',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#125651')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
          >
            About
          </a>
        </nav>

        {/* Right Actions */}
        <div
          className="desktop-actions"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
          }}
        >
          <button
            onClick={onLoginClick}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '14.5px',
              fontWeight: '600',
              color: '#1e293b',
              cursor: 'pointer',
              padding: '6px 10px',
              transition: 'color 0.2s ease',
              fontFamily: 'inherit',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#125651')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#1e293b')}
          >
            Log in
          </button>

          <button
            onClick={onGetStartedClick}
            className="btn-primary"
            style={{
              padding: '9px 20px',
              fontSize: '14px',
            }}
          >
            <span>Get Started</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-toggle" style={{ display: 'none' }}>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#1e293b',
              padding: '6px',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="glass-panel"
          style={{
            maxWidth: '1380px',
            margin: '8px auto 0 auto',
            borderRadius: '20px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            pointerEvents: 'auto',
            boxShadow: '0 20px 40px -10px rgba(18, 86, 81, 0.16)',
          }}
        >
          <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#1e293b', fontWeight: '600', fontSize: '15px' }}>Services</a>
          <a href="#mentors" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#1e293b', fontWeight: '600', fontSize: '15px' }}>Mentors</a>
          <a href="#framework" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#1e293b', fontWeight: '600', fontSize: '15px' }}>Programs</a>
          <a href="#resources" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#1e293b', fontWeight: '600', fontSize: '15px' }}>Resources</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#1e293b', fontWeight: '600', fontSize: '15px' }}>About</a>
          <hr style={{ borderColor: '#e2e8f0', borderStyle: 'solid', borderWidth: '0.5px' }} />
          <button
            onClick={() => { setMobileMenuOpen(false); onLoginClick?.(); }}
            style={{
              padding: '10px',
              borderRadius: '12px',
              border: '1px solid #cbd5e1',
              background: '#ffffff',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Log in
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); onGetStartedClick?.(); }}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <span>Get Started</span>
            <ArrowRight size={15} />
          </button>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-actions {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};
