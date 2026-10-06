import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CtaBanner } from '../components/CtaBanner';

interface Tier {
  tier: 1 | 2 | 3;
  count: number;
  frequency: string;
  tagline: string;
  tool: string;
  examples: string[];
  moreCount: number;
  accent: string;
  statBg: string;
}

const tiers: Tier[] = [
  {
    tier: 1,
    count: 50,
    frequency: 'Daily (every 24hrs)',
    tagline: 'Major grant portals, government sites, large foundations',
    tool: 'BeautifulSoup / Scrapy',
    examples: [
      'grants.gov', 'NSF.gov', 'Wellcome Trust', 'Ford Foundation',
      'Gates Foundation', 'Y Combinator', 'Techstars', 'EC Horizon Europe',
    ],
    moreCount: 42,
    accent: '#0f766e',
    statBg: '#e9f7f4',
  },
  {
    tier: 2,
    count: 150,
    frequency: 'Every 2–3 days',
    tagline: 'Regional accelerators, startup competitions, university programs',
    tool: 'Scrapy / RSS Feed Parser',
    examples: [
      'AngelList', '500 Startups', 'Seedcamp', 'SOSV',
      'MassChallenge', 'Village Capital', 'Unreasonable Group', 'Impact Hub',
    ],
    moreCount: 142,
    accent: '#2563eb',
    statBg: '#e9effe',
  },
  {
    tier: 3,
    count: 100,
    frequency: 'Weekly',
    tagline: 'Niche funding blogs, ecosystem newsletters, smaller programs',
    tool: 'Playwright (JS-heavy sites)',
    examples: [
      'F6S', 'Crunchbase', 'EU Startups', 'TechCrunch Disrupt',
      'Hacker News', 'Product Hunt Ship', 'Beta List', 'Slush',
    ],
    moreCount: 92,
    accent: '#0f2a3c',
    statBg: '#eef1f4',
  },
];

const pipeline = [
  { title: 'Scheduled trigger', desc: 'Celery Beat fires Scrapy/BeautifulSoup/Playwright crawler per tier' },
  { title: 'Raw extraction', desc: 'HTML/JSON content extracted from each source URL' },
  { title: 'Normalization', desc: 'Key fields mapped to standard schema (title, amount, deadline, etc.)' },
  { title: 'Deduplication', desc: 'Hash check against existing records using URL and title fingerprint' },
  { title: 'Storage', desc: 'Clean data upserted into PostgreSQL with full-text search indexes' },
  { title: 'Admin review', desc: 'New entries flagged for admin quality check via dashboard' },
];

type TierFilter = 'all' | 1 | 2 | 3;

export const GrantsSourcesPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTier, setActiveTier] = useState<TierFilter>('all');
  const visible = tiers.filter((t) => activeTier === 'all' || t.tier === activeTier);

  const pills: { value: TierFilter; label: string }[] = [
    { value: 'all', label: 'All Tiers' },
    { value: 1, label: 'Tier 1' },
    { value: 2, label: 'Tier 2' },
    { value: 3, label: 'Tier 3' },
  ];

  return (
    <>
      <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '130px 48px 30px 48px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <button
            onClick={() => navigate('/grants')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#ffffff', color: '#0f172a', border: '1px solid #dce7e4', borderRadius: '9999px', padding: '10px 20px', fontWeight: 700, fontSize: '13.5px', cursor: 'pointer', marginBottom: '18px', fontFamily: 'inherit' }}
          >
            <ArrowLeft size={15} /> Back to Grants
          </button>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0f2a3c', letterSpacing: '-0.02em', marginBottom: '10px' }}>
            Data Sources
          </h1>
          <p style={{ fontSize: '14.5px', color: '#5b6472', lineHeight: 1.65 }}>
            300+ verified funding websites scraped automatically on a tiered schedule. All data is normalized and deduplicated before entering the database.
          </p>
        </div>
      </section>

      <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '10px 48px 100px 48px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '26px' }} className="sources-stats-grid">
            {tiers.map((t) => (
              <div key={t.tier} style={{ borderRadius: '14px', backgroundColor: t.statBg, padding: '22px 24px' }}>
                <div style={{ fontSize: '30px', fontWeight: 900, color: t.accent, lineHeight: 1.1 }}>{t.count}</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#334155', marginTop: '2px' }}>Tier {t.tier}</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>{t.frequency}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '26px' }}>
            {pills.map((p) => {
              const active = activeTier === p.value;
              return (
                <button
                  key={p.label}
                  onClick={() => setActiveTier(p.value)}
                  style={{
                    padding: '9px 22px', borderRadius: '9999px', fontSize: '13.5px', fontWeight: 700, cursor: 'pointer',
                    backgroundColor: active ? '#0f2a3c' : '#ffffff', color: active ? '#ffffff' : '#0f2a3c',
                    border: active ? '1px solid #0f2a3c' : '1px solid #cbd5e1', transition: 'all 0.2s ease',
                  }}
                >
                  {p.label}
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
            {visible.map((t) => (
              <div
                key={t.tier}
                style={{
                  borderRadius: '16px', backgroundColor: '#ffffff', border: '1px solid rgba(20,184,166,0.4)',
                  padding: '28px', boxShadow: '0 10px 28px -12px rgba(18,86,81,0.1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: 800, color: t.accent }}>Tier {t.tier}</h2>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#0f766e', backgroundColor: '#e6f4f1', padding: '4px 12px', borderRadius: '9999px' }}>
                    {t.count} sources
                  </span>
                </div>
                <p style={{ fontSize: '13.5px', color: '#64748b', marginBottom: '18px' }}>{t.tagline}</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }} className="sources-info-grid">
                  <div style={{ borderRadius: '10px', backgroundColor: '#f4f8f7', padding: '14px 18px' }}>
                    <div style={{ fontSize: '11.5px', color: '#64748b', marginBottom: '4px' }}>Update Frequency</div>
                    <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#0f172a' }}>{t.frequency}</div>
                  </div>
                  <div style={{ borderRadius: '10px', backgroundColor: '#f4f8f7', padding: '14px 18px' }}>
                    <div style={{ fontSize: '11.5px', color: '#64748b', marginBottom: '4px' }}>Scraping Tool</div>
                    <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#0f172a' }}>{t.tool}</div>
                  </div>
                </div>

                <div style={{ fontSize: '12.5px', color: '#64748b', marginBottom: '10px' }}>Example sources:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {t.examples.map((s) => (
                    <span key={s} style={{ fontSize: '12.5px', fontWeight: 600, color: '#0f766e', backgroundColor: '#eefaf8', border: '1px solid rgba(20,184,166,0.25)', padding: '6px 14px', borderRadius: '8px' }}>
                      {s}
                    </span>
                  ))}
                  <span style={{ fontSize: '12.5px', color: '#94a3b8', backgroundColor: '#f1f5f9', padding: '6px 14px', borderRadius: '8px' }}>
                    +{t.moreCount} more...
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              borderRadius: '16px', backgroundColor: '#ffffff', border: '1px solid rgba(20,184,166,0.4)',
              padding: '28px', boxShadow: '0 10px 28px -12px rgba(18,86,81,0.1)',
            }}
          >
            <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a', marginBottom: '20px' }}>Data Pipeline Flow</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {pipeline.map((p, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#0f2a3c', color: '#ffffff', fontSize: '13px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {idx + 1}
                  </span>
                  <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.6, paddingTop: '3px' }}>
                    <strong style={{ color: '#0f172a', fontWeight: 800 }}>{p.title}:</strong> {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />

      <style>{`
        @media (max-width: 720px) {
          .sources-stats-grid { grid-template-columns: 1fr !important; }
          .sources-info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
};
