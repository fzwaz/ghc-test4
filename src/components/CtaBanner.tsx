import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Clock, TrendingUp, Sparkles, Lock, CheckCircle2, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

const stats = [
  { icon: ShieldCheck, value: '1000+', label: 'Consultations Done' },
  { icon: Clock, value: '24-Hour', label: 'Response Guarantee' },
  { icon: TrendingUp, value: '100+', label: 'Fundings Facilitated' },
];

const stageOptions = ['Idea Stage', 'MVP Built', 'Early Revenue', 'Scaling'];

export const CtaBanner: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [stage, setStage] = useState('');
  const [startup, setStartup] = useState('');
  const [idea, setIdea] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.7 },
      colors: ['#1a7b74', '#2dd4bf', '#9adcd2', '#ffffff'],
    });
  };

  const fieldStyle: React.CSSProperties = {
    width: '100%',
    padding: '13px 16px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.14)',
    backgroundColor: 'rgba(255,255,255,0.04)',
    color: '#ffffff',
    fontSize: '14.5px',
    outline: 'none',
    fontFamily: 'inherit',
  };

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        padding: '40px 24px 80px 24px',
        backgroundColor: '#f7faf9',
      }}
    >
      <div
        style={{
          maxWidth: '1380px',
          margin: '0 auto',
          borderRadius: '32px',
          background: 'radial-gradient(1100px 520px at 88% -8%, rgba(26,123,116,0.16) 0%, rgba(26,123,116,0) 60%), radial-gradient(820px 520px at -8% 112%, rgba(26,123,116,0.22) 0%, rgba(26,123,116,0) 60%), linear-gradient(180deg, #071a15 0%, #030d0a 100%)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 25px 60px -15px rgba(18, 86, 81, 0.35)',
        }}
      >
        {/* Sharp sweeping light arcs */}
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          viewBox="0 0 1380 640"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="ctaGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Main arc: top-center sweeping to bottom-left */}
          <path
            d="M 760,-40 C 700,180 480,380 120,520 C 40,552 -20,580 -60,610"
            stroke="#1a7b74"
            strokeWidth="2.5"
            fill="none"
            opacity="0.85"
            filter="url(#ctaGlow)"
          />
          <path
            d="M 760,-40 C 700,180 480,380 120,520 C 40,552 -20,580 -60,610"
            stroke="#9adcd2"
            strokeWidth="1"
            fill="none"
            opacity="0.7"
          />
          {/* Soft wide beam under the arc */}
          <path
            d="M 780,-40 C 720,190 480,400 100,540 C 20,572 -40,600 -80,630"
            stroke="rgba(26,123,116,0.35)"
            strokeWidth="26"
            fill="none"
            opacity="0.35"
            filter="url(#ctaGlow)"
          />
          {/* Right-side arc behind the form */}
          <path
            d="M 900,-60 C 1080,120 1180,320 1140,700"
            stroke="rgba(26,123,116,0.4)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
          />
        </svg>

        {/* Dot matrices */}
        <div
          style={{
            position: 'absolute', top: '48px', left: '36px', width: '90px', height: '120px',
            backgroundImage: 'radial-gradient(rgba(26,123,116,0.4) 1.2px, transparent 1.6px)',
            backgroundSize: '18px 18px', pointerEvents: 'none',
            maskImage: 'radial-gradient(circle at 0% 0%, black 20%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(circle at 0% 0%, black 20%, transparent 75%)',
          }}
        />
        <div
          style={{
            position: 'absolute', bottom: '36px', left: '44%', width: '150px', height: '60px',
            backgroundImage: 'radial-gradient(rgba(26,123,116,0.32) 1.2px, transparent 1.6px)',
            backgroundSize: '18px 18px', pointerEvents: 'none',
            maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 75%)',
          }}
        />

        {/* Top-right bloom */}
        <div
          style={{
            position: 'absolute', top: '-140px', right: '-100px', width: '460px', height: '340px',
            borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(26,123,116,0.22) 0%, rgba(26,123,116,0) 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          className="cta-grid"
          style={{
            position: 'relative', zIndex: 10,
            display: 'grid', gridTemplateColumns: '1.15fr 0.85fr',
            gap: '56px', alignItems: 'center',
            padding: '52px 48px',
          }}
        >
          {/* Left copy */}
          <div>
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'rgba(26,123,116,0.12)',
                border: '1px solid rgba(26,123,116,0.32)',
                color: '#1a7b74', padding: '8px 18px', borderRadius: '9999px',
                fontSize: '12px', fontWeight: 700, letterSpacing: '1.4px',
                marginBottom: '20px', boxShadow: '0 0 24px rgba(26,123,116,0.18)',
              }}
            >
              <Sparkles size={14} /> GET FUNDED + GET MENTORED
            </div>

            <h2
              style={{
                fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                fontWeight: 800, lineHeight: 1.14, color: '#ffffff',
                letterSpacing: '-0.02em', marginBottom: '22px',
              }}
            >
              Ready to turn your dream into a{' '}
              <span style={{ color: '#2dd4bf', textShadow: '0 0 34px rgba(45,212,191,0.45)' }}>
                funded, mentored
              </span>{' '}
              venture?
            </h2>

            <p style={{ fontSize: '16.5px', lineHeight: 1.65, color: '#a7bcb8', marginBottom: '32px', maxWidth: '560px' }}>
              Discover tailored funding solutions and connect with top mentors for 1-on-1 guidance — from idea validation to pitch deck, fundraising and scale-up.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
              {stats.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span
                      style={{
                        width: '46px', height: '46px', borderRadius: '14px',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.14)',
                        color: '#e8f5f1', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 0 18px rgba(26,123,116,0.15)',
                      }}
                    >
                      <Icon size={21} />
                    </span>
                    <span>
                      <span style={{ display: 'block', fontSize: '19px', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>{s.value}</span>
                      <span style={{ display: 'block', fontSize: '12.5px', color: '#8fa8a3', marginTop: '2px' }}>{s.label}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right glass form card */}
          <div
            style={{
              borderRadius: '24px',
              backgroundColor: 'rgba(10,30,26,0.55)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 30px 70px -18px rgba(0,0,0,0.6), 0 0 44px rgba(26,123,116,0.08)',
              padding: '28px 32px 22px 32px',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '36px 8px' }}>
                <span
                  style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    backgroundColor: 'rgba(26,123,116,0.14)', color: '#1a7b74',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '18px', boxShadow: '0 0 36px rgba(26,123,116,0.35)',
                  }}
                >
                  <CheckCircle2 size={34} />
                </span>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
                  You're on the list{name ? `, ${name.split(' ')[0]}` : ''}!
                </h3>
                <p style={{ fontSize: '14.5px', color: '#a7bcb8', lineHeight: 1.6, marginBottom: '26px' }}>
                  Thanks for reaching out — our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ background: 'none', border: '1px solid rgba(255,255,255,0.25)', color: '#ffffff', fontWeight: 700, fontSize: '14px', padding: '12px 28px', borderRadius: '9999px', cursor: 'pointer' }}
                >
                  Send another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '27px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em', marginBottom: '10px' }}>
                  Get Started Today
                </h3>
                <p style={{ fontSize: '14.5px', color: '#8fa8a3', lineHeight: 1.6, marginBottom: '20px' }}>
                  Tell us a bit about your startup. Our team will get back to you within 24 hours.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }} className="cta-form-row">
                  <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name *" className="cta-input" style={fieldStyle} />
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address *" className="cta-input" style={fieldStyle} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }} className="cta-form-row">
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number *" required inputMode="tel" className="cta-input" style={fieldStyle} />
                  <div style={{ position: 'relative' }}>
                    <select
                      required
                      value={stage}
                      onChange={(e) => setStage(e.target.value)}
                      className="cta-input"
                      style={{ ...fieldStyle, appearance: 'none', WebkitAppearance: 'none', color: stage ? '#ffffff' : '#7d8f8c', cursor: 'pointer', paddingRight: '42px' }}
                    >
                      <option value="" disabled>Stage *</option>
                      {stageOptions.map((o) => (
                        <option key={o} value={o} style={{ color: '#0f172a' }}>{o}</option>
                      ))}
                    </select>
                    <ChevronDown size={17} style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: '#c8d8d4', pointerEvents: 'none' }} />
                  </div>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <input required value={startup} onChange={(e) => setStartup(e.target.value)} placeholder="Startup / Project Name *" className="cta-input" style={fieldStyle} />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <textarea value={idea} onChange={(e) => setIdea(e.target.value)} placeholder="Tell us about your idea (optional)" rows={2} className="cta-input" style={{ ...fieldStyle, resize: 'vertical', minHeight: '68px' }} />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    backgroundColor: '#2dd4bf', color: '#052e22',
                    fontWeight: 800, fontSize: '15.5px', padding: '17px',
                    borderRadius: '9999px', border: 'none', cursor: 'pointer',
                    boxShadow: '0 0 0 1px rgba(45,212,191,0.5), 0 14px 44px -6px rgba(45,212,191,0.55)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#14b8a6'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2dd4bf'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <span>Submit & Connect</span>
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </form>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '20px', color: '#7d8f8c', fontSize: '11.5px', lineHeight: 1.5 }}>
              <Lock size={13} style={{ flexShrink: 0 }} />
              <span>Your information is confidential and will only be used by the GHC Growth Lab team.</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-input::placeholder { color: #7d8f8c; opacity: 1; }
        .cta-input:focus { border-color: rgba(26,123,116,0.6) !important; box-shadow: 0 0 0 3px rgba(26,123,116,0.15); }
        @media (max-width: 1024px) {
          .cta-grid { grid-template-columns: 1fr !important; }
          .cta-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
