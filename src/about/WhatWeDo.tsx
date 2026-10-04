import React from 'react';
import { Database, Building2, Globe, TrendingUp, ShieldCheck, Cpu } from 'lucide-react';

const leftServices = [
  { icon: Database, title: 'Investment Banking & Funding Advisory', desc: 'Debt funding, equity financing, investor readiness and transaction advisory.' },
  { icon: Building2, title: 'Corporate Structuring', desc: 'Entity setup, restructuring and governance to build for long-term growth.' },
  { icon: Globe, title: 'Cross-Border Advisory', desc: 'Guidance for global expansion and international funding opportunities.' },
];

const rightServices = [
  { icon: TrendingUp, title: 'Strategic Advisory', desc: 'Business strategy, market entry, growth planning and operational efficiency.' },
  { icon: ShieldCheck, title: 'Compliance & Accounting', desc: 'Regulatory compliance, accounting, taxation and statutory support.' },
  { icon: Cpu, title: 'Technology Consulting', desc: 'Digital adoption to improve efficiency and accelerate growth.' },
];

const serviceCard = (s: { icon: React.ElementType; title: string; desc: string }, idx: number) => {
  const Icon = s.icon;
  return (
    <div
      key={idx}
      style={{
        display: 'flex', gap: '14px', alignItems: 'flex-start',
        backgroundColor: '#ffffff', border: '1px solid rgba(226,232,240,0.9)',
        borderRadius: '18px', padding: '20px 18px',
        boxShadow: '0 10px 28px -8px rgba(18,86,81,0.08)',
      }}
    >
      <span style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: '#e6f4f1', color: '#125651', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={20} />
      </span>
      <span>
        <span style={{ display: 'block', fontSize: '14.5px', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, marginBottom: '6px' }}>{s.title}</span>
        <span style={{ display: 'block', fontSize: '12.5px', color: '#52606d', lineHeight: 1.55 }}>{s.desc}</span>
      </span>
    </div>
  );
};

export const WhatWeDo: React.FC = () => {
  return (
    <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '90px 48px 100px 48px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1b736b', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            WHAT WE DO
          </div>
          <div className="whatwedo-head" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'end' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)', fontWeight: 800, lineHeight: 1.18, letterSpacing: '-0.02em', color: '#0f172a' }}>
              More than funding.<br /><span style={{ color: '#1a7b74' }}>A complete growth ecosystem.</span>
            </h2>
            <p style={{ fontSize: '14.5px', color: '#52606d', lineHeight: 1.65, maxWidth: '480px' }}>
              We provide integrated solutions that help businesses raise capital, scale strategically, and operate with confidence. From funding advisory to compliance and technology, we cover the full spectrum of what growing businesses need.
            </p>
          </div>
        </div>

        <div className="whatwedo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '48px', alignItems: 'center', marginTop: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {leftServices.map((s, idx) => serviceCard(s, idx))}
          </div>

          <div style={{ position: 'relative', width: '220px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1.5px dashed rgba(20,184,166,0.35)' }} />
            <div style={{ position: 'absolute', inset: '22px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(20,184,166,0.16) 0%, rgba(20,184,166,0) 70%)' }} />
            <div style={{
              width: '150px', height: '150px', borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 30%, #177a72 0%, #115651 55%, #073834 100%)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 18px 40px -8px rgba(18,86,81,0.45), inset 0 2px 4px rgba(255,255,255,0.4), 0 0 0 10px rgba(20,184,166,0.1)',
            }}>
              <span style={{ color: '#ffffff', fontSize: '26px', fontWeight: 900, letterSpacing: '-0.3px', lineHeight: 1 }}>GHC</span>
              <span style={{ color: '#ccfbf1', fontSize: '12px', fontWeight: 600, marginTop: '4px' }}>GrowthLab</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {rightServices.map((s, idx) => serviceCard(s, idx))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) {
          .whatwedo-head { grid-template-columns: 1fr !important; }
          .whatwedo-grid { grid-template-columns: 1fr !important; gap: 36px !important; justify-items: center; }
        }
      `}</style>
    </section>
  );
};
