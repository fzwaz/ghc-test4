import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Menu, X, Sparkles, Award, ShieldCheck, Briefcase } from 'lucide-react';

export type PageKey = 'home' | 'about' | 'services' | 'mentors' | 'programs' | 'resources';

interface NavbarProps {
  onGetStartedClick?: () => void;
  onLoginClick?: () => void;
  onNavigate?: (page: PageKey, anchor?: string) => void;
  activePage?: PageKey;
}

const NavItem: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      fontSize: '14.5px',
      fontWeight: '600',
      color: active ? '#125651' : '#334155',
      background: 'none',
      border: 'none',
      borderBottom: active ? '2px solid #125651' : '2px solid transparent',
      paddingBottom: '2px',
      cursor: 'pointer',
      fontFamily: 'inherit',
      transition: 'color 0.2s ease',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.color = '#125651')}
    onMouseLeave={(e) => (e.currentTarget.style.color = active ? '#125651' : '#334155')}
  >
    {children}
  </button>
);

export const Navbar: React.FC<NavbarProps> = ({ onGetStartedClick, onLoginClick, onNavigate, activePage = 'home' }) => {
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

  const servicesList: { title: string; desc: string; icon: React.ElementType; page: PageKey; anchor?: string }[] = [
    { title: 'Fundraising & Investment Banking', desc: 'Debt & equity funding, investor readiness', icon: Sparkles, page: 'services', anchor: 'service-funding' },
    { title: '1-on-1 Mentorship', desc: 'Personalized guidance from top venture leaders', icon: Award, page: 'mentors' },
    { title: 'Company Setup & Registration', desc: 'Startup India, KSUM, compliance & tax', icon: ShieldCheck, page: 'services', anchor: 'service-setup' },
    { title: 'Growth & Scaling Strategy', desc: 'Financial modeling, process automation', icon: Briefcase, page: 'services', anchor: 'service-growth' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: '12px',
        left: 0,
        right: 0,
        zIndex: 1000,
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
          onClick={(e) => { e.preventDefault(); onNavigate?.('home'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
            cursor: 'pointer',
          }}
        >
          <img
            src="/GrowthLab-logo.png"
            alt="GHC Growth Lab"
            style={{
              height: '36px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
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
              onClick={(e) => { e.preventDefault(); onNavigate?.('services'); }}
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
                    href="#"
                    onClick={(e) => { e.preventDefault(); setIsServicesOpen(false); onNavigate?.(item.page, item.anchor); }}
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

          <NavItem active={activePage === 'mentors'} onClick={() => onNavigate?.('mentors')}>
            Mentors
          </NavItem>

          <NavItem active={activePage === 'programs'} onClick={() => onNavigate?.('programs')}>
            Programs
          </NavItem>

          <NavItem active={activePage === 'resources'} onClick={() => onNavigate?.('resources')}>
            Resources
          </NavItem>

          <NavItem active={activePage === 'about'} onClick={() => onNavigate?.('about')}>
            About
          </NavItem>
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
          <a href="#services" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('services'); }} style={{ textDecoration: 'none', color: '#1e293b', fontWeight: '600', fontSize: '15px' }}>Services</a>
          <a href="#mentors" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('mentors'); }} style={{ textDecoration: 'none', color: activePage === 'mentors' ? '#125651' : '#1e293b', fontWeight: '600', fontSize: '15px' }}>Mentors</a>
          <a href="#programs" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('programs'); }} style={{ textDecoration: 'none', color: activePage === 'programs' ? '#125651' : '#1e293b', fontWeight: '600', fontSize: '15px' }}>Programs</a>
          <a href="#resources" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('resources'); }} style={{ textDecoration: 'none', color: activePage === 'resources' ? '#125651' : '#1e293b', fontWeight: '600', fontSize: '15px' }}>Resources</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('about'); }} style={{ textDecoration: 'none', color: activePage === 'about' ? '#125651' : '#1e293b', fontWeight: '600', fontSize: '15px' }}>About</a>
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
