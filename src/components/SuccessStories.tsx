import React from 'react';
import { Quote, TrendingUp, Award } from 'lucide-react';

export const SuccessStories: React.FC = () => {
  const stories = [
    {
      founder: 'Rohan Kurien',
      role: 'Co-Founder & CEO',
      company: 'PayFlow Technologies',
      raised: '₹14.5 Cr Series A',
      quote:
        'GHC Growth Lab restructured our financial unit economics and connected us directly with institutional venture funds in Mumbai and Bangalore. We closed our round in under 60 days.',
      metrics: '3.8x ARR Growth in 12 Mo',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80',
    },
    {
      founder: 'Meera Nambiar',
      role: 'Founder',
      company: 'Aura Health Diagnostics',
      raised: '₹8 Cr Seed Round',
      quote:
        'From regulatory approvals under KSUM/Startup India to pitching top angel networks, the mentorship and investment banking advisory from GHC gave our team unmatched clarity.',
      metrics: '45,000+ Active Patients',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop&q=80',
    },
    {
      founder: 'Aditya Varma',
      role: 'Founder & CTO',
      company: 'LogixAI Logistics',
      raised: '₹22 Cr Pre-Series A',
      quote:
        'The 1-on-1 sessions with exited tech founders pushed our product architecture and sales conversion rates to top-quartile enterprise benchmarks. Indispensable partners.',
      metrics: '120+ Enterprise Clients',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#f7faf9',
        padding: '90px 48px 100px 48px',
        overflow: 'hidden',
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
            PORTFOLIO HIGHLIGHTS
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
            Built by founders,{' '}
            <span style={{ color: '#1a7b74' }}>validated by results.</span>
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
            Join hundreds of visionary teams that transitioned from early concept to venture-backed market leadership.
          </p>
        </div>

        {/* 3 Story Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {stories.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                borderRadius: '24px',
                padding: '32px 28px',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 12px 32px -8px rgba(18, 86, 81, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(18, 86, 81, 0.16)';
                e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 32px -8px rgba(18, 86, 81, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.9)';
              }}
            >
              <div>
                {/* Funding Badge & Metric */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      backgroundColor: '#e6f4f1',
                      color: '#125651',
                      fontSize: '12px',
                      fontWeight: '800',
                      padding: '5px 12px',
                      borderRadius: '8px',
                    }}
                  >
                    <Award size={13} /> {item.raised}
                  </span>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#059669',
                    }}
                  >
                    <TrendingUp size={13} /> {item.metrics}
                  </span>
                </div>

                {/* Quote Icon */}
                <Quote size={28} style={{ color: '#99f6e4', marginBottom: '12px', opacity: 0.8 }} />

                {/* Quote Text */}
                <p
                  style={{
                    fontSize: '14.5px',
                    color: '#334155',
                    lineHeight: '1.6',
                    fontStyle: 'normal',
                    marginBottom: '28px',
                  }}
                >
                  "{item.quote}"
                </p>
              </div>

              {/* Founder info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '18px',
                }}
              >
                <img
                  src={item.avatar}
                  alt={item.founder}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #ccfbf1',
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a' }}>
                    {item.founder}
                  </h4>
                  <p style={{ fontSize: '12px', color: '#64748b' }}>
                    {item.role}, <strong>{item.company}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
