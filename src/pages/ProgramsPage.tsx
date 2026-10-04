import React, { useState } from 'react';
import DotField from '../components/DotField';
import { Layers, Rocket, TrendingUp, Globe, Check, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { CtaBanner } from '../components/CtaBanner';

interface ProgramsPageProps {
  onSelectProgram?: (programName: string) => void;
  onTalkToTeam?: () => void;
  onGetFunded?: () => void;
}

const trustPoints = [
  '4 tailored cohort tracks',
  '8 to 12 week sprints',
  'Direct VC & operator access',
];

const monoLabel: React.CSSProperties = {
  fontSize: '11.5px',
  fontWeight: 600,
  letterSpacing: '2.2px',
  color: '#6b7280',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
};

const CornerTick: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <span style={{ position: 'absolute', width: '14px', height: '14px', borderColor: '#cbd5e1', borderStyle: 'solid', borderWidth: 0, pointerEvents: 'none', ...style }} />
);

const ProgramApplyCard: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('Incubate & Validate (Idea to MVP)');
  const [submitted, setSubmitted] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '15px 18px', borderRadius: '10px',
    border: '1px solid #e5e7eb', fontSize: '14.5px', outline: 'none',
    backgroundColor: '#ffffff', color: '#0f172a',
  };

  return (
    <div style={{ position: 'relative', backgroundColor: '#ffffff', borderRadius: '20px', border: '1px solid #e8ecef', boxShadow: '0 30px 70px -20px rgba(15,23,42,0.18)', padding: '36px 34px 28px 34px' }}>
      <CornerTick style={{ top: '10px', left: '10px', borderTopWidth: '1.5px', borderLeftWidth: '1.5px', borderTopLeftRadius: '4px' }} />
      <CornerTick style={{ top: '10px', right: '10px', borderTopWidth: '1.5px', borderRightWidth: '1.5px', borderTopRightRadius: '4px' }} />
      <CornerTick style={{ bottom: '10px', left: '10px', borderBottomWidth: '1.5px', borderLeftWidth: '1.5px', borderBottomLeftRadius: '4px' }} />
      <CornerTick style={{ bottom: '10px', right: '10px', borderBottomWidth: '1.5px', borderRightWidth: '1.5px', borderBottomRightRadius: '4px' }} />

      {submitted ? (
        <div style={{ textAlign: 'center', padding: '40px 10px' }}>
          <span style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#e6f4f1', color: '#1a7b74', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', boxShadow: '0 0 32px rgba(26,123,116,0.25)' }}>
            <CheckCircle2 size={34} />
          </span>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0a0a0a', marginBottom: '10px' }}>Application received{ name ? `, ${name.split(' ')[0]}` : ''}!</h3>
          <p style={{ fontSize: '14.5px', color: '#5b6472', lineHeight: 1.6, marginBottom: '24px' }}>
            Our admissions and program leads will review your venture and reach out within 24 hours.
          </p>
          <button onClick={() => setSubmitted(false)} style={{ background: 'none', border: 'none', color: '#1a7b74', fontWeight: 700, fontSize: '14px', cursor: 'pointer', textDecoration: 'underline' }}>
            Submit another application
          </button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span style={monoLabel}>JOIN ADVISORY TRACK</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', fontWeight: 700, letterSpacing: '2px', color: '#1a7b74', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#1a7b74', boxShadow: '0 0 10px rgba(26,123,116,0.6)' }} /> COHORT OPEN
            </span>
          </div>

          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.3, letterSpacing: '-0.01em', marginBottom: '20px' }}>
            Apply for your growth stage.
          </h3>
          <div style={{ height: '1px', backgroundColor: '#eef1f4', marginBottom: '22px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <label style={{ ...monoLabel, display: 'block', marginBottom: '8px' }}>FOUNDER NAME <span style={{ color: '#1a7b74' }}>*</span></label>
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Rahul Raghav" style={inputStyle} />
            </div>
            <div>
              <label style={{ ...monoLabel, display: 'block', marginBottom: '8px' }}>WORK EMAIL <span style={{ color: '#1a7b74' }}>*</span></label>
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="rahul@venture.io" style={inputStyle} />
            </div>
            <div>
              <label style={{ ...monoLabel, display: 'block', marginBottom: '8px' }}>TARGET TRACK</label>
              <div style={{ position: 'relative' }}>
                <select value={program} onChange={(e) => setProgram(e.target.value)} style={{ ...inputStyle, appearance: 'none', WebkitAppearance: 'none', color: '#0f172a', cursor: 'pointer', paddingRight: '44px' }}>
                  <option value="Incubate & Validate (Idea to MVP)">Phase 01: Incubate & Validate (Idea to MVP)</option>
                  <option value="Accelerate & Scale (Seed to Pre-Series A)">Phase 02: Accelerate & Scale (Seed to Pre-Series A)</option>
                  <option value="Fundraise & Transaction Advisory">Phase 03: Fundraise & Transaction Advisory</option>
                  <option value="Enterprise & Global Scale">Phase 04: Enterprise & Global Scale</option>
                </select>
                <ChevronDown size={16} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }} />
              </div>
            </div>
            <button
              type="submit"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                backgroundColor: '#1a7b74', color: '#ffffff', border: 'none', borderRadius: '12px',
                padding: '18px 24px', fontWeight: 700, fontSize: '14px', letterSpacing: '2px',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                cursor: 'pointer', marginTop: '6px', boxShadow: '0 14px 30px -8px rgba(26,123,116,0.38)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#14635d'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1a7b74'; }}
            >
              <span>APPLY FOR PROGRAM</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
        <span style={{ ...monoLabel, fontSize: '10.5px' }}>• COHORT ADMISSIONS</span>
        <span style={{ ...monoLabel, fontSize: '10.5px' }}>REPLY &lt; 24H</span>
      </div>
    </div>
  );
};

const tracks = [
  {
    step: '01',
    title: 'Incubate & Validate',
    stage: 'Idea to MVP',
    icon: Layers,
    highlight: 'Turn concepts into vetted, compliant startups.',
    deliverables: [
      'Comprehensive Problem-Solution Validation & TAM Assessment',
      'MVP Scoping, Tech Stack & Architecture Roadmapping',
      'Entity Incorporation, Startup India & KSUM Recognition',
      'Initial Co-founder Agreements & Equity Split Structuring',
    ],
    duration: '8 Weeks Sprint',
  },
  {
    step: '02',
    title: 'Accelerate & Scale',
    stage: 'Seed to Pre-Series A',
    icon: Rocket,
    highlight: 'Achieve repeatable customer acquisition loops and unit economics.',
    deliverables: [
      'Growth Funnel Engineering & CAC/LTV Optimization',
      'Financial Modeling, 3-Year P&L & Cash Flow Forecasting',
      'Hiring Playbooks for Core Engineering & Sales Leaders',
      'Bi-weekly Strategic Review with Exited Founders',
    ],
    duration: '12 Weeks Sprint',
  },
  {
    step: '03',
    title: 'Fundraise & Transaction Advisory',
    stage: 'Institutional Series A / Debt',
    icon: TrendingUp,
    highlight: 'Investment banking advisory from pitch deck to term sheet execution.',
    deliverables: [
      'Institutional Grade Pitch Deck & Financial Teaser Creation',
      'Data Room Setup, Cap Table Cleanup & Valuation Advisory',
      'Direct Introductions to Curated Angel Syndicates & VCs',
      'Term Sheet Negotiation & Transaction Due Diligence Support',
    ],
    duration: 'Ongoing Syndicate',
  },
  {
    step: '04',
    title: 'Enterprise & Global Scale',
    stage: 'Series B & Cross-Border',
    icon: Globe,
    highlight: 'Expanding into GCC, US and Southeast Asian markets with compliance.',
    deliverables: [
      'Cross-border Entity Structuring (Delaware, Singapore, UAE)',
      'Transfer Pricing, International Tax & IP Protection',
      'Enterprise Sales Pipeline Setup & Channel Partner Onboarding',
      'M&A and Secondary Share Sale Advisory',
    ],
    duration: 'Custom Advisory',
  },
];

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onSelectProgram }) => {
  const [selectedTrack, setSelectedTrack] = useState(0);

  return (
    <>
      {/* Hero — grid backdrop, headline left, application card right */}
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
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <DotField dotRadius={1.5} dotSpacing={14} bulgeStrength={67} glowRadius={160} sparkle={false} waveAmplitude={0} />
        </div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1380px', margin: '0 auto', padding: '130px 48px 56px 48px' }}>
          <div className="programs-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '64px', alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1a7b74', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '24px' }}>
                STAGE-WISE ADVISORY PROGRAMS
              </div>
              <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.6rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '24px' }}>
                <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>Proven frameworks for</span><br />
                <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>every venture</span>{' '}
                <span style={{ color: '#0a0a0a' }}>inflection point.</span>
              </h1>
              <p style={{ fontSize: '17px', color: '#5b6472', maxWidth: '560px', lineHeight: 1.65, marginBottom: '32px' }}>
                Choose the specialized advisory track designed for your startup's exact phase of growth — from initial incubation to cross-border expansion.
              </p>
              <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                {trustPoints.map((t, idx) => (
                  <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#5b6472', fontWeight: 500 }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1a7b74', boxShadow: '0 0 10px rgba(26,123,116,0.5)' }} /> {t}
                  </span>
                ))}
              </div>
            </div>

            <ProgramApplyCard />
          </div>
        </div>

        <style>{`
          @media (max-width: 1100px) {
            .programs-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>

      {/* Tracks Selection Grid */}
      <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '40px 48px 100px 48px' }}>
        <div style={{ maxWidth: '1380px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            const isSelected = selectedTrack === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedTrack(idx)}
                style={{
                  borderRadius: '24px', padding: '28px 24px',
                  backgroundColor: isSelected ? '#f0fdfa' : '#ffffff',
                  border: isSelected ? '1.5px solid #14b8a6' : '1px solid #e2e8f0',
                  boxShadow: isSelected ? '0 20px 40px -10px rgba(18,86,81,0.16)' : '0 10px 24px -6px rgba(0,0,0,0.04)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={(e) => { if (!isSelected) { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = '#99f6e4'; } }}
                onMouseLeave={(e) => { if (!isSelected) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#e2e8f0'; } }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 800, color: isSelected ? '#1a7b74' : '#94a3b8', letterSpacing: '1px' }}>
                      PHASE {track.step}
                    </span>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: isSelected ? '#1a7b74' : '#e6f4f1', color: isSelected ? '#ffffff' : '#1a7b74', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={20} strokeWidth={2.2} />
                    </div>
                  </div>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>{track.title}</h3>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#16655e', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {track.stage} • {track.duration}
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#52606d', lineHeight: 1.5, marginBottom: '20px' }}>{track.highlight}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {track.deliverables.map((d, dIdx) => (
                      <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12.5px', color: '#334155', lineHeight: 1.4 }}>
                        <span style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#ccfbf1', color: '#1a7b74', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                          <Check size={10} strokeWidth={3} />
                        </span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); onSelectProgram?.(track.title); }}
                  className={isSelected ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', padding: '11px', fontSize: '13.5px', borderRadius: '12px', backgroundColor: isSelected ? '#1a7b74' : undefined }}
                >
                  <span>Apply for Phase {track.step}</span><ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
};
