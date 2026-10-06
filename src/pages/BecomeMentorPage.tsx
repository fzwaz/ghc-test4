import React from 'react';
import { ArrowRight, GraduationCap, FileText, SearchCheck, UserCheck, BadgeDollarSign, Star, Briefcase } from 'lucide-react';

interface BecomeMentorPageProps {
  onContact?: () => void;
}

const whyCards = [
  {
    icon: Briefcase,
    title: 'Create Your Own Business',
    desc: 'Build your own mini-mentorship practice. Leverage GHC Growth Lab\u2019s resources and network to grow your clientele and create a lasting impact',
  },
  {
    icon: BadgeDollarSign,
    title: 'Earn Money',
    desc: 'Turn your expertise into income. Share your knowledge and guide our clients to success while earning a competitive fee.',
  },
  {
    icon: Star,
    title: 'Get Featured',
    desc: 'Become a recognized leader in your field. Gain exposure to a diverse network and establish yourself as a sought-after mentor',
  },
];

const requirements = [
  'You should have a strong track record of practical industry experience.',
  'You should have excellent interpersonal skills and a welcoming demeanor.',
  'You should an abundance mindset and are proactive in your approach.',
];

const steps = [
  {
    icon: FileText,
    title: 'Application',
    desc: 'Mentors interested need to fill out our comprehensive form that includes an evaluation of your social profiles, work experience, and professional achievements.',
  },
  {
    icon: SearchCheck,
    title: 'Review',
    desc: 'Mentors interested need to fill out our comprehensive form that includes an evaluation of your social profiles, work experience, and professional achievements.',
  },
  {
    icon: UserCheck,
    title: 'Onboarding',
    desc: 'Mentors interested need to fill out our comprehensive form that includes an evaluation of your social profiles, work experience, and professional achievements.',
  },
];

export const BecomeMentorPage: React.FC<BecomeMentorPageProps> = ({ onContact }) => {
  return (
    <>
      {/* Hero — same system as Mentors hero */}
      <section style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.055) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 130% 110% at 50% 42%, black 62%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 130% 110% at 50% 42%, black 62%, transparent 100%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '122px 48px 20px 48px' }}>
          <div className="become-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '64px', alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1a7b74', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '24px' }}>
                For mentors and creators
              </div>
              <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.6rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '20px' }}>
                <span style={{ color: '#0a0a0a' }}>Want to become a</span><br />
                <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>Mentor ?</span>
              </h1>
              <p style={{ fontSize: '17px', color: '#5b6472', maxWidth: '560px', lineHeight: 1.65, marginBottom: '32px' }}>
                Share your knowledge and earn money
              </p>
              <button onClick={onContact} className="btn-primary" style={{ padding: '13px 34px', fontSize: '15px' }}>
                <span>Contact Us</span><ArrowRight size={16} />
              </button>
            </div>
            <div style={{ borderRadius: '28px', background: 'radial-gradient(circle at 30% 20%, #177068 0%, #115651 50%, #083733 100%)', minHeight: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 60px -15px rgba(18,86,81,0.4)' }}>
              <div style={{ position: 'absolute', top: '-70px', right: '-70px', width: '260px', height: '260px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.14)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '-90px', left: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,0.25) 0%, rgba(45,212,191,0) 70%)', pointerEvents: 'none' }} />
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, padding: '40px' }}>
                <span style={{ width: '96px', height: '96px', borderRadius: '28px', backgroundColor: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '22px' }}>
                  <GraduationCap size={48} strokeWidth={1.5} />
                </span>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#fff', lineHeight: 1.4 }}>
                  Share knowledge.<br />Earn money.
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#99f6e4', marginTop: '14px' }}>GHC GROWTH LAB MENTORS</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 1100px) {
            .become-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>

      {/* Why become a mentor */}
      <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '40px 48px 90px 48px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', textAlign: 'center', marginBottom: '44px' }}>
            Why should you become mentor at GHCGrowthLab?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '22px' }}>
            {whyCards.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: '20px', backgroundColor: '#ffffff', border: '1px solid rgba(226,232,240,0.9)',
                    padding: '36px 28px', textAlign: 'center', boxShadow: '0 12px 32px -10px rgba(18,86,81,0.12)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = 'rgba(20,184,166,0.5)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(226,232,240,0.9)'; }}
                >
                  <span style={{ width: '52px', height: '52px', borderRadius: '16px', backgroundColor: '#e6f4f1', color: '#125651', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                    <Icon size={24} />
                  </span>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#0f172a', lineHeight: 1.35, marginBottom: '12px' }}>{c.title}</h3>
                  <p style={{ fontSize: '13.5px', color: '#5b6472', lineHeight: 1.65 }}>{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section style={{ width: '100%', background: 'linear-gradient(180deg, #0b3f3a 0%, #083733 100%)', padding: '90px 48px 100px 48px', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-120px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(45,212,191,0.2) 0%, rgba(45,212,191,0) 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: '18px' }}>
            What you need to have before becoming mentor
          </h2>
          <p style={{ fontSize: '15.5px', color: '#a7c4c0', lineHeight: 1.65, marginBottom: '32px' }}>
            Our mentors are the best of the best, sharing common traits that set them apart:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto 36px auto', display: 'inline-block', textAlign: 'left' }}>
            {requirements.map((r, idx) => (
              <li key={idx} style={{ display: 'flex', gap: '10px', fontSize: '15px', color: '#e8f5f1', lineHeight: 1.6, marginBottom: '12px' }}>
                <span style={{ color: '#5eead4', flexShrink: 0 }}>•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <div>
            <button onClick={onContact} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'transparent', color: '#5eead4', fontWeight: 700, fontSize: '14.5px', padding: '12px 32px', borderRadius: '9999px', border: '1.5px solid rgba(94,234,212,0.5)', cursor: 'pointer' }}>
              <span>Contact Us</span><ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Joining process */}
      <section style={{ width: '100%', backgroundColor: '#f7faf9', padding: '90px 48px 100px 48px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', textAlign: 'center', marginBottom: '44px' }}>
            Joining and User Calling process
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '22px' }}>
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: '20px', backgroundColor: '#ffffff', border: '1px solid rgba(226,232,240,0.9)',
                    padding: '36px 28px', textAlign: 'center', boxShadow: '0 12px 32px -10px rgba(18,86,81,0.1)',
                  }}
                >
                  <span style={{ width: '64px', height: '64px', borderRadius: '18px', backgroundColor: '#f7faf9', border: '1px solid #e6f0ee', color: '#125651', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                    <Icon size={30} strokeWidth={1.6} />
                  </span>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>{s.title}</h3>
                  <p style={{ fontSize: '13.5px', color: '#5b6472', lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
