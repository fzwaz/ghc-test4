import React from 'react';
import { ShieldCheck, Mail, Globe, Phone } from 'lucide-react';

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: '1. Introduction',
    body: (
      <p>
        Welcome to Elevate by GHC GrowthLab, operated by GHC Financial Advisory Services LLP (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://elevate.ghcgrowthlab.com/ (&ldquo;Website&rdquo;). By using our Website, you agree to the terms of this Privacy Policy.
      </p>
    ),
  },
  {
    title: '2. Information We Collect',
    body: (
      <>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, company details, and any other information you provide when registering or contacting us.</li>
          <li><strong>Business Information:</strong> Company financials, valuation details, and other business-related data submitted for advisory or valuation purposes.</li>
          <li><strong>Usage Data:</strong> IP addresses, browser type, operating system, referring URLs, page views, and interaction data collected through cookies and analytics tools.</li>
          <li><strong>Payment Information:</strong> If you purchase services, we may collect billing details, but payment processing is handled securely by third-party providers.</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. How We Use Your Information',
    body: (
      <>
        <p>We use the collected information to:</p>
        <ul>
          <li>Provide, operate, and improve our services.</li>
          <li>Respond to inquiries and provide customer support.</li>
          <li>Process transactions and deliver advisory services.</li>
          <li>Conduct research and analysis for business improvements.</li>
          <li>Comply with legal and regulatory requirements.</li>
          <li>Send updates, promotional materials, and other communications (you can opt-out at any time).</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Sharing of Information',
    body: (
      <>
        <p>We do not sell, rent, or trade your information. However, we may share your data with:</p>
        <ul>
          <li><strong>Service Providers &amp; Partners:</strong> Third parties assisting in service delivery, hosting, analytics, and payment processing.</li>
          <li><strong>Legal Compliance:</strong> If required by law or to protect our rights, safety, or business operations.</li>
          <li><strong>Business Transfers:</strong> In case of a merger, acquisition, or asset sale.</li>
        </ul>
      </>
    ),
  },
  {
    title: '5. Data Security',
    body: (
      <p>
        We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    title: '6. Cookies & Tracking Technologies',
    body: (
      <p>
        We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide relevant content. You can manage cookie preferences through your browser settings.
      </p>
    ),
  },
  {
    title: '7. Third-Party Links',
    body: (
      <p>
        Our Website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies.
      </p>
    ),
  },
  {
    title: '8. Your Rights & Choices',
    body: (
      <>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal information.</li>
          <li>Object to certain data processing activities.</li>
          <li>Withdraw consent where applicable. To exercise these rights, contact us at <a href="mailto:info@ghcgrowthlab.com" style={{ color: '#125651', fontWeight: 800 }}>info@ghcgrowthlab.com</a>.</li>
        </ul>
      </>
    ),
  },
  {
    title: '9. Changes to This Privacy Policy',
    body: (
      <p>
        We may update this Privacy Policy from time to time. The latest version will be posted on this page with an updated effective date.
      </p>
    ),
  },
  {
    title: '10. Contact Us',
    body: (
      <>
        <p>For any questions or concerns regarding this Privacy Policy, please contact us at:</p>
        <div style={{ borderRadius: '16px', backgroundColor: '#f0fdfa', border: '1.5px solid #5eead4', padding: '22px 24px', marginTop: '16px', boxShadow: '0 10px 26px -12px rgba(15,157,143,0.35)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>
              <span style={{ width: '34px', height: '34px', borderRadius: '10px', backgroundColor: '#1a7b74', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={17} />
              </span>
              GHC Financial Advisory Services LLP
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>
              <span style={{ width: '34px', height: '34px', borderRadius: '10px', backgroundColor: '#1a7b74', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Globe size={17} />
              </span>
              https://elevate.ghcgrowthlab.com/
            </span>
            <a href="mailto:info@ghcgrowthlab.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '15px', fontWeight: 800, color: '#125651', textDecoration: 'none' }}>
              <span style={{ width: '34px', height: '34px', borderRadius: '10px', backgroundColor: '#1a7b74', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={17} />
              </span>
              info@ghcgrowthlab.com
            </a>
            <a href="tel:+919496350829" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '15px', fontWeight: 800, color: '#125651', textDecoration: 'none' }}>
              <span style={{ width: '34px', height: '34px', borderRadius: '10px', backgroundColor: '#1a7b74', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={17} />
              </span>
              +91 9496350829
            </a>
          </div>
        </div>
        <p style={{ marginTop: '20px' }}>
          By using our Website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
        </p>
      </>
    ),
  },
];

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', width: '100%', backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.055) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 130% 110% at 50% 42%, black 62%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 130% 110% at 50% 42%, black 62%, transparent 100%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '130px 48px 20px 48px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1a7b74', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '20px' }}>
              Legal
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4.4vw, 3.6rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: '16px' }}>
              Privacy <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>Policy</span>
            </h1>
            <p style={{ fontSize: '14.5px', color: '#64748b' }}>
              Effective Date: <strong style={{ color: '#0f172a' }}>02 Feb, 2025</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '20px 48px 100px 48px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {sections.map((s, idx) => (
            <article
              key={idx}
              style={{
                borderRadius: '20px', backgroundColor: '#ffffff', border: '1px solid #e6f0ee',
                padding: '32px 34px', boxShadow: '0 10px 26px -12px rgba(15,157,143,0.1)',
              }}
            >
              <h2 style={{ fontSize: '19px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em', marginBottom: '14px' }}>
                {s.title}
              </h2>
              <div style={{ fontSize: '14.5px', color: '#3f4753', lineHeight: 1.75 }}>
                {s.body}
              </div>
            </article>
          ))}
        </div>
        <style>{`
          article p { margin: 0 0 12px 0; }
          article p:last-child { margin-bottom: 0; }
          article ul { margin: 4px 0 12px 0; padding-left: 22px; }
          article li { margin-bottom: 8px; }
          article li:last-child { margin-bottom: 0; }
        `}</style>
      </section>
    </>
  );
};
