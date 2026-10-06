import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Menu, X, Sparkles, Award, Search, GraduationCap, FileText, BookOpen, ShieldCheck, RotateCcw } from 'lucide-react';

export type PageKey = 'home' | 'about' | 'services' | 'mentors' | 'become-mentor' | 'funding' | 'grants' | 'global-services' | 'blog' | 'resources' | 'contact' | 'privacy-policy' | 'terms-conditions' | 'refund-policy' | 'our-story';

interface NavbarProps {
  onLoginClick?: () => void;
  onNavigate?: (page: PageKey, anchor?: string) => void;
  activePage?: PageKey;
}

const navItemStyle = (active: boolean): React.CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  height: '32px',
  fontSize: '14.5px',
  fontWeight: '600',
  lineHeight: '1',
  color: active ? '#125651' : '#334155',
  background: 'none',
  border: 'none',
  borderBottom: active ? '2px solid #125651' : '2px solid transparent',
  padding: '0 0 2px 0',
  margin: 0,
  cursor: 'pointer',
  fontFamily: 'inherit',
  textDecoration: 'none',
  boxSizing: 'border-box',
  verticalAlign: 'middle',
  transition: 'color 0.2s ease, border-color 0.2s ease',
});

const NavItem: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    style={navItemStyle(active)}
    onMouseEnter={(e) => { e.currentTarget.style.color = '#125651'; }}
    onMouseLeave={(e) => { e.currentTarget.style.color = active ? '#125651' : '#334155'; }}
  >
    {children}
  </button>
);

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage = 'home' }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMentorsOpen, setIsMentorsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
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
    { title: '1-on-1 Mentorship', desc: 'Personalized guidance from top venture leaders', icon: Award, page: 'mentors' },
    { title: 'Funding', desc: 'Equity & venture debt funding solutions', icon: Sparkles, page: 'funding' },
    { title: 'Templates', desc: 'Pitch decks, models & founder resources', icon: FileText, page: 'resources' },
  ];

  const mentorsList: { title: string; desc: string; icon: React.ElementType; page: PageKey }[] = [
    { title: 'Browse Mentors', desc: 'Find 1-on-1 guidance from 100+ vetted experts', icon: Search, page: 'mentors' },
    { title: 'Become a Mentor', desc: 'Share expertise, earn and build your brand', icon: GraduationCap, page: 'become-mentor' },
  ];

  const companyList: { title: string; desc: string; icon: React.ElementType; page: PageKey; anchor?: string }[] = [
    { title: 'Our Story', desc: 'Who we are and why we exist', icon: BookOpen, page: 'our-story' },
    { title: 'Privacy Policy', desc: 'How we collect and protect your data', icon: ShieldCheck, page: 'privacy-policy' },
    { title: 'Terms & Conditions', desc: 'Terms governing our services', icon: FileText, page: 'terms-conditions' },
    { title: 'Refund Policy', desc: 'Eligibility and refund process', icon: RotateCcw, page: 'refund-policy' },
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
            gap: '28px',
          }}
        >
          {/* 1. About Us */}
          <NavItem active={activePage === 'about'} onClick={() => onNavigate?.('about')}>
            About Us
          </NavItem>

          {/* 2. Company with Dropdown */}
          <div
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
              style={navItemStyle(isCompanyOpen || activePage === 'privacy-policy' || activePage === 'terms-conditions' || activePage === 'refund-policy' || activePage === 'our-story')}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#125651'; }}
              onMouseLeave={(e) => {
                const active = isCompanyOpen || activePage === 'privacy-policy' || activePage === 'terms-conditions' || activePage === 'refund-policy' || activePage === 'our-story';
                e.currentTarget.style.color = active ? '#125651' : '#334155';
              }}
            >
              <span>Company</span>
              <ChevronDown
                size={14}
                style={{
                  transition: 'transform 0.2s ease',
                  transform: isCompanyOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: (isCompanyOpen || activePage === 'privacy-policy' || activePage === 'terms-conditions' || activePage === 'refund-policy' || activePage === 'our-story') ? '#125651' : '#64748b',
                }}
              />
            </button>

            {/* Dropdown Menu */}
            {isCompanyOpen && (
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
                {companyList.map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    onClick={(e) => { e.preventDefault(); setIsCompanyOpen(false); onNavigate?.(item.page, item.anchor); }}
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

          {/* 3. Funding */}
          <NavItem active={activePage === 'funding'} onClick={() => onNavigate?.('funding')}>
            Funding
          </NavItem>

          {/* 4. Grants */}
          <NavItem active={activePage === 'grants'} onClick={() => onNavigate?.('grants')}>
            Grants
          </NavItem>

          {/* 5. Mentors with Dropdown */}
          <div
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
            onMouseEnter={() => setIsMentorsOpen(true)}
            onMouseLeave={() => setIsMentorsOpen(false)}
          >
            <button
              type="button"
              onClick={() => onNavigate?.('mentors')}
              style={navItemStyle(isMentorsOpen || activePage === 'mentors' || activePage === 'become-mentor')}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#125651'; }}
              onMouseLeave={(e) => {
                const active = isMentorsOpen || activePage === 'mentors' || activePage === 'become-mentor';
                e.currentTarget.style.color = active ? '#125651' : '#334155';
              }}
            >
              <span>Mentors</span>
              <ChevronDown
                size={14}
                style={{
                  transition: 'transform 0.2s ease',
                  transform: isMentorsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: (isMentorsOpen || activePage === 'mentors' || activePage === 'become-mentor') ? '#125651' : '#64748b',
                }}
              />
            </button>

            {/* Dropdown Menu */}
            {isMentorsOpen && (
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
                {mentorsList.map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    onClick={(e) => { e.preventDefault(); setIsMentorsOpen(false); onNavigate?.(item.page); }}
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

          {/* 6. Services with Dropdown */}
          <div
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => onNavigate?.('services')}
              style={navItemStyle(isServicesOpen || activePage === 'services' || activePage === 'resources')}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#125651'; }}
              onMouseLeave={(e) => {
                const active = isServicesOpen || activePage === 'services' || activePage === 'resources';
                e.currentTarget.style.color = active ? '#125651' : '#334155';
              }}
            >
              <span>Services</span>
              <ChevronDown
                size={14}
                style={{
                  transition: 'transform 0.2s ease',
                  transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: (isServicesOpen || activePage === 'services' || activePage === 'resources') ? '#125651' : '#64748b',
                }}
              />
            </button>

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

          {/* 7. Global Services */}
          <NavItem active={activePage === 'global-services'} onClick={() => onNavigate?.('global-services')}>
            Global Services
          </NavItem>

          {/* 8. Blog */}
          <NavItem active={activePage === 'blog'} onClick={() => onNavigate?.('blog')}>
            Blog
          </NavItem>
        </nav>

        {/* Right Actions — Contact only */}
        <div
          className="desktop-actions"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
          }}
        >
          <button
            onClick={() => onNavigate?.('contact')}
            className="btn-primary"
            style={{
              padding: '9px 20px',
              fontSize: '14px',
            }}
          >
            <span>Contact</span>
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
          <a href="#about" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('about'); }} style={{ textDecoration: 'none', color: activePage === 'about' ? '#125651' : '#1e293b', fontWeight: '600', fontSize: '15px' }}>About Us</a>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '12px', borderLeft: '2px solid #e6f4f1' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', color: '#64748b' }}>COMPANY</span>
            <a href="#our-story" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('our-story'); }} style={{ textDecoration: 'none', color: '#1e293b', fontWeight: '600', fontSize: '14.5px' }}>Our Story</a>
            <a href="#privacy-policy" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('privacy-policy'); }} style={{ textDecoration: 'none', color: '#1e293b', fontWeight: '600', fontSize: '14.5px' }}>Privacy Policy</a>
            <a href="#terms-conditions" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('terms-conditions'); }} style={{ textDecoration: 'none', color: '#1e293b', fontWeight: '600', fontSize: '14.5px' }}>Terms & Conditions</a>
            <a href="#refund-policy" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('refund-policy'); }} style={{ textDecoration: 'none', color: '#1e293b', fontWeight: '600', fontSize: '14.5px' }}>Refund Policy</a>
          </div>

          <a href="#funding" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('funding'); }} style={{ textDecoration: 'none', color: activePage === 'funding' ? '#125651' : '#1e293b', fontWeight: '600', fontSize: '15px' }}>Funding</a>
          <a href="#grants" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('grants'); }} style={{ textDecoration: 'none', color: activePage === 'grants' ? '#125651' : '#1e293b', fontWeight: '600', fontSize: '15px' }}>Grants</a>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '12px', borderLeft: '2px solid #e6f4f1' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', color: '#64748b' }}>MENTORS</span>
            <a href="#mentors" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('mentors'); }} style={{ textDecoration: 'none', color: '#1e293b', fontWeight: '600', fontSize: '14.5px' }}>Browse Mentors</a>
            <a href="#become-mentor" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('become-mentor'); }} style={{ textDecoration: 'none', color: '#1e293b', fontWeight: '600', fontSize: '14.5px' }}>Become a Mentor</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '12px', borderLeft: '2px solid #e6f4f1' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', color: '#64748b' }}>SERVICES</span>
            <a href="#services" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('services'); }} style={{ textDecoration: 'none', color: '#1e293b', fontWeight: '600', fontSize: '14.5px' }}>Services Overview</a>
            <a href="#templates" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('resources'); }} style={{ textDecoration: 'none', color: '#1e293b', fontWeight: '600', fontSize: '14.5px' }}>Templates & Resources</a>
          </div>

          <a href="#global-services" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('global-services'); }} style={{ textDecoration: 'none', color: activePage === 'global-services' ? '#125651' : '#1e293b', fontWeight: '600', fontSize: '15px' }}>Global Services</a>
          <a href="#blog" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate?.('blog'); }} style={{ textDecoration: 'none', color: activePage === 'blog' ? '#125651' : '#1e293b', fontWeight: '600', fontSize: '15px' }}>Blog</a>
          <hr style={{ borderColor: '#e2e8f0', borderStyle: 'solid', borderWidth: '0.5px' }} />
          <button
            onClick={() => { setMobileMenuOpen(false); onNavigate?.('contact'); }}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <span>Contact</span>
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
