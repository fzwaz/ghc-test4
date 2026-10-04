import React, { useState, useEffect } from 'react';
import {
  Download,
  FileSpreadsheet,
  FileText,
  Layers,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Search,
  Share2,
  X,
  FileDown,
  BarChart3,
  PieChart,
  ShieldCheck,
  Landmark,
  SlidersHorizontal,
  Users,
  Rocket,
  UserCheck,
  Building2,
} from 'lucide-react';
import { InsightsSection } from '../components/InsightsSection';
import { CtaBanner } from '../components/CtaBanner';

interface ResourcesPageProps {
  onReadArticle?: () => void;
  onTalkToTeam?: () => void;
  onReserveSeat?: (eventTitle: string) => void;
}

const trustPoints = [
  '7,300+ playbook downloads',
  'Tier-1 VC approved',
  '100% free for founders',
];

const monoLabel: React.CSSProperties = {
  fontSize: '11.5px',
  fontWeight: 600,
  letterSpacing: '2.2px',
  color: '#6b7280',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
};

const CornerTick: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <span
    style={{
      position: 'absolute',
      width: '14px',
      height: '14px',
      borderColor: '#cbd5e1',
      borderStyle: 'solid',
      borderWidth: 0,
      pointerEvents: 'none',
      ...style,
    }}
  />
);

// 4 Real Template Suites corresponding to the 4 folders in /public/templete
export interface TemplateFile {
  name: string;
  filename: string;
  path: string;
  format: 'Excel' | 'PDF';
  size: string;
}

export interface TemplateSuite {
  id: string;
  badge: string;
  type: string;
  category: string;
  title: string;
  description: string;
  formatSummary: string;
  downloads: string;
  files: TemplateFile[];
}

const realTemplateSuites: TemplateSuite[] = [
  {
    id: 'startup-valuation-templates',
    badge: 'VALUATION',
    type: 'STARTUP VALUATION SUITE',
    category: 'Valuation & Finance',
    title: 'Startup Valuation Models & Analysis Templates',
    description:
      '8 institutional-grade valuation models including Discounted Cash Flow (DCF), VC Valuation Method, First Chicago Scenario Analysis, Berkus Method, and Comparable Company Multiples.',
    formatSummary: '8 Excel (.xlsx) Models',
    downloads: '4,850+ Downloads',
    files: [
      {
        name: 'DCF Model Template',
        filename: 'DCF_Model_Template_V2.xlsx',
        path: '/templete/Startup Valuation Templates/DCF_Model_Template_V2.xlsx',
        format: 'Excel',
        size: '168 KB',
      },
      {
        name: 'VC Method Valuation Model',
        filename: 'VC Method Valuation_V2.xlsx',
        path: '/templete/Startup Valuation Templates/VC Method Valuation_V2.xlsx',
        format: 'Excel',
        size: '167 KB',
      },
      {
        name: 'First Chicago Scenario Method',
        filename: 'First Chicago Method_V2.xlsx',
        path: '/templete/Startup Valuation Templates/First Chicago Method_V2.xlsx',
        format: 'Excel',
        size: '160 KB',
      },
      {
        name: 'Berkus Valuation Template',
        filename: 'Berkus_Valuation_Template_V2.xlsx',
        path: '/templete/Startup Valuation Templates/Berkus_Valuation_Template_V2.xlsx',
        format: 'Excel',
        size: '158 KB',
      },
      {
        name: 'Comparable Company Analysis (CCA)',
        filename: 'Comparable_Company_Analysis_Template_V2.xlsx',
        path: '/templete/Startup Valuation Templates/Comparable_Company_Analysis_Template_V2.xlsx',
        format: 'Excel',
        size: '161 KB',
      },
      {
        name: 'Precedent Transaction Analysis',
        filename: 'Precedent_Transaction_Analysis_Template_V2.xlsx',
        path: '/templete/Startup Valuation Templates/Precedent_Transaction_Analysis_Template_V2.xlsx',
        format: 'Excel',
        size: '159 KB',
      },
      {
        name: 'Scorecard Valuation Template',
        filename: 'Scorecard_Valuation_Template_V2.xlsx',
        path: '/templete/Startup Valuation Templates/Scorecard_Valuation_Template_V2.xlsx',
        format: 'Excel',
        size: '159 KB',
      },
      {
        name: 'Risk Factor Summation Template',
        filename: 'Risk_Factor_Summation_Template_V2.xlsx',
        path: '/templete/Startup Valuation Templates/Risk_Factor_Summation_Template_V2.xlsx',
        format: 'Excel',
        size: '158 KB',
      },
    ],
  },
  {
    id: 'legal-drafting-templates',
    badge: 'LEGAL',
    type: 'LEGAL & DRAFTING SUITE',
    category: 'Legal & Governance',
    title: 'Legal Drafting & Investment Agreement Templates',
    description:
      'Definitive founder and investor legal contracts including Share Subscription Agreement (SSA), Shareholders Agreement (SHA), Term Sheet Template, Share Purchase Agreement (SPA), and Non-Disclosure Agreement (NDA).',
    formatSummary: '5 Legal Agreements (PDF)',
    downloads: '3,920+ Downloads',
    files: [
      {
        name: 'Standard Term Sheet Template',
        filename: 'Template_Termsheet.pdf',
        path: '/templete/Legal Drafting Templates/Template_Termsheet.pdf',
        format: 'PDF',
        size: '2.1 MB',
      },
      {
        name: 'Share Subscription Agreement (SSA)',
        filename: 'SSA_Template_final.pdf',
        path: '/templete/Legal Drafting Templates/SSA_Template_final.pdf',
        format: 'PDF',
        size: '1.5 MB',
      },
      {
        name: 'Shareholders Agreement (SHA)',
        filename: 'Template_Shareholders__Agreement.pdf',
        path: '/templete/Legal Drafting Templates/Template_Shareholders__Agreement.pdf',
        format: 'PDF',
        size: '1.4 MB',
      },
      {
        name: 'Share Purchase Agreement (SPA)',
        filename: 'Template_SPA_Final.pdf',
        path: '/templete/Legal Drafting Templates/Template_SPA_Final.pdf',
        format: 'PDF',
        size: '724 KB',
      },
      {
        name: 'Standard NDA (Non-Disclosure Agreement)',
        filename: 'Template_ NDA.pdf',
        path: '/templete/Legal Drafting Templates/Template_ NDA.pdf',
        format: 'PDF',
        size: '755 KB',
      },
    ],
  },
  {
    id: 'startup-mis-templates',
    badge: 'MIS',
    type: 'FINANCIAL MIS & REPORTING',
    category: 'MIS & Operations',
    title: 'Startup MIS & Financial Reporting Templates',
    description:
      '5 industry-tailored Management Information System (MIS) monthly reporting models for SaaS, D2C / E-Commerce, Manufacturing, Services, and Restaurant / F&B startups.',
    formatSummary: '5 Industry MIS Models (Excel)',
    downloads: '3,410+ Downloads',
    files: [
      {
        name: 'SaaS Startup MIS Model',
        filename: 'Startup_MIS Template SaaS_V2.xlsx',
        path: '/templete/Startup MIS Templates/Startup_MIS Template SaaS_V2.xlsx',
        format: 'Excel',
        size: '206 KB',
      },
      {
        name: 'D2C & E-Commerce MIS Model',
        filename: 'Startup_MIS Template D2C_V2.xlsx',
        path: '/templete/Startup MIS Templates/Startup_MIS Template D2C_V2.xlsx',
        format: 'Excel',
        size: '205 KB',
      },
      {
        name: 'Manufacturing Startup MIS Model',
        filename: 'Startup_MIS Template Manufacturing_V2.xlsx',
        path: '/templete/Startup MIS Templates/Startup_MIS Template Manufacturing_V2.xlsx',
        format: 'Excel',
        size: '206 KB',
      },
      {
        name: 'Services Startup MIS Model',
        filename: 'Startup_MIS Template Service_V2.xlsx',
        path: '/templete/Startup MIS Templates/Startup_MIS Template Service_V2.xlsx',
        format: 'Excel',
        size: '204 KB',
      },
      {
        name: 'Restaurant & F&B Startup MIS Model',
        filename: 'Startup_MIS Template Restaurant_V2.xlsx',
        path: '/templete/Startup MIS Templates/Startup_MIS Template Restaurant_V2.xlsx',
        format: 'Excel',
        size: '205 KB',
      },
    ],
  },
  {
    id: 'startup-metrics-templates',
    badge: 'METRICS',
    type: 'UNIT ECONOMICS & METRICS',
    category: 'Metrics & Runway',
    title: 'Startup Metrics & Unit Economics Templates',
    description:
      'Core financial health models including Customer Lifetime Value (CLTV) vs. CAC payback analysis and 36-Month Dynamic Cash Runway & Burn Multiple forecasting planner.',
    formatSummary: '2 Financial Models (Excel)',
    downloads: '5,200+ Downloads',
    files: [
      {
        name: 'CLTV vs CAC Unit Economics Model',
        filename: 'CLTV_vs_CAC_Template_V2.xlsx',
        path: '/templete/Startup Metrics Templates/CLTV_vs_CAC_Template_V2.xlsx',
        format: 'Excel',
        size: '172 KB',
      },
      {
        name: 'Cash Runway & Burn Forecast Model',
        filename: 'Cash Runway Model Template_V2.xlsx',
        path: '/templete/Startup Metrics Templates/Cash Runway Model Template_V2.xlsx',
        format: 'Excel',
        size: '188 KB',
      },
    ],
  },
];

// Summary Feature blocks
const overviewRowStrips = [
  {
    number: '01',
    title: "What You'll Find",
    desc: 'Curated templates and models built by finance professionals and legal experts.',
    wedgeBg: 'linear-gradient(135deg, #dcf5ed 0%, #e8f9f3 100%)',
    numColor: '#0d9488',
    iconBg: '#e6f7f2',
    iconColor: '#0d9488',
    items: [
      {
        title: 'Startup Valuation Models',
        desc: 'DCF, VC Method, First Chicago, Berkus & Scorecard models.',
        icon: FileText,
      },
      {
        title: 'Legal Drafting & Agreements',
        desc: 'Standard Term Sheets, SSA, SHA, SPA and mutual NDAs.',
        icon: FileText,
      },
      {
        title: 'Industry MIS Templates',
        desc: 'Tailored monthly MIS reporting for SaaS, D2C & Manufacturing.',
        icon: BarChart3,
      },
      {
        title: 'Metrics & Cash Runway',
        desc: 'Dynamic CLTV vs CAC payback and 36-month burn multiple planner.',
        icon: PieChart,
      },
    ],
  },
  {
    number: '02',
    title: 'Why These Templates',
    desc: 'Engineered for maximum investor clarity, legal compliance and analytical precision.',
    wedgeBg: 'linear-gradient(135deg, #e0f2fe 0%, #eef8ff 100%)',
    numColor: '#0284c7',
    iconBg: '#e0f2fe',
    iconColor: '#0284c7',
    items: [
      {
        title: 'Real-World Tested',
        desc: 'Battle-tested across $50M+ closed venture and M&A transactions.',
        icon: ShieldCheck,
      },
      {
        title: 'Built by Investment Bankers',
        desc: 'Crafted by institutional finance analysts and venture operators.',
        icon: Landmark,
      },
      {
        title: 'Fully Customizable',
        desc: 'Open Excel (.xlsx) with formulas and standardized PDF drafts.',
        icon: SlidersHorizontal,
      },
      {
        title: 'Tier-1 VC & Angel Ready',
        desc: 'Format expected by top venture funds, syndicates and angels.',
        icon: Layers,
      },
    ],
  },
  {
    number: '03',
    title: 'Who This Is For',
    desc: 'Standardized resources for every stakeholder in the venture ecosystem.',
    wedgeBg: 'linear-gradient(135deg, #edf7e2 0%, #f4faed 100%)',
    numColor: '#16a34a',
    iconBg: '#ecf8e8',
    iconColor: '#16a34a',
    items: [
      {
        title: 'Early-Stage & Seed Founders',
        desc: 'Establishing initial valuations, term sheets and clean governance.',
        icon: Users,
      },
      {
        title: 'Growth Startups & Scaleups',
        desc: 'Institutional Series A/B financial reporting & cash runway tracking.',
        icon: Rocket,
      },
      {
        title: 'Fractional CFOs & Advisors',
        desc: 'Standardizing client financial models and monthly MIS reporting.',
        icon: UserCheck,
      },
      {
        title: 'Accelerators & Incubators',
        desc: 'Providing portfolio startups with investor-ready toolkits.',
        icon: Building2,
      },
    ],
  },
];

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onReadArticle,
  onTalkToTeam,
  onReserveSeat,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [pendingDownload, setPendingDownload] = useState<TemplateFile | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);
  const [expandedSuiteId, setExpandedSuiteId] = useState<string | null>(null);

  // Email form states
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  // Check if email already exists in localStorage on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('ghc_user_email');
    if (savedEmail) {
      setUserEmail(savedEmail);
    }
  }, []);

  // Automatic download helper
  const triggerBrowserDownload = (file: TemplateFile) => {
    const link = document.createElement('a');
    link.href = encodeURI(file.path);
    link.download = file.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadToast(file.name);
    setTimeout(() => {
      setDownloadToast(null);
    }, 4000);
  };

  // Main Download Trigger: Asks for email if not provided, otherwise downloads immediately
  const handleInitiateDownload = (file: TemplateFile) => {
    const currentStoredEmail = userEmail || localStorage.getItem('ghc_user_email');
    if (currentStoredEmail) {
      // User has already provided email previously — automatic download!
      triggerBrowserDownload(file);
    } else {
      // Open modal to capture email once
      setPendingDownload(file);
      setIsEmailModalOpen(true);
    }
  };

  // Modal Submit: Save email & trigger the pending download automatically
  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputEmail.trim()) return;

    localStorage.setItem('ghc_user_email', inputEmail.trim());
    localStorage.setItem('ghc_user_name', inputName.trim());
    setUserEmail(inputEmail.trim());
    setIsEmailModalOpen(false);

    if (pendingDownload) {
      triggerBrowserDownload(pendingDownload);
      setPendingDownload(null);
    }
  };

  const categories = ['All', 'Valuation & Finance', 'Legal & Governance', 'MIS & Operations', 'Metrics & Runway'];

  const filteredSuites = realTemplateSuites.filter((suite) => {
    const matchesCat = activeCategory === 'All' || suite.category === activeCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      suite.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      suite.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      suite.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      suite.files.some((f) => f.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <>
      {/* 1. Hero — grid backdrop, headline left, download card right */}
      <section
        data-hero
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage:
              'linear-gradient(rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.055) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage:
              'radial-gradient(ellipse 130% 110% at 50% 42%, black 62%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 130% 110% at 50% 42%, black 62%, transparent 100%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '122px 48px 20px 48px',
          }}
        >
          <div
            className="resources-hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: '64px',
              alignItems: 'center',
              marginBottom: '32px',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#e6f4f1',
                  color: '#1a7b74',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                }}
              >
                FOUNDER KNOWLEDGE VAULT
              </div>
              <h1
                style={{
                  fontSize: 'clamp(2.8rem, 5vw, 4.6rem)',
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                }}
              >
                <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>
                  Battle-tested frameworks &
                </span>
                <br />
                <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>
                  investor-ready
                </span>{' '}
                <span style={{ color: '#0a0a0a' }}>toolkits.</span>
              </h1>
              <p
                style={{
                  fontSize: '17px',
                  color: '#5b6472',
                  maxWidth: '560px',
                  lineHeight: 1.65,
                  marginBottom: '32px',
                }}
              >
                Download free financial models, legal drafting contracts, industry MIS templates, and
                valuation playbooks curated by senior investment bankers and exited operators.
              </p>
              <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                {trustPoints.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      color: '#5b6472',
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#1a7b74',
                        boxShadow: '0 0 10px rgba(26,123,116,0.5)',
                      }}
                    />{' '}
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Hero Download Card */}
            <div
              style={{
                position: 'relative',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '1px solid #e8ecef',
                boxShadow: '0 30px 70px -20px rgba(15,23,42,0.18)',
                padding: '36px 34px 28px 34px',
              }}
            >
              <CornerTick style={{ top: '10px', left: '10px', borderTopWidth: '1.5px', borderLeftWidth: '1.5px', borderTopLeftRadius: '4px' }} />
              <CornerTick style={{ top: '10px', right: '10px', borderTopWidth: '1.5px', borderRightWidth: '1.5px', borderTopRightRadius: '4px' }} />
              <CornerTick style={{ bottom: '10px', left: '10px', borderBottomWidth: '1.5px', borderLeftWidth: '1.5px', borderBottomLeftRadius: '4px' }} />
              <CornerTick style={{ bottom: '10px', right: '10px', borderBottomWidth: '1.5px', borderRightWidth: '1.5px', borderBottomRightRadius: '4px' }} />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={monoLabel}>INSTANT ACCESS VAULT</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', fontWeight: 700, letterSpacing: '2px', color: '#1a7b74', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#1a7b74', boxShadow: '0 0 10px rgba(26,123,116,0.6)' }} /> 4 SUITES READY
                </span>
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.3, letterSpacing: '-0.01em', marginBottom: '16px' }}>
                Get the verified founder toolkits.
              </h3>
              <p style={{ fontSize: '14px', color: '#5b6472', lineHeight: 1.55, marginBottom: '22px' }}>
                Access our 4 core template suites: Valuation Models, Legal Drafting, Monthly MIS, and Cash Runway.
              </p>

              <button
                onClick={() => {
                  document.getElementById('available-templates')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#1a7b74',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '16px 22px',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '1px',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                  cursor: 'pointer',
                  boxShadow: '0 14px 30px -8px rgba(26,123,116,0.38)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#14635d';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a7b74';
                }}
              >
                <span>EXPLORE ALL 4 TEMPLATE SUITES</span>
                <ArrowRight size={18} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
                <span style={{ ...monoLabel, fontSize: '10.5px' }}>• 100% FREE FOR FOUNDERS</span>
                <span style={{ ...monoLabel, fontSize: '10.5px' }}>INSTANT DOWNLOAD</span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 1100px) {
            .resources-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>

      {/* 2. Structured Overview Sections: What You'll Find, Why These Templates, Who This Is For */}
      <section
        style={{
          width: '100%',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #edf2f0',
          padding: '48px 48px 56px 48px',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          {overviewRowStrips.map((strip, sIdx) => (
            <div
              key={sIdx}
              className="overview-strip-row"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2ece8',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)',
                display: 'grid',
                gridTemplateColumns: '275px 1fr auto',
                alignItems: 'stretch',
                transition: 'all 0.25s ease',
              }}
            >
              {/* Left Wedge Banner with Slanted Divider */}
              <div
                className="overview-wedge-banner"
                style={{
                  background: strip.wedgeBg,
                  clipPath: 'polygon(0 0, 100% 0, calc(100% - 24px) 100%, 0 100%)',
                  padding: '24px 34px 24px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 700,
                    color: strip.numColor,
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                    marginBottom: '6px',
                  }}
                >
                  {strip.number}
                </span>
                <h2
                  style={{
                    fontSize: '20px',
                    fontWeight: 800,
                    color: '#0f172a',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    marginBottom: '6px',
                  }}
                >
                  {strip.title}
                </h2>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#475569',
                    lineHeight: 1.45,
                    maxWidth: '220px',
                  }}
                >
                  {strip.desc}
                </p>
              </div>

              {/* Middle 4-item horizontal grid */}
              <div
                className="overview-strip-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                  gap: '18px',
                  padding: '20px 24px',
                  alignItems: 'center',
                }}
              >
                {strip.items.map((item, itemIdx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={itemIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '11px',
                          backgroundColor: strip.iconBg,
                          color: strip.iconColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        <ItemIcon size={19} strokeWidth={2.2} />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: '13.5px',
                            fontWeight: 700,
                            color: '#0f172a',
                            lineHeight: 1.35,
                            marginBottom: '3px',
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            fontSize: '11.5px',
                            color: '#64748b',
                            lineHeight: 1.45,
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Far-Right Circular Arrow Button */}
              <div
                className="overview-strip-arrow-wrapper"
                style={{
                  paddingRight: '24px',
                  paddingLeft: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <button
                  onClick={() => {
                    document.getElementById('available-templates')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="strip-arrow-btn"
                  title="Explore Templates"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1.5px solid #cbd5e1',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#475569',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .overview-strip-row:hover {
            box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.08) !important;
            border-color: #cbd5e1 !important;
          }
          .strip-arrow-btn:hover {
            background-color: #0f172a !important;
            border-color: #0f172a !important;
            color: #ffffff !important;
            transform: translateX(3px);
          }
          @media (max-width: 1280px) {
            .overview-strip-row {
              grid-template-columns: 240px 1fr auto !important;
            }
          }
          @media (max-width: 1100px) {
            .overview-strip-row {
              grid-template-columns: 1fr !important;
            }
            .overview-wedge-banner {
              clip-path: none !important;
              padding: 20px 24px !important;
            }
            .overview-strip-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              gap: 20px !important;
            }
            .overview-strip-arrow-wrapper {
              display: none !important;
            }
          }
          @media (max-width: 640px) {
            .overview-strip-grid {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
          }
        `}</style>
      </section>

      {/* 3. Available Templates Section featuring the 4 Real Template Suites */}
      <section
        id="available-templates"
        style={{
          width: '100%',
          backgroundColor: '#f7faf9',
          padding: '64px 48px 100px 48px',
        }}
      >
        <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
          {/* Header row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
              marginBottom: '32px',
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  letterSpacing: '-0.02em',
                }}
              >
                Available Templates{' '}
                <span style={{ color: '#1a7b74', fontSize: '20px' }}>
                  ({filteredSuites.length} Suites · 20 Files)
                </span>
              </h2>
              <p
                style={{
                  fontSize: '14.5px',
                  color: '#64748b',
                  marginTop: '4px',
                }}
              >
                Download verified valuation models, legal contracts, MIS systems, and cash runway planners.
              </p>
            </div>

            {/* Search Box */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '9999px',
                padding: '10px 18px',
                width: '100%',
                maxWidth: '340px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              }}
            >
              <Search size={17} style={{ color: '#1a7b74', flexShrink: 0 }} />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models & agreements..."
                style={{
                  border: 'none',
                  outline: 'none',
                  fontSize: '14px',
                  width: '100%',
                  background: 'transparent',
                  color: '#0f172a',
                }}
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '36px',
            }}
          >
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    backgroundColor: active ? '#1a7b74' : '#ffffff',
                    color: active ? '#ffffff' : '#475569',
                    border: active ? '1px solid #1a7b74' : '1px solid #e2e8f0',
                    boxShadow: active
                      ? '0 4px 14px rgba(26, 123, 116, 0.28)'
                      : '0 2px 4px rgba(0,0,0,0.02)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 4 Template Suites Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '28px',
            }}
          >
            {filteredSuites.map((suite) => {
              const isExpanded = expandedSuiteId === suite.id;
              const primaryFile = suite.files[0];

              return (
                <div
                  key={suite.id}
                  className="template-card-item"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '22px',
                    border: '1px solid #e2e8f0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow:
                      '0 10px 28px -6px rgba(18, 86, 81, 0.05), 0 2px 6px rgba(0,0,0,0.02)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div>
                    {/* Top Graphic Header Banner */}
                    <div
                      style={{
                        position: 'relative',
                        height: '150px',
                        background:
                          'linear-gradient(135deg, #0d5f59 0%, #1a7b74 60%, #2ea096 100%)',
                        padding: '22px 24px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Decorative document sheet icon in background */}
                      <div
                        style={{
                          position: 'absolute',
                          right: '-20px',
                          bottom: '-20px',
                          width: '160px',
                          height: '160px',
                          borderRadius: '50%',
                          border: '1.5px solid rgba(255,255,255,0.15)',
                          pointerEvents: 'none',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          right: '24px',
                          bottom: '16px',
                          width: '74px',
                          height: '92px',
                          backgroundColor: 'rgba(255,255,255,0.12)',
                          backdropFilter: 'blur(6px)',
                          borderRadius: '8px',
                          border: '1px solid rgba(255,255,255,0.25)',
                          display: 'flex',
                          flexDirection: 'column',
                          padding: '10px 8px',
                          gap: '6px',
                          transform: 'rotate(6deg)',
                          pointerEvents: 'none',
                        }}
                      >
                        <div style={{ width: '45%', height: '4px', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '2px' }} />
                        <div style={{ width: '80%', height: '3px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '2px' }} />
                        <div style={{ width: '65%', height: '3px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '2px' }} />
                        <div style={{ width: '75%', height: '3px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '2px' }} />
                      </div>

                      {/* Header top row */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          position: 'relative',
                          zIndex: 2,
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.22)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255,255,255,0.35)',
                            color: '#ffffff',
                            fontSize: '11px',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            padding: '4px 10px',
                            borderRadius: '6px',
                          }}
                        >
                          {suite.badge}
                        </span>
                        <span
                          style={{
                            fontSize: '11px',
                            color: 'rgba(255,255,255,0.9)',
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                          }}
                        >
                          GHC GROWTH LAB
                        </span>
                      </div>

                      {/* Header title */}
                      <div style={{ position: 'relative', zIndex: 2 }}>
                        <div
                          style={{
                            fontSize: '17px',
                            fontWeight: 800,
                            color: '#ffffff',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          Investor-Ready Template Suite
                        </div>
                        <div
                          style={{
                            fontSize: '12px',
                            color: '#d1fae5',
                            marginTop: '2px',
                          }}
                        >
                          {suite.formatSummary} · Verified Standard
                        </div>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div style={{ padding: '24px 24px 16px 24px' }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          fontSize: '11.5px',
                          fontWeight: 700,
                          color: '#1a7b74',
                          letterSpacing: '0.8px',
                          textTransform: 'uppercase',
                          marginBottom: '8px',
                        }}
                      >
                        {suite.type}
                      </div>

                      <h3
                        style={{
                          fontSize: '18px',
                          fontWeight: 800,
                          color: '#0f172a',
                          lineHeight: 1.3,
                          marginBottom: '10px',
                        }}
                      >
                        {suite.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '13.5px',
                          color: '#5b6472',
                          lineHeight: 1.55,
                          marginBottom: '18px',
                        }}
                      >
                        {suite.description}
                      </p>

                      {/* Files Included Dropdown List Toggle */}
                      <div
                        style={{
                          backgroundColor: '#f8faf9',
                          borderRadius: '12px',
                          border: '1px solid #e5ece9',
                          padding: '12px 16px',
                          marginBottom: '16px',
                        }}
                      >
                        <div
                          onClick={() => setExpandedSuiteId(isExpanded ? null : suite.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            userSelect: 'none',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '12.5px',
                              fontWeight: 700,
                              color: '#0f172a',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                            }}
                          >
                            <Layers size={14} style={{ color: '#1a7b74' }} />
                            Included Templates ({suite.files.length} Files)
                          </span>
                          <span
                            style={{
                              fontSize: '12px',
                              color: '#1a7b74',
                              fontWeight: 600,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            {isExpanded ? 'Hide' : 'View All'}
                            <ChevronDown
                              size={14}
                              style={{
                                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.2s ease',
                              }}
                            />
                          </span>
                        </div>

                        {/* Expanded Individual Files List with Download Buttons */}
                        {isExpanded && (
                          <div
                            style={{
                              marginTop: '12px',
                              paddingTop: '10px',
                              borderTop: '1px solid #e2e8f0',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '8px',
                            }}
                          >
                            {suite.files.map((f, fIdx) => (
                              <div
                                key={fIdx}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  padding: '7px 10px',
                                  backgroundColor: '#ffffff',
                                  borderRadius: '8px',
                                  border: '1px solid #eef2f1',
                                }}
                              >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                                  {f.format === 'Excel' ? (
                                    <FileSpreadsheet size={15} style={{ color: '#1a7b74', flexShrink: 0 }} />
                                  ) : (
                                    <FileText size={15} style={{ color: '#be123c', flexShrink: 0 }} />
                                  )}
                                  <span
                                    style={{
                                      fontSize: '12.5px',
                                      fontWeight: 600,
                                      color: '#0f172a',
                                      overflow: 'hidden',
                                      textOverflow: 'ellipsis',
                                      whiteSpace: 'nowrap',
                                    }}
                                  >
                                    {f.name}
                                  </span>
                                </div>
                                <button
                                  onClick={() => handleInitiateDownload(f)}
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    backgroundColor: '#e6f4f1',
                                    color: '#1a7b74',
                                    border: 'none',
                                    borderRadius: '6px',
                                    padding: '4px 10px',
                                    fontSize: '11.5px',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    flexShrink: 0,
                                    transition: 'all 0.15s ease',
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#1a7b74';
                                    e.currentTarget.style.color = '#ffffff';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#e6f4f1';
                                    e.currentTarget.style.color = '#1a7b74';
                                  }}
                                >
                                  <Download size={12} />
                                  <span>Get File</span>
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div
                        style={{
                          fontSize: '12px',
                          color: '#64748b',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          marginBottom: '8px',
                        }}
                      >
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#1a7b74',
                          }}
                        />
                        <span>{suite.formatSummary} · {suite.downloads}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Bottom Row */}
                  <div
                    style={{
                      padding: '16px 24px',
                      borderTop: '1px solid #f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      backgroundColor: '#ffffff',
                    }}
                  >
                    <button
                      onClick={() => handleInitiateDownload(primaryFile)}
                      style={{
                        flex: 1,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        backgroundColor: '#1a7b74',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '12px 18px',
                        fontWeight: 700,
                        fontSize: '13.5px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 4px 12px rgba(26, 123, 116, 0.22)',
                      }}
                      className="download-btn-hover"
                    >
                      <Download size={15} />
                      <span>Download Suite ({primaryFile.name.split(' ')[0]}...)</span>
                    </button>

                    <button
                      onClick={() => setExpandedSuiteId(isExpanded ? null : suite.id)}
                      title="View all files in suite"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        border: '1px solid #e2e8f0',
                        backgroundColor: isExpanded ? '#e6f4f1' : '#ffffff',
                        color: '#1a7b74',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Layers size={16} />
                    </button>

                    <button
                      onClick={() => {
                        navigator.clipboard?.writeText(window.location.href);
                        alert(`Link copied for ${suite.title}`);
                      }}
                      title="Share / Save"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        border: '1px solid #e2e8f0',
                        backgroundColor: '#ffffff',
                        color: '#475569',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Share2 size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom custom advisory callout banner */}
          <div
            style={{
              marginTop: '56px',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #ddede8',
              padding: '36px 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
              boxShadow: '0 10px 28px -6px rgba(18, 86, 81, 0.06)',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '6px',
                }}
              >
                Need a bespoke financial model or customized legal agreements?
              </h3>
              <p style={{ fontSize: '14.5px', color: '#5b6472' }}>
                Our investment banking and legal advisory teams build custom frameworks for fundraising rounds and M&A transactions.
              </p>
            </div>
            <button
              onClick={onTalkToTeam}
              className="btn-primary"
              style={{
                padding: '13px 26px',
                fontSize: '14.5px',
                backgroundColor: '#1a7b74',
              }}
            >
              <span>Speak with Our Financial Analysts</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. One-Time Email Capture Modal Popup */}
      {isEmailModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setIsEmailModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.25)',
              maxWidth: '480px',
              width: '100%',
              padding: '36px 32px 28px 32px',
              animation: 'modalSlideUp 0.25s ease-out',
            }}
          >
            <button
              onClick={() => setIsEmailModalOpen(false)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: 'none',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '50%',
              }}
            >
              <X size={20} />
            </button>

            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                backgroundColor: '#e6f4f1',
                color: '#1a7b74',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
              }}
            >
              <FileDown size={26} />
            </div>

            <h3
              style={{
                fontSize: '22px',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.25,
                marginBottom: '8px',
              }}
            >
              Enter email to download
            </h3>

            <p style={{ fontSize: '14px', color: '#5b6472', lineHeight: 1.5, marginBottom: '24px' }}>
              Download <strong>{pendingDownload?.name}</strong> instantly. You will only need to enter your email once.
            </p>

            <form onSubmit={handleModalSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ ...monoLabel, display: 'block', marginBottom: '6px' }}>FULL NAME</label>
                <input
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  placeholder="Rahul Raghav"
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0',
                    fontSize: '14.5px',
                    outline: 'none',
                    color: '#0f172a',
                  }}
                />
              </div>

              <div>
                <label style={{ ...monoLabel, display: 'block', marginBottom: '6px' }}>
                  WORK EMAIL <span style={{ color: '#1a7b74' }}>*</span>
                </label>
                <input
                  required
                  type="email"
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                  placeholder="founder@venture.com"
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0',
                    fontSize: '14.5px',
                    outline: 'none',
                    color: '#0f172a',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: '#1a7b74',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '14px 20px',
                  fontWeight: 700,
                  fontSize: '14.5px',
                  cursor: 'pointer',
                  marginTop: '8px',
                  boxShadow: '0 10px 24px -6px rgba(26, 123, 116, 0.4)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#14635d';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a7b74';
                }}
              >
                <Download size={16} />
                <span>DOWNLOAD TEMPLATE NOW</span>
              </button>
            </form>

            <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '11px', color: '#94a3b8' }}>
              🔒 100% Free · No spam · Instant browser download
            </div>
          </div>
        </div>
      )}

      {/* Floating Download Toast Modal Notification */}
      {downloadToast && (
        <div
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 9999,
            backgroundColor: '#1a7b74',
            color: '#ffffff',
            borderRadius: '14px',
            padding: '16px 22px',
            boxShadow: '0 16px 36px rgba(0,0,0,0.22)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <CheckCircle2 size={22} style={{ color: '#99f6e4' }} />
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700 }}>
              Downloading Template File
            </div>
            <div style={{ fontSize: '12.5px', opacity: 0.9 }}>
              {downloadToast}
            </div>
          </div>
        </div>
      )}

      {/* Embedded CSS for hover & animation effects */}
      <style>{`
        .template-card-item:hover {
          transform: translateY(-6px);
          border-color: #99f6e4 !important;
          box-shadow: 0 20px 44px -10px rgba(18, 86, 81, 0.16) !important;
        }
        .download-btn-hover:hover {
          background-color: #14635d !important;
          transform: translateY(-1px);
        }
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

      {/* 5. Insights Section */}
      <InsightsSection onReadArticle={onReadArticle} onReserveSeat={onReserveSeat} />

      {/* 6. Closing CTA */}
      <CtaBanner />
    </>
  );
};
