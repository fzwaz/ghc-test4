import React from 'react';
import type { PageKey } from './Navbar';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const InstagramIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
  </svg>
);

const LinkedinIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="8.5" width="4.5" height="13.5" rx="1" />
    <circle cx="4.25" cy="4.25" r="2.25" />
    <path d="M10.5 8.5h4.2v1.9h.06c.58-1.1 2-2.3 4.14-2.3 4.42 0 5.24 2.91 5.24 6.7v7.2h-4.4v-6.4c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.39v6.51H10.5V8.5z" />
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 13.5h2.5l.7-3.5H14V7.8c0-.97.27-1.63 1.66-1.63H17.5V3.05C16.88 2.96 15.7 2.85 14.34 2.85c-2.84 0-4.78 1.73-4.78 4.92V10H6.5v3.5h3.06V22h4.44V13.5z" />
  </svg>
);

interface FooterProps {
  onNavigate?: (page: PageKey, anchor?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageKey, anchor?: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.(page, anchor);
  };

  return (
    <footer
      id="contact"
      className="ghc-footer"
      style={{
        width: '100%',
        backgroundColor: '#031e1a',
        backgroundImage: `
          radial-gradient(700px 380px at 0% 0%, rgba(20, 184, 166, 0.32) 0%, rgba(3, 30, 26, 0) 70%),
          radial-gradient(800px 420px at 100% 0%, rgba(20, 184, 166, 0.22) 0%, rgba(3, 30, 26, 0) 65%),
          radial-gradient(900px 500px at 50% 115%, rgba(20, 184, 166, 0.28) 0%, rgba(3, 30, 26, 0) 70%)
        `,
        color: '#e2e8f0',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: '72px 48px 32px 48px',
      }}
    >
      {/* Decorative top-right curved arc */}
      <svg
        style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '520px',
          height: '520px',
          pointerEvents: 'none',
          opacity: 0.55,
          zIndex: 1,
        }}
        viewBox="0 0 520 520"
        fill="none"
      >
        <circle cx="520" cy="0" r="420" stroke="#2dd4bf" strokeWidth="1.3" opacity="0.45" />
        <circle cx="520" cy="0" r="320" stroke="#2dd4bf" strokeWidth="0.9" opacity="0.22" />
      </svg>

      {/* Decorative bottom curved elliptical arc */}
      <svg
        style={{
          position: 'absolute',
          bottom: '-280px',
          left: '12%',
          width: '880px',
          height: '420px',
          pointerEvents: 'none',
          opacity: 0.45,
          zIndex: 1,
        }}
        viewBox="0 0 880 420"
        fill="none"
      >
        <ellipse cx="440" cy="420" rx="430" ry="390" stroke="#2dd4bf" strokeWidth="1.4" opacity="0.4" />
      </svg>

      {/* Decorative dot grid — bottom left */}
      <div
        className="footer-dot-grid"
        style={{
          position: 'absolute',
          bottom: '100px',
          left: '24px',
          width: '140px',
          height: '84px',
          backgroundImage: 'radial-gradient(rgba(45, 212, 191, 0.65) 1.8px, transparent 1.8px)',
          backgroundSize: '20px 20px',
          opacity: 0.45,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Content Container (1200 - 1400px) */}
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Main 4-Column Layout with Vertical Dividers */}
        <div className="footer-columns-wrapper">
          {/* Column 1: Brand Info */}
          <div className="footer-col footer-col-brand">
            <div
              style={{
                fontSize: '34px',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              <span style={{ color: '#ffffff' }}>GHCGrowth</span>
              <span style={{ color: '#00dfc0' }}>Lab</span>
            </div>

            <p
              style={{
                fontSize: '14.5px',
                lineHeight: 1.65,
                color: '#9fb5b2',
                margin: '0 0 28px 0',
                maxWidth: '340px',
              }}
            >
              An online platform providing 1-on-1 personalized mentorship to startup founders who are
              struggling to grow their startup.
            </p>

            <div
              style={{
                fontSize: '23px',
                fontWeight: 700,
                letterSpacing: '-0.01em',
              }}
            >
              <span style={{ color: '#ffffff' }}>#Grow</span>
              <span style={{ color: '#00dfc0' }}>with</span>
              <span style={{ color: '#ffffff' }}>Guidance</span>
            </div>
          </div>

          {/* Vertical Divider 1 */}
          <div className="footer-divider">
            <span className="footer-divider-dot" />
          </div>

          {/* Column 2: Company */}
          <div className="footer-col">
            <div className="footer-col-header">
              COMPANY
              <span className="footer-heading-underline" />
            </div>
            <ul className="footer-links-list">
              <li>
                <a href="/our-story" onClick={handleNav('our-story')} className="footer-link">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>Our Story</span>
                </a>
              </li>
              <li>
                <a href="/privacy-policy" onClick={handleNav('privacy-policy')} className="footer-link">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="/terms-conditions" onClick={handleNav('terms-conditions')} className="footer-link">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>Terms and Conditions</span>
                </a>
              </li>
              <li>
                <a href="/refund-policy" onClick={handleNav('refund-policy')} className="footer-link">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>Refund Policy</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Vertical Divider 2 */}
          <div className="footer-divider">
            <span className="footer-divider-dot" />
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-col">
            <div className="footer-col-header">
              QUICK LINKS
              <span className="footer-heading-underline" />
            </div>
            <ul className="footer-links-list">
              <li>
                <a href="/mentors" onClick={handleNav('mentors')} className="footer-link">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>Browse Mentors</span>
                </a>
              </li>
              <li>
                <a href="/become-mentor" onClick={handleNav('become-mentor')} className="footer-link">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>Become a Mentor</span>
                </a>
              </li>
              <li>
                <a href="/funding" onClick={handleNav('funding')} className="footer-link">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>Funding</span>
                </a>
              </li>
              <li>
                <a href="/services" onClick={handleNav('services')} className="footer-link">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="/global-services" onClick={handleNav('global-services')} className="footer-link">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>Global Services</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Vertical Divider 3 */}
          <div className="footer-divider">
            <span className="footer-divider-dot" />
          </div>

          {/* Column 4: Support */}
          <div className="footer-col footer-col-support">
            <div className="footer-col-header">
              SUPPORT
              <span className="footer-heading-underline" />
            </div>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <Phone size={19} className="footer-contact-icon" />
                <a href="tel:+919496350829" className="footer-contact-link">
                  +91 9496350829
                </a>
              </div>

              <div className="footer-contact-item">
                <Mail size={19} className="footer-contact-icon" />
                <a href="mailto:investmentbanking@ghcgrowthlab.com" className="footer-contact-link">
                  investmentbanking@ghcgrowthlab.com
                </a>
              </div>

              <div className="footer-contact-item" style={{ alignItems: 'flex-start' }}>
                <MapPin size={19} className="footer-contact-icon" style={{ marginTop: '3px' }} />
                <span className="footer-contact-address">
                  2nd Floor, SAM Tower,<br />
                  KP Vallon Rd, Indira Nagar,<br />
                  Kadavanthra, Kochi,<br />
                  Ernakulam, Kerala 682020
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © 2024 <strong style={{ color: '#ffffff', fontWeight: 600 }}>GHCGrowthLab</strong>. All rights reserved.
          </div>

          <div className="footer-social-links">
            <a
              href="https://www.instagram.com/ghcgrowthlab/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="footer-social-btn"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/ghc-growth-lab/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="footer-social-btn"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://www.facebook.com/ghcgrowthlab/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="footer-social-btn"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Scoped CSS Styles for Pixel-Perfect Layout & Responsiveness */}
      <style>{`
        .footer-columns-wrapper {
          display: grid;
          grid-template-columns: 1.45fr 1px 1.05fr 1px 1.15fr 1px 1.45fr;
          gap: 36px;
          align-items: stretch;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        .footer-col-brand {
          padding-right: 8px;
        }

        .footer-divider {
          position: relative;
          width: 1px;
          background-color: rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-divider-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #2dd4bf;
          box-shadow: 0 0 6px rgba(45, 212, 191, 0.7);
        }

        .footer-col-header {
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 22px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-heading-underline {
          display: block;
          width: 22px;
          height: 2.5px;
          background-color: #00dfc0;
          border-radius: 2px;
          margin-top: 8px;
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-link {
          color: '#b0c5c2';
          color: #b0c5c2;
          text-decoration: none;
          font-size: 14.5px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .footer-chevron {
          color: #2dd4bf;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .footer-link:hover {
          color: #ffffff;
          transform: translateX(3px);
        }

        .footer-link:hover .footer-chevron {
          color: #00dfc0;
          transform: translateX(2px);
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 14px;
        }

        .footer-contact-icon {
          color: #00dfc0;
          flex-shrink: 0;
        }

        .footer-contact-link {
          color: #b0c5c2;
          text-decoration: none;
          line-height: 1.5;
          transition: color 0.2s ease;
          word-break: break-word;
        }

        .footer-contact-link:hover {
          color: #ffffff;
        }

        .footer-contact-address {
          color: #b0c5c2;
          line-height: 1.6;
          font-size: 14px;
        }

        .footer-bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          margin-top: 56px;
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-copyright {
          font-size: 14px;
          color: '#7e9a96';
          color: #7e9a96;
        }

        .footer-social-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.32);
          background-color: transparent;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .footer-social-btn:hover {
          border-color: #00dfc0;
          color: #00dfc0;
          background-color: rgba(0, 223, 192, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 223, 192, 0.25);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .ghc-footer {
            padding: 60px 32px 30px 32px !important;
          }
          .footer-columns-wrapper {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .footer-divider {
            display: none;
          }
          .footer-col-brand {
            grid-column: span 2;
          }
        }

        @media (max-width: 680px) {
          .ghc-footer {
            padding: 50px 20px 28px 20px !important;
          }
          .footer-columns-wrapper {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .footer-col-brand {
            grid-column: span 1;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
            margin-top: 40px;
          }
          .footer-dot-grid {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
