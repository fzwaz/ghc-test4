import React from 'react';
import { Download, FileSpreadsheet, FileText } from 'lucide-react';

interface ResourcesSectionProps {
  onDownloadResource?: (title: string) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ onDownloadResource }) => {
  const resources = [
    {
      type: 'FINANCIAL MODEL',
      icon: FileSpreadsheet,
      title: 'Series A VC Financial Model & 3-Year Forecasting Template',
      desc: 'Institutional-grade Excel & Google Sheets template with unit economics, cohort retention, and burn multiple calculators.',
      downloads: '1,420+ Downloads',
    },
    {
      type: 'DUE DILIGENCE',
      icon: FileText,
      title: 'Institutional Investor Data Room & Cap Table Checklist',
      desc: 'Complete 40-point checklist required by Tier-1 venture funds before issuing formal term sheets.',
      downloads: '2,150+ Downloads',
    },
    {
      type: 'REGULATORY GUIDE',
      icon: FileText,
      title: 'Startup India Tax Exemption (Section 80-IAC) & KSUM Grants Manual',
      desc: 'Step-by-step compliance roadmap to secure 3-year tax holidays, DPIIT recognition, and seed grants.',
      downloads: '3,800+ Downloads',
    },
  ];

  return (
    <section
      id="resources"
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
            FOUNDER KNOWLEDGE VAULT
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
            Battle-tested frameworks &{' '}
            <span style={{ color: '#1a7b74' }}>investor toolkits.</span>
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
            Download free templates, due diligence playbooks, and valuation models curated by senior investment bankers.
          </p>
        </div>

        {/* 3 Resource Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {resources.map((res, idx) => {
            const Icon = res.icon;

            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  borderRadius: '24px',
                  padding: '30px 26px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  boxShadow: '0 10px 28px -6px rgba(18, 86, 81, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(18, 86, 81, 0.14)';
                  e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 28px -6px rgba(18, 86, 81, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.9)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '800',
                        letterSpacing: '1px',
                        color: '#125651',
                        backgroundColor: '#e6f4f1',
                        padding: '4px 10px',
                        borderRadius: '6px',
                      }}
                    >
                      {res.type}
                    </span>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        backgroundColor: '#f8fafc',
                        color: '#125651',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: '800',
                      color: '#0f172a',
                      lineHeight: '1.35',
                      marginBottom: '12px',
                    }}
                  >
                    {res.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '13.5px',
                      color: '#52606d',
                      lineHeight: '1.55',
                      marginBottom: '24px',
                    }}
                  >
                    {res.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: '18px',
                  }}
                >
                  <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>
                    {res.downloads}
                  </span>

                  <button
                    onClick={() => onDownloadResource?.(res.title)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'none',
                      border: 'none',
                      color: '#125651',
                      fontWeight: '700',
                      fontSize: '13.5px',
                      cursor: 'pointer',
                    }}
                  >
                    <span>Download Toolkit</span>
                    <Download size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
