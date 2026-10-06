import React from 'react';
import { ReceiptText, Mail, Globe, Phone } from 'lucide-react';

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: '1. Introduction',
    body: (
      <p>
        At Elevate by GHC GrowthLab, operated by GHC Financial Advisory Services LLP, we strive to provide high-quality business advisory and valuation services. This Refund Policy outlines the conditions under which refunds may be granted for services purchased through our platform https://elevate.ghcgrowthlab.com/.
      </p>
    ),
  },
  {
    title: '2. Eligibility for Refunds',
    body: (
      <>
        <p>Refunds may be considered under the following circumstances:</p>
        <ul>
          <li>If the service purchased cannot be delivered due to unforeseen circumstances on our end.</li>
          <li>If there was an error in payment processing resulting in duplicate charges.</li>
          <li>If the client cancels the service within a specified period before work has commenced.</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Non-Refundable Services',
    body: (
      <>
        <p>The following services are non-refundable:</p>
        <ul>
          <li>Completed business advisory or valuation services.</li>
          <li>Customized reports and consulting services already provided.</li>
          <li>Any services where work has commenced based on client requirements.</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Refund Request Process',
    body: (
      <>
        <p>To request a refund, follow these steps:</p>
        <ul>
          <li>Contact us at info@ghcgrowthlab.com within 5 days of the transaction.</li>
          <li>Provide the transaction details, proof of payment, and a reason for the refund request.</li>
          <li>Our team will review the request and respond within 10 business days.</li>
        </ul>
      </>
    ),
  },
  {
    title: '5. Processing Refunds',
    body: (
      <>
        <p>If approved, refunds will be processed via the original payment method.</p>
        <ul>
          <li>The refund process may take 7-14 business days depending on the payment provider.</li>
          <li>Any applicable processing fees may be deducted from the refund amount.</li>
        </ul>
      </>
    ),
  },
  {
    title: '6. Modifications to This Policy',
    body: (
      <p>
        We reserve the right to modify this Refund Policy at any time. Changes will be posted on this page with an updated effective date.
      </p>
    ),
  },
  {
    title: '7. Contact Us',
    body: (
      <>
        <p>For any questions or refund requests, contact us at:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <ReceiptText size={16} style={{ color: '#1a7b74', flexShrink: 0 }} /> GHC Financial Advisory Services LLP
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <Globe size={16} style={{ color: '#1a7b74', flexShrink: 0 }} /> https://elevate.ghcgrowthlab.com/
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <Mail size={16} style={{ color: '#1a7b74', flexShrink: 0 }} /> info@ghcgrowthlab.com
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <Phone size={16} style={{ color: '#1a7b74', flexShrink: 0 }} /> +91 9496350829
          </span>
        </div>
      </>
    ),
  },
];

export const RefundPolicyPage: React.FC = () => {
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
              Refund <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>Policy</span>
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
