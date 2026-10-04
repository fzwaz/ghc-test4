import React, { useState } from 'react';
import { Search, ArrowRight, CalendarCheck, MessagesSquare, Search as SearchIcon, ChevronDown, CheckCircle2 } from 'lucide-react';
import { MentorTopics } from '../components/MentorTopics';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BecomeMentorSection } from '../components/BecomeMentorSection';
import { CtaBanner } from '../components/CtaBanner';
import { InsightsSection } from '../components/InsightsSection';

interface MentorsPageProps {
  onBookMentor?: (mentorName: string) => void;
  onBrowseMentors?: () => void;
  onConnectMentor?: () => void;
  onBecomeMentor?: () => void;
  onReadArticle?: () => void;
  onReserveSeat?: (eventTitle: string) => void;
}

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

const steps = [
  { no: '01', icon: SearchIcon, title: 'Browse Mentor', desc: 'Find mentors that match your goals, industry or challenge.' },
  { no: '02', icon: CalendarCheck, title: 'Book a 1:1 session', desc: 'Choose a time slot and book a personalized session with your mentor.' },
  { no: '03', icon: MessagesSquare, title: 'Get Mentorship', desc: 'Gain actionable advice and clarity to move forward with confidence.' },
];

const faqs = [
  {
    q: 'How do 1-on-1 mentor sessions work?',
    a: 'Search for a mentor by skill or industry, pick a time slot, and meet over a video call. You bring your toughest questions — your mentor brings hard-won answers, plus notes and action items after the call.',
  },
  {
    q: 'How much does a session cost?',
    a: 'Each mentor sets their own per-session price based on experience and demand. You always see the exact price before booking — no subscriptions, no hidden fees.',
  },
  {
    q: 'Can I reschedule or cancel a booking?',
    a: 'Yes. Reschedule or cancel free of charge up to 12 hours before your session from your confirmation email, and pick a new slot that suits you.',
  },
  {
    q: 'Are sessions online or in person?',
    a: 'All sessions are virtual by default, so you can learn from top operators anywhere in the world. In-person intensives can be arranged on request.',
  },
  {
    q: 'How do I become a mentor on GHC Growth Lab?',
    a: 'Click “Become a Mentor” and tell us about your operating or investing experience. Our team reviews every application, and approved mentors set their own price and availability.',
  },
];

const trustPoints = [
  '100+ expert mentors',
  '1000+ consultations done',
  '4.9/5 average founder rating',
];

const topicOptions = [
  'Fundraising & Investor Readiness',
  'Product & Go-to-Market',
  'Finance, Tax & Compliance',
  'Growth & Marketing',
  'General Guidance',
];

const monoLabel: React.CSSProperties = {
  fontSize: '11.5px',
  fontWeight: 600,
  letterSpacing: '2.2px',
  color: '#6b7280',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
};

function initials(name: string) {
  return name.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0]).join('').toUpperCase();
}

const CornerTick: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <span style={{ position: 'absolute', width: '14px', height: '14px', borderColor: '#cbd5e1', borderStyle: 'solid', borderWidth: 0, pointerEvents: 'none', ...style }} />
);

const BookingForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
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
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0a0a0a', marginBottom: '10px' }}>Request received{ name ? `, ${name.split(' ')[0]}` : ''}!</h3>
          <p style={{ fontSize: '14.5px', color: '#5b6472', lineHeight: 1.6, marginBottom: '24px' }}>
            Our team will call you back within 24 hours to schedule your 1-on-1 mentor session.
          </p>
          <button onClick={() => setSubmitted(false)} style={{ background: 'none', border: 'none', color: '#1a7b74', fontWeight: 700, fontSize: '14px', cursor: 'pointer', textDecoration: 'underline' }}>
            Book another call
          </button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <span style={monoLabel}>BOOK A CALL</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', fontWeight: 700, letterSpacing: '2px', color: '#1a7b74', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#1a7b74', boxShadow: '0 0 10px rgba(26,123,116,0.6)' }} /> LIVE
            </span>
          </div>

          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.3, letterSpacing: '-0.01em', marginBottom: '20px' }}>
            Got any questions? Bring them here.
          </h3>
          <div style={{ height: '1px', backgroundColor: '#eef1f4', marginBottom: '22px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <label style={{ ...monoLabel, display: 'block', marginBottom: '8px' }}>FULL NAME <span style={{ color: '#1a7b74' }}>*</span></label>
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Aanya Sharma" style={inputStyle} />
            </div>
            <div>
              <label style={{ ...monoLabel, display: 'block', marginBottom: '8px' }}>PHONE NUMBER</label>
              <div style={{ display: 'flex', border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#ffffff' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '0 12px', backgroundColor: '#f3f4f6', borderRight: '1px solid #e5e7eb', fontSize: '14px', fontWeight: 600, color: '#374151', whiteSpace: 'nowrap' }}>
                  <span style={{ fontSize: '16px' }}>🇮🇳</span> +91 <ChevronDown size={13} style={{ color: '#9ca3af' }} />
                </span>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="98765 43210" inputMode="tel" style={{ ...inputStyle, border: 'none', borderRadius: 0 }} />
              </div>
            </div>
            <div>
              <label style={{ ...monoLabel, display: 'block', marginBottom: '8px' }}>WORK EMAIL <span style={{ color: '#1a7b74' }}>*</span></label>
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="aanya@company.co.in" style={inputStyle} />
            </div>
            <div>
              <label style={{ ...monoLabel, display: 'block', marginBottom: '8px' }}>MENTOR TOPIC</label>
              <div style={{ position: 'relative' }}>
                <select value={topic} onChange={(e) => setTopic(e.target.value)} style={{ ...inputStyle, appearance: 'none', WebkitAppearance: 'none', color: topic ? '#0f172a' : '#9ca3af', cursor: 'pointer', paddingRight: '44px' }}>
                  <option value="">Select a topic…</option>
                  {topicOptions.map((t) => (<option key={t} value={t}>{t}</option>))}
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
              <span>BOOK 30 MINS MEETING</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
        <span style={{ ...monoLabel, fontSize: '10.5px' }}>• SECURE · NO SPAM</span>
        <span style={{ ...monoLabel, fontSize: '10.5px' }}>REPLY &lt; 24H</span>
      </div>
    </div>
  );
};

export const MentorsPage: React.FC<MentorsPageProps> = ({
  onBookMentor,
  onBrowseMentors,
  onConnectMentor,
  onBecomeMentor,
  onReadArticle,
  onReserveSeat,
}) => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All Mentors');
  const [searchFocus, setSearchFocus] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
    <>
      {/* Hero — grid backdrop, headline left, booking form right */}
      <section data-hero style={{ position: 'relative', width: '100%', backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.055) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 130% 110% at 50% 42%, black 62%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 130% 110% at 50% 42%, black 62%, transparent 100%)',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1380px', margin: '0 auto', padding: '130px 48px 56px 48px' }}>
          <div className="mentor-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '64px', alignItems: 'center', marginBottom: '56px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1a7b74', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '24px' }}>
                FIND YOUR MENTOR
              </div>
              <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.6rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '24px' }}>
                <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>Learn from operators</span><br />
                <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>who've done it</span>{' '}
                <span style={{ color: '#0a0a0a' }}>before.</span>
              </h1>
              <p style={{ fontSize: '17px', color: '#5b6472', maxWidth: '560px', lineHeight: 1.65, marginBottom: '32px' }}>
                GHC Growth Lab helps you find 1-on-1 mentors after understanding your stage, goals and budget — with personalized guidance for your business success.
              </p>
              <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                {trustPoints.map((t, idx) => (
                  <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#5b6472', fontWeight: 500 }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1a7b74', boxShadow: '0 0 10px rgba(26,123,116,0.5)' }} /> {t}
                  </span>
                ))}
              </div>
            </div>
            <BookingForm />
          </div>

          {/* Search + tabs (same content as before) */}
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#ffffff',
                border: searchFocus ? '2px solid #14b8a6' : '1px solid #e2e8f0',
                borderRadius: '9999px', padding: '8px 8px 8px 24px',
                boxShadow: searchFocus
                  ? '0 0 0 6px rgba(20,184,166,0.15), 0 18px 44px -10px rgba(18,86,81,0.3)'
                  : '0 12px 30px -10px rgba(18,86,81,0.15)',
                transition: 'all 0.25s ease',
              }}
            >
              <Search size={20} style={{ color: '#0d9488', flexShrink: 0 }} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
                placeholder="Try “fundraising”, “D2C”, “pitch deck”…"
                style={{ border: 'none', outline: 'none', fontSize: '15px', flex: 1, background: 'transparent', color: '#0f172a', minWidth: 0 }}
              />
              <button
                onClick={onBrowseMentors}
                style={{ backgroundColor: '#0b5e56', color: '#fff', border: 'none', borderRadius: '9999px', padding: '13px 28px', fontWeight: 700, fontSize: '14.5px', cursor: 'pointer', flexShrink: 0, boxShadow: '0 8px 20px -6px rgba(11,94,86,0.5)' }}
              >
                Search
              </button>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
              {tabs.map((t) => {
                const active = activeTab === t;
                return (
                  <button
                    key={t}
                    onClick={() => setActiveTab(t)}
                    style={{
                      padding: '8px 18px', borderRadius: '9999px', fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                      backgroundColor: active ? '#0b5e56' : 'rgba(255,255,255,0.9)', color: active ? '#fff' : '#0b5e56',
                      border: active ? '1px solid #0b5e56' : '1px solid #d9e8e6',
                      boxShadow: active ? '0 0 18px rgba(20,184,166,0.45)' : 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* All mentors grid */}
      <section id="mentors-grid" style={{ position: 'relative', width: '100%', backgroundColor: '#ffffff', padding: '40px 48px 90px 48px', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1380px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
              All mentors <span style={{ color: '#1a7b74' }}>({filtered.length})</span>
            </h2>
            <span style={{ fontSize: '13.5px', color: '#64748b' }}>
              {query || activeTab !== 'All Mentors'
                ? <>Filtered {activeTab !== 'All Mentors' ? `by ${activeTab}` : ''}{query && activeTab !== 'All Mentors' ? ' • ' : ''}{query && `for “${query}”`}</>
                : 'Showing every mentor on the network'}
            </span>
          </div>

          {filtered.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '22px' }}>
              {filtered.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    borderRadius: '18px', padding: '24px 22px', backgroundColor: '#ffffff',
                    border: '1px solid #e6f0ee', boxShadow: '0 10px 26px -10px rgba(15,157,143,0.12)',
                    display: 'flex', flexDirection: 'column', transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = 'rgba(20,184,166,0.6)';
                    e.currentTarget.style.boxShadow = '0 0 0 4px rgba(20,184,166,0.12), 0 24px 48px -12px rgba(18,86,81,0.28)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e6f0ee';
                    e.currentTarget.style.boxShadow = '0 10px 26px -10px rgba(15,157,143,0.12)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                    <span style={{ width: '84px', height: '84px', borderRadius: '50%', backgroundColor: '#e7f6f3', color: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '23px', border: '2px solid #d3ece8', flexShrink: 0, boxShadow: '0 0 24px rgba(20,184,166,0.18)' }}>
                      {initials(m.name)}
                    </span>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#101c3d', lineHeight: 1.2 }}>{m.name}</h3>
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
                  <p style={{ fontSize: '13.5px', color: '#5b6472', lineHeight: 1.6, marginBottom: '16px', borderTop: '1px solid #e8eef0', paddingTop: '14px', flex: 1 }}>{m.desc}</p>
                  <button
                    onClick={() => onBookMentor?.(m.name)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '13px', borderRadius: '12px', backgroundColor: '#0b5e56', color: '#fff', border: 'none', fontWeight: 700, fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s ease', boxShadow: '0 10px 22px -8px rgba(11,94,86,0.5)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#084c46'; e.currentTarget.style.boxShadow = '0 0 20px rgba(20,184,166,0.5)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#0b5e56'; e.currentTarget.style.boxShadow = '0 10px 22px -8px rgba(11,94,86,0.5)'; }}
                  >
                    <CalendarCheck size={15} /><span>Book 1:1 Session</span><ArrowRight size={15} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px', borderRadius: '20px', backgroundColor: '#f7faf9', border: '1px dashed #99f6e4' }}>
              <p style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>No mentors match your search</p>
              <p style={{ fontSize: '14px', color: '#64748b' }}>Try a different skill, industry or name — or clear the filters above.</p>
            </div>
          )}
        </div>
      </section>

      {/* How it works */}
      <section style={{ position: 'relative', width: '100%', background: 'linear-gradient(180deg, #0b3f3a 0%, #083733 100%)', padding: '80px 48px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-120px', right: '10%', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,0.3) 0%, rgba(45,212,191,0) 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-160px', left: '5%', width: '460px', height: '460px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,0.22) 0%, rgba(45,212,191,0) 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div style={{ display: 'inline-flex', backgroundColor: 'rgba(255,255,255,0.12)', color: '#99f6e4', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', marginBottom: '16px' }}>
              HOW IT WORKS
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
              From stuck to <span style={{ color: '#5eead4' }}>unstuck in three steps</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} style={{ borderRadius: '20px', padding: '28px 26px', backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)', boxShadow: '0 0 32px rgba(45,212,191,0.12)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                    <span style={{ width: '44px', height: '44px', borderRadius: '14px', backgroundColor: 'rgba(45,212,191,0.18)', color: '#5eead4', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 18px rgba(45,212,191,0.35)' }}>
                      <Icon size={21} />
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1.5px', color: '#5eead4' }}>STEP 0{idx + 1}</span>
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ fontSize: '13.5px', color: '#a7c4c0', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <MentorTopics onConnectMentor={onConnectMentor} />
      <TestimonialsSection />
      <BecomeMentorSection onBecomeMentor={onBecomeMentor} />

      {/* FAQ */}
      <section style={{ position: 'relative', width: '100%', backgroundColor: '#ffffff', padding: '90px 48px 100px 48px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-140px', right: '-100px', width: '440px', height: '440px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,0.22) 0%, rgba(45,212,191,0) 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', backgroundColor: '#e6f4f1', color: '#1b736b', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', marginBottom: '16px' }}>
              GOOD TO KNOW
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
              Mentorship <span style={{ color: '#1a7b74' }}>FAQs</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((f, idx) => {
              const open = openFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenFaq(open ? null : idx)}
                  style={{
                    borderRadius: '16px', padding: '20px 24px', cursor: 'pointer',
                    backgroundColor: open ? '#f0fdfa' : '#ffffff',
                    border: open ? '1.5px solid #14b8a6' : '1px solid #e2e8f0',
                    boxShadow: open ? '0 0 28px rgba(20,184,166,0.18)' : '0 6px 18px -8px rgba(18,86,81,0.08)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                    <h3 style={{ fontSize: '15.5px', fontWeight: 800, color: '#0f172a' }}>{f.q}</h3>
                    <span style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: open ? '#125651' : '#e6f4f1', color: open ? '#fff' : '#125651', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.25s ease' }}>
                      <ChevronDown size={16} style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }} />
                    </span>
                  </div>
                  {open && (
                    <p style={{ fontSize: '14px', color: '#52606d', lineHeight: 1.65, marginTop: '12px' }}>{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <InsightsSection onReadArticle={onReadArticle} onReserveSeat={onReserveSeat} />
      <CtaBanner />
    </>
  );
};
