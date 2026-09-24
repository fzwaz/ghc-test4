import React, { useState } from 'react';
import { Layers, Rocket, TrendingUp, Globe, Check, ArrowRight } from 'lucide-react';

interface ProgramsFrameworkProps {
  onSelectProgram?: (programName: string) => void;
}

export const ProgramsFramework: React.FC<ProgramsFrameworkProps> = ({ onSelectProgram }) => {
  const [selectedTrack, setSelectedTrack] = useState(0);

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

  return (
    <section
      id="framework"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '90px 48px 100px 48px',
        overflow: 'hidden',
        borderTop: '1px solid rgba(226, 232, 240, 0.6)',
      }}
    >
      <div
        style={{
          maxWidth: '1380px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#e6f4f1',
              color: '#1b736b',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            STAGE-WISE ADVISORY PROGRAMS
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            A proven framework for every{' '}
            <span style={{ color: '#1a7b74' }}>venture inflection point.</span>
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: '#52606d',
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            Choose the specialized advisory track designed for your startup's exact phase of growth.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            const isSelected = selectedTrack === idx;

            return (
              <div
                key={idx}
                onClick={() => setSelectedTrack(idx)}
                style={{
                  borderRadius: '24px',
                  padding: '28px 24px',
                  backgroundColor: isSelected ? '#f0fdfa' : '#ffffff',
                  border: isSelected ? '1.5px solid #14b8a6' : '1px solid #e2e8f0',
                  boxShadow: isSelected
                    ? '0 20px 40px -10px rgba(18, 86, 81, 0.16)'
                    : '0 10px 24px -6px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = '#99f6e4';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }
                }}
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: '800',
                        color: isSelected ? '#125651' : '#94a3b8',
                        letterSpacing: '1px',
                      }}
                    >
                      PHASE {track.step}
                    </span>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        backgroundColor: isSelected ? '#125651' : '#e6f4f1',
                        color: isSelected ? '#ffffff' : '#125651',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Icon size={20} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Title & Stage */}
                  <h3
                    style={{
                      fontSize: '19px',
                      fontWeight: '800',
                      color: '#0f172a',
                      marginBottom: '4px',
                    }}
                  >
                    {track.title}
                  </h3>
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#16655e',
                      marginBottom: '14px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {track.stage} • {track.duration}
                  </div>

                  <p
                    style={{
                      fontSize: '13.5px',
                      color: '#52606d',
                      lineHeight: '1.5',
                      marginBottom: '20px',
                    }}
                  >
                    {track.highlight}
                  </p>

                  {/* Deliverables List */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {track.deliverables.map((d, dIdx) => (
                      <li
                        key={dIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '12.5px',
                          color: '#334155',
                          lineHeight: '1.4',
                        }}
                      >
                        <div
                          style={{
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            backgroundColor: '#ccfbf1',
                            color: '#125651',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        >
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProgram?.(track.title);
                  }}
                  className={isSelected ? 'btn-primary' : 'btn-secondary'}
                  style={{
                    width: '100%',
                    padding: '11px',
                    fontSize: '13.5px',
                    borderRadius: '12px',
                  }}
                >
                  <span>Apply for Phase {track.step}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
