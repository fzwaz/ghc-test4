import React, { useState } from 'react';
import { Search, CalendarCheck, MessagesSquare, ArrowRight, Search as SearchIcon } from 'lucide-react';

interface MentorsSectionProps {
  onBookMentor?: (mentorName: string) => void;
  onBrowseMentors?: () => void;
}

const steps = [
  {
    no: '01',
    icon: SearchIcon,
    title: 'Browse Mentor',
    desc: 'Find mentors that match your goals, industry or challenge.',
  },
  {
    no: '02',
    icon: CalendarCheck,
    title: 'Book a 1:1 session',
    desc: 'Choose a time slot and book a personalized session with your mentor.',
  },
  {
    no: '03',
    icon: MessagesSquare,
    title: 'Get Mentorship',
    desc: 'Gain actionable advice and clarity to move forward with confidence.',
  },
];

const tabs = [
  'All Mentors', 'Funding', 'Strategy', 'Growth', 'Product',
  'Finance', 'Compliance', 'Marketing', 'Technology', 'Operations',
];

interface Mentor {
  name: string;
  role: string;
  org: string;
  tags: [string, string];
  desc: string;
  categories: string[];
  color: string;
}

const mentors: Mentor[] = [
  {
    name: 'Manu Francis', role: 'Founder & CEO', org: 'GHC Growth Lab',
    tags: ['Compliance', 'Fundraising'],
    desc: 'Strategic fundraising and growth advisory for early-stage ventures.',
    categories: ['Funding', 'Strategy', 'Finance', 'Compliance'], color: '#0d9488',
  },
  {
    name: 'Anna Jain Jose', role: 'Co-Founder', org: 'GHC Growth Lab',
    tags: ['Finance', 'Tax Strategy'],
    desc: 'Financial planning, tax strategy and business scaling.',
    categories: ['Finance', 'Compliance', 'Strategy'], color: '#7c3aed',
  },
  {
    name: 'Ramees Ali', role: 'Founder & CEO', org: 'Interval Learning',
    tags: ['EdTech', 'Scaling'],
    desc: 'Scaling education ventures and building sustainable business models.',
    categories: ['Growth', 'Strategy', 'Operations'], color: '#2563eb',
  },
  {
    name: 'Mittu Tigi', role: 'CEO', org: 'AIC IIITK',
    tags: ['Incubation', 'Strategy'],
    desc: 'Startup incubation, product strategy and ecosystem development.',
    categories: ['Strategy', 'Operations', 'Technology'], color: '#d97706',
  },
  {
    name: 'Shan Abdul Salam', role: 'Host & Accelerator Lead', org: 'The Econ Show',
    tags: ['Growth', 'Ecosystem'],
    desc: 'Growth strategy and startup ecosystem development.',
    categories: ['Growth', 'Marketing', 'Strategy'], color: '#059669',
  },
  {
    name: 'Vivek Chandran', role: 'Founder & CEO', org: 'Risknox.ai',
    tags: ['AI', 'RiskTech'],
    desc: 'AI-driven risk solutions and technology strategy.',
    categories: ['Technology', 'Product'], color: '#0d9488',
  },
  {
    name: 'Akhil Narsel', role: 'Startup Mentor', org: 'Growth & Product',
    tags: ['Product', 'GTM'],
    desc: 'Product strategy, go-to-market and early-stage growth.',
    categories: ['Product', 'Growth', 'Marketing'], color: '#4f46e5',
  },
  {
    name: 'Rahul Raghav', role: 'Co-Founder', org: 'TWT Venture Studio',
    tags: ['Ventures', 'Fundraising'],
    desc: 'Venture building, fundraising and startup operations.',
    categories: ['Funding', 'Strategy', 'Operations'], color: '#be123c',
  },
];

function initials(name: string) {
  return name.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0]).join('').toUpperCase();
}

export const MentorsSection: React.FC<MentorsSectionProps> = ({ onBookMentor, onBrowseMentors }) => {
  const [activeTab, setActiveTab] = useState('All Mentors');
  const [query, setQuery] = useState('');

  const filtered = mentors.filter((m) => {
    const tabOk = activeTab === 'All Mentors' || m.categories.includes(activeTab);
    const q = query.trim().toLowerCase();
    const queryOk =
      !q ||
      m.name.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q) ||
      m.org.toLowerCase().includes(q) ||
      m.tags.some((t) => t.toLowerCase().includes(q));
    return tabOk && queryOk;
  });

  return (
    <section id="mentors" style={{ position: 'relative', width: '100%', background: 'linear-gradient(180deg, #ffffff 0%, #f3faf9 60%, #eef7f6 100%)', padding: '90px 48px 90px 48px', overflow: 'hidden' }}>
      {/* Faint dotted texture right */}
      <div style={{ position: 'absolute', top: '120px', right: '30px', width: '280px', height: '420px', backgroundImage: 'radial-gradient(#0f9d8f 1px, transparent 1.4px)', backgroundSize: '16px 16px', opacity: 0.12, pointerEvents: 'none' }} />
      {/* Soft blobs */}
      <div style={{ position: 'absolute', top: '90px', left: '60px', width: '120px', height: '120px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(204,241,235,0.7) 0%, rgba(204,241,235,0) 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '70px', right: '220px', width: '90px', height: '90px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(204,241,235,0.8) 0%, rgba(204,241,235,0) 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1380px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e7f6f3', color: '#2a7f76', padding: '7px 20px', borderRadius: '9999px', fontSize: '12px', fontWeight: 700, letterSpacing: '1.4px', textTransform: 'uppercase', marginBottom: '20px' }}>
            EXPERT GUIDANCE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 3.1rem)', fontWeight: 800, letterSpacing: '-0.02em', color: '#101c3d', marginBottom: '16px' }}>
            Expert Guidance, <span style={{ color: '#0f766e' }}>Personalized Solutions</span>
          </h2>
          <p style={{ fontSize: '15.5px', color: '#5b6472', maxWidth: '720px', margin: '0 auto 28px auto', lineHeight: 1.65 }}>
            Unlock personalized financial insights with our one-on-one sessions led by seasoned experts. Tailored guidance for your business success awaits. Book your session today.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={onBrowseMentors} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#0b5e56', color: '#fff', fontWeight: 700, fontSize: '14.5px', padding: '13px 30px', borderRadius: '9999px', border: 'none', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(11,94,86,0.5)' }}>
              <span>Browse Mentors</span><ArrowRight size={16} />
            </button>
            <a href="#topics" style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'transparent', color: '#0b5e56', fontWeight: 700, fontSize: '14.5px', padding: '12px 28px', borderRadius: '9999px', border: '1.5px solid #0b5e56', textDecoration: 'none' }}>
              Explore Topics
            </a>
          </div>
        </div>

        {/* 3 steps rail */}
        <div style={{ position: 'relative', marginBottom: '40px' }}>
          <svg style={{ position: 'absolute', top: '-30px', left: 0, width: '100%', height: '120px', pointerEvents: 'none', overflow: 'visible' }} viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,90 C200,10 350,110 600,60 C850,10 1000,110 1200,20" stroke="#bfe6e0" strokeWidth="1.2" fill="none" opacity="0.8" />
            <circle cx="270" cy="72" r="5" fill="#0f9d8f" />
            <circle cx="600" cy="60" r="4" fill="#5eead4" />
            <circle cx="905" cy="52" r="4" fill="#0f9d8f" />
            <circle cx="150" cy="62" r="11" fill="#5eead4" opacity="0.5" />
          </svg>
          <div className="steps-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0', position: 'relative' }}>
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} style={{ textAlign: 'center', padding: '0 36px', borderLeft: idx === 0 ? 'none' : '1px solid #d9e8e6' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#0f766e', backgroundColor: '#e7f6f3', borderRadius: '9999px', padding: '3px 10px', marginBottom: '-10px', zIndex: 2, letterSpacing: '0.5px' }}>{s.no}</span>
                    <span style={{ width: '58px', height: '58px', borderRadius: '50%', backgroundColor: '#f2faf9', border: '1px solid #d9e8e6', color: '#0f766e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                  </div>
                  <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: '#101c3d', marginBottom: '6px' }}>{s.title}</h3>
                  <p style={{ fontSize: '13.5px', color: '#6b7482', lineHeight: 1.6, maxWidth: '300px', margin: '0 auto' }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tabs + search */}
        <div className="tabs-row" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '26px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
            {tabs.map((t) => {
              const active = activeTab === t;
              return (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  style={{
                    padding: '8px 18px', borderRadius: '9999px', fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                    backgroundColor: active ? '#0b5e56' : '#ffffff', color: active ? '#ffffff' : '#0b5e56',
                    border: active ? '1px solid #0b5e56' : '1px solid #d9e8e6',
                    boxShadow: active ? '0 8px 18px -6px rgba(11,94,86,0.4)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '9999px', padding: '9px 18px', minWidth: '280px' }}>
            <Search size={15} style={{ color: '#0b5e56', flexShrink: 0 }} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search mentors, skills or industries..."
              style={{ border: 'none', outline: 'none', fontSize: '13px', width: '100%', background: 'transparent', color: '#334155' }}
            />
          </div>
        </div>

        {/* Mentor cards marquee */}
        {filtered.length > 0 && (
          <div className="mentor-marquee" style={{ position: 'relative', overflow: 'hidden', margin: '0 -12px 36px -12px', padding: '6px 12px 18px 12px' }}>
            <div className="mentor-track" style={{ display: 'flex', gap: '18px', width: 'max-content', animation: 'mentorMarquee 45s linear infinite' }}>
              {[0, 1].map((half) => (
                <div key={half} aria-hidden={half === 1} style={{ display: 'flex', gap: '18px' }}>
                  {(filtered.length < 5
                    ? (Array(Math.ceil(5 / filtered.length)).fill(filtered).flat() as Mentor[])
                    : filtered
                  ).map((m: Mentor, idx: number) => (
            <div key={idx} style={{ width: '300px', flexShrink: 0, position: 'relative', borderRadius: '18px', padding: '20px 18px', backgroundColor: '#ffffff', border: '1px solid #e6f0ee', boxShadow: '0 10px 26px -10px rgba(15,157,143,0.12)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <span style={{ width: '88px', height: '88px', borderRadius: '50%', backgroundColor: '#e7f6f3', color: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '24px', border: '2px solid #d3ece8', flexShrink: 0 }}>
                  {initials(m.name)}
                </span>
                <div>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#101c3d', lineHeight: 1.2, letterSpacing: '-0.01em' }}>{m.name}</h3>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: '#475569', marginTop: '4px' }}>{m.role}</p>
                  <p style={{ fontSize: '12.5px', color: '#7c8a99' }}>{m.org}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
                {m.tags.map((t, tIdx) => (
                  <span key={tIdx} style={{ flex: '1 1 0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: '#0b5e56', backgroundColor: '#eefaf8', padding: '9px 8px', borderRadius: '10px', whiteSpace: 'nowrap' }}>
                    {t}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: '13.5px', color: '#5b6472', lineHeight: 1.6, marginBottom: '14px', borderTop: '1px solid #e8eef0', paddingTop: '14px', flex: 1 }}>{m.desc}</p>
              <button
                onClick={() => onBookMentor?.(m.name)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', borderRadius: '12px', backgroundColor: '#0b5e56', color: '#ffffff', border: 'none', fontWeight: 700, fontSize: '13.5px', cursor: 'pointer', transition: 'background-color 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#084c46'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#0b5e56'; }}
              >
                <span>Book 1:1 Session</span><ArrowRight size={15} />
              </button>
            </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '80px', background: 'linear-gradient(90deg, #f6fbfb 0%, rgba(246,251,251,0) 100%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '80px', background: 'linear-gradient(-90deg, #eef7f6 0%, rgba(238,247,246,0) 100%)', pointerEvents: 'none' }} />
          </div>
        )}

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginBottom: '36px' }}>
            No mentors match your search — try a different skill or clear the search.
          </p>
        )}

        <div style={{ textAlign: 'center' }}>
          <button onClick={onBrowseMentors} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'transparent', color: '#101c3d', fontWeight: 700, fontSize: '14.5px', padding: '13px 34px', borderRadius: '9999px', border: '1.5px solid #101c3d', cursor: 'pointer' }}>
            <span>Browse All Mentors</span><ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes mentorMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mentor-marquee:hover .mentor-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .mentor-track { animation: none !important; }
        }
        @media (max-width: 860px) {
          .steps-row { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </section>
  );
};
