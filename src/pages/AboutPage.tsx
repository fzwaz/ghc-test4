import React from 'react';
import { AboutHero } from '../about/AboutHero';
import { WhatWeDo } from '../about/WhatWeDo';
import { BeliefBanner } from '../about/BeliefBanner';
import { ClosingCta } from '../about/ImpactCta';
import { CtaBanner } from '../components/CtaBanner';

interface AboutPageProps {
  onTalkToTeam?: () => void;
  onGetFunded?: () => void;
  onPartner?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onTalkToTeam, onGetFunded, onPartner }) => {
  return (
    <>
      <AboutHero />

      {/* Full About Us content — verbatim */}
      <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '20px 48px 80px 48px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1b736b', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '18px' }}>
            About Us
          </div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.7rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#0f172a', marginBottom: '24px' }}>
            Growth-focused consulting & <span style={{ color: '#1a7b74' }}>investment banking firm.</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <p style={{ fontSize: '16px', color: '#334155', lineHeight: 1.75 }}>
              GHC GrowthLab is a growth-focused consulting and investment banking firm committed to helping startups, MSMEs, and enterprises raise capital, scale strategically, and build sustainable businesses.
            </p>
            <p style={{ fontSize: '16px', color: '#334155', lineHeight: 1.75 }}>
              Our core expertise lies in Investment Banking and Funding Advisory, supporting businesses across debt funding, equity fundraising, business valuation, financial modelling, investor readiness, due diligence, and transaction advisory. We work closely with founders, investors, banks, NBFCs, and financial institutions to bridge the gap between innovative businesses and capital.
            </p>
            <p style={{ fontSize: '16px', color: '#334155', lineHeight: 1.75 }}>
              Beyond fundraising, we provide integrated business solutions including strategic advisory, corporate structuring, compliance, accounting, taxation, cross-border advisory, and technology consulting, enabling businesses to grow with confidence.
            </p>
            <p style={{ fontSize: '16px', color: '#334155', lineHeight: 1.75, fontWeight: 600 }}>
              At GHC GrowthLab, we don&apos;t just help businesses raise funds, we help them become investment-ready and future-ready.
            </p>
          </div>
        </div>
      </section>

      <WhatWeDo />
      <BeliefBanner onPartner={onPartner} />
      <ClosingCta onTalk={onTalkToTeam} onFunded={onGetFunded} />
      <CtaBanner />
    </>
  );
};
