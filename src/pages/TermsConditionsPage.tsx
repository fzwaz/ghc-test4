import React from 'react';
import { ShieldCheck, Mail, Globe, Phone } from 'lucide-react';

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: '1. Introduction',
    body: (
      <p>
        Welcome to Elevate by GHC GrowthLab, operated by GHC Financial Advisory Services LLP (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing and using our website https://elevate.ghcgrowthlab.com/ (&ldquo;Website&rdquo;), you agree to comply with these Terms &amp; Conditions. If you do not agree, please do not use our Website.
      </p>
    ),
  },
  {
    title: '2. Use of the Website',
    body: (
      <>
        <p>You agree to use our Website and services only for lawful purposes. You must not:</p>
        <ul>
          <li>Engage in fraudulent, abusive, or illegal activities.</li>
          <li>Interfere with or disrupt the Website&apos;s functionality.</li>
          <li>Attempt to gain unauthorized access to any part of the Website.</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Services & Limitations',
    body: (
      <p>
        Our platform provides business advisory and valuation services. While we strive for accuracy, we do not guarantee the completeness or reliability of information provided on the Website. Users are responsible for verifying the information before making business decisions.
      </p>
    ),
  },
  {
    title: '4. User Accounts & Responsibilities',
    body: (
      <>
        <p>To access certain features, you may be required to create an account. You agree to:</p>
        <ul>
          <li>Provide accurate and up-to-date information.</li>
          <li>Maintain the confidentiality of your login credentials.</li>
          <li>Notify us immediately of any unauthorized access or security breaches.</li>
        </ul>
      </>
    ),
  },
  {
    title: '5. Payments & Refund Policy',
    body: (
      <>
        <p>If you purchase services through our Website:</p>
        <ul>
          <li>Payments must be made in full as per the agreed terms.</li>
          <li>Refunds are subject to our refund policy, available upon request.</li>
        </ul>
      </>
    ),
  },
  {
    title: '6. Intellectual Property',
    body: (
      <p>
        All content on the Website, including text, graphics, logos, and software, is owned by or licensed to us and protected by intellectual property laws. You may not reproduce, distribute, or use our content without prior written permission.
      </p>
    ),
  },
  {
    title: '7. Limitation of Liability',
    body: (
      <p>
        To the fullest extent permitted by law, we are not liable for any direct, indirect, incidental, or consequential damages arising from the use of our Website or services.
      </p>
    ),
  },
  {
    title: '8. Indemnification',
    body: (
      <p>
        You agree to indemnify and hold us harmless from any claims, losses, or damages arising from your use of the Website or violation of these Terms &amp; Conditions.
      </p>
    ),
  },
  {
    title: '9. Termination',
    body: (
      <p>
        We reserve the right to terminate or suspend your access to the Website without notice if you violate these Terms &amp; Conditions.
      </p>
    ),
  },
  {
    title: '10. Governing Law',
    body: (
      <p>
        These Terms &amp; Conditions are governed by the laws of India. Any disputes shall be resolved in the courts of jurisdiction Ernakulam.
      </p>
    ),
  },
  {
    title: '11. Changes to These Terms',
    body: (
      <p>
        We may update these Terms &amp; Conditions at any time. Continued use of the Website signifies your acceptance of any changes.
      </p>
    ),
  },
  {
    title: '12. Contact Us',
    body: (
      <>
        <p>For any questions or concerns regarding these Terms &amp; Conditions, please contact us at:</p>
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
          By using our Website, you acknowledge that you have read and understood these Terms &amp; Conditions and agree to its terms.
        </p>
      </>
    ),
  },
];

export const TermsConditionsPage: React.FC = () => {
  return (
    <section className="terms-page" style={{ width: '100%', backgroundColor: '#ffffff', padding: '130px 48px 100px 48px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1a7b74', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Legal
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0f172a', marginBottom: '14px' }}>
            Terms &amp; <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>Conditions</span>
          </h1>
          <p style={{ fontSize: '14.5px', color: '#64748b' }}>
            Effective Date: <strong style={{ color: '#0f172a' }}>02 Feb, 2025</strong>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
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
      </div>
      <style>{`
        .terms-page article p { margin: 0 0 12px 0; }
        .terms-page article p:last-child { margin-bottom: 0; }
        .terms-page article ul { margin: 4px 0 12px 0; padding-left: 22px; }
        .terms-page article li { margin-bottom: 8px; }
        .terms-page article li:last-child { margin-bottom: 0; }
        @media (max-width: 640px) {
          .terms-page { padding: 110px 20px 64px 20px !important; }
          .terms-page article { padding: 24px 22px !important; }
        }
      `}</style>
    </section>
  );
};
