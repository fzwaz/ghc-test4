import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2, Gauge } from 'lucide-react';

interface OptionQuestion {
  kind: 'single';
  key: string;
  label: string;
  why: string;
  options: string[];
}

interface FormQuestion {
  kind: 'form';
  key: string;
  label: string;
  why: string;
}

type Question = OptionQuestion | FormQuestion;

const questions: Question[] = [
  {
    kind: 'single',
    key: 'industry',
    label: 'What industry are you in?',
    why: 'Sets the funding benchmark and the compliance framework relevant to your business.',
    options: [
      'Healthcare',
      'Financial Services / BFSI',
      'SaaS / Technology',
      'Manufacturing',
      'Retail / E-commerce',
      'Education',
      'Government / PSU',
      'Other',
    ],
  },
  {
    kind: 'single',
    key: 'stage',
    label: 'What stage is your business at?',
    why: 'Different stages need different capital and advisory — we match the playbook to your stage.',
    options: [
      'Idea / Concept',
      'MVP Built',
      'Early Revenue',
      'Growth Stage',
      'Established MSME',
      'Enterprise',
    ],
  },
  {
    kind: 'single',
    key: 'service',
    label: 'Which service do you need most?',
    why: 'Routes your enquiry to the right specialist team from day one.',
    options: [
      'Investment Banking & Fundraising',
      'Business Valuation & Financial Modelling',
      'Company Setup & Registration',
      'Compliance, Accounting & Taxation',
      'Cross-Border / Global Expansion',
      'Mentorship & Growth Strategy',
    ],
  },
  {
    kind: 'single',
    key: 'fundingType',
    label: 'What type of funding are you looking for?',
    why: 'Equity, debt and grants follow very different processes and timelines.',
    options: [
      'Equity Fundraising',
      'Debt Funding',
      'Grants & Government Schemes',
      'Not Sure Yet — Need Advice',
      'No Funding — Advisory Only',
    ],
  },
  {
    kind: 'single',
    key: 'raiseSize',
    label: 'How much are you looking to raise?',
    why: 'Ticket size decides which investors, banks and instruments we approach for you.',
    options: [
      'Under ₹25 Lakh',
      '₹25 Lakh – ₹1 Crore',
      '₹1 Crore – ₹5 Crore',
      '₹5 Crore+',
      'Not Applicable',
    ],
  },
  {
    kind: 'single',
    key: 'timeline',
    label: 'What is your timeline?',
    why: 'Urgency decides whether we fast-track diligence, documentation and introductions.',
    options: [
      'Immediately',
      '1 – 3 Months',
      '3 – 6 Months',
      'Just Exploring',
    ],
  },
  {
    kind: 'single',
    key: 'raisedBefore',
    label: 'Have you raised funding before?',
    why: 'Prior raises change documentation, valuation and investor expectations.',
    options: ['Yes', 'No', 'Currently Raising'],
  },
  {
    kind: 'form',
    key: 'contact',
    label: 'Where should we send your roadmap?',
    why: 'Your contact details stay confidential — we reply within 24 hours.',
  },
];

const TOTAL = questions.length;

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '14px 18px', borderRadius: '12px',
  border: '1px solid #e2e8f0', fontSize: '14.5px', outline: 'none',
  backgroundColor: '#f8fafc', color: '#0f172a', fontFamily: 'inherit',
};

const monoLabel: React.CSSProperties = {
  fontSize: '11.5px',
  fontWeight: 600,
  letterSpacing: '2.2px',
  color: '#6b7280',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
};

const trustPoints = [
  'Reply within 24 hours',
  '100% confidential',
  'Structured requirement capture',
];

export const ContactPage: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', contactVia: 'Email', message: '' });
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const q = questions[step];
  const answeredCount = questions.filter((qq) => {
    if (qq.kind === 'single') return !!answers[qq.key];
    return submitted || !!(form.name.trim() && form.email.trim());
  }).length;
  const pct = Math.round((answeredCount / TOTAL) * 100);

  const selectOption = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    // Auto-advance for speed, like the reference flow
    window.setTimeout(() => {
      setStep((s) => Math.min(s + 1, TOTAL - 1));
    }, 280);
  };

  const canContinue = () => {
    if (q.kind === 'single') return !!answers[q.key];
    return form.name.trim() !== '' && form.email.trim() !== '';
  };

  const handleContinue = () => {
    if (q.kind === 'form') {
      if (!form.name.trim() || !form.email.trim()) {
        setFormError('Please share at least your name and email so we can reach you.');
        return;
      }
      setFormError('');
      const payload = { answers, contact: form, at: new Date().toISOString() };
      try {
        const existing = JSON.parse(localStorage.getItem('ghc_contact_submissions') || '[]');
        existing.push(payload);
        localStorage.setItem('ghc_contact_submissions', JSON.stringify(existing));
      } catch { /* storage unavailable */ }
      setSubmitted(true);
      return;
    }
    if (canContinue()) setStep((s) => Math.min(s + 1, TOTAL - 1));
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setForm({ name: '', email: '', phone: '', company: '', contactVia: 'Email', message: '' });
    setFormError('');
    setSubmitted(false);
  };

  return (
    <>
      {/* Hero — same system as Programs / Services / Blog heroes */}
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
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '122px 48px 20px 48px' }}>
          <div className="contact-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '64px', alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1a7b74', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '24px' }}>
                Contact Us
              </div>
              <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.6rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '24px' }}>
                <span style={{ fontStyle: 'italic', color: '#1a7b74' }}>Tell us what you need.</span><br />
                <span style={{ color: '#0a0a0a' }}>We&apos;ll map the way.</span>
              </h1>
              <p style={{ fontSize: '17px', color: '#5b6472', maxWidth: '560px', lineHeight: 1.65, marginBottom: '32px' }}>
                Answer {TOTAL} quick questions about your business, funding goals and timeline — so our team arrives at the first call already understanding your requirement.
              </p>
              <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                {trustPoints.map((t, idx) => (
                  <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#5b6472', fontWeight: 500 }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1a7b74', boxShadow: '0 0 10px rgba(26,123,116,0.5)' }} /> {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative', backgroundColor: '#ffffff', borderRadius: '20px', border: '1px solid #e8ecef', boxShadow: '0 30px 70px -20px rgba(15,23,42,0.18)', padding: '36px 34px 28px 34px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={monoLabel}>WHAT HAPPENS NEXT</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', fontWeight: 700, letterSpacing: '2px', color: '#1a7b74', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#1a7b74', boxShadow: '0 0 10px rgba(26,123,116,0.6)' }} /> {TOTAL} STEPS
                </span>
              </div>
              {[
                { n: '01', t: 'Share your requirement', d: 'Industry, stage, service, funding size and timeline.' },
                { n: '02', t: 'Get matched', d: 'A specialist team reviews your answers within 24 hours.' },
                { n: '03', t: 'Receive your roadmap', d: 'A tailored funding & advisory plan on your first call.' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '14px 0', borderTop: i === 0 ? 'none' : '1px solid #eef1f4' }}>
                  <span style={{ width: '34px', height: '34px', borderRadius: '10px', backgroundColor: '#e6f4f1', color: '#1a7b74', fontSize: '13px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.n}</span>
                  <div>
                    <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#0f172a' }}>{s.t}</div>
                    <div style={{ fontSize: '13px', color: '#64748b', marginTop: '2px', lineHeight: 1.5 }}>{s.d}</div>
                  </div>
                </div>
              ))}
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  backgroundColor: '#1a7b74', color: '#ffffff', border: 'none', borderRadius: '12px',
                  padding: '16px 22px', fontWeight: 700, fontSize: '14px', letterSpacing: '1px',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', cursor: 'pointer', marginTop: '18px',
                  boxShadow: '0 14px 30px -8px rgba(26,123,116,0.38)',
                }}
              >
                <span>START THE QUESTIONS</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 1100px) {
            .contact-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* Questionnaire — guided flow like the reference, in site palette */}
      <section id="contact-form" style={{ width: '100%', backgroundColor: '#f7faf9', padding: '40px 48px 100px 48px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '28px', border: '1px solid rgba(226,232,240,0.9)', boxShadow: '0 20px 50px -12px rgba(18,86,81,0.14)', overflow: 'hidden' }}>
            {/* Progress header */}
            <div style={{ padding: '26px 36px 22px 36px', borderBottom: '1px solid #eef1f4' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', backgroundColor: '#e6f4f1', border: '1px solid #99f6e4', color: '#1a7b74', padding: '7px 16px', borderRadius: '9999px', fontSize: '12px', fontWeight: 800, letterSpacing: '1.4px' }}>
                    <Gauge size={13} /> {submitted ? `QUESTION ${TOTAL} OF ${TOTAL}` : `QUESTION ${step + 1} OF ${TOTAL}`}
                  </span>
                  <span style={{ fontSize: '13px', color: '#64748b', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
                    {answeredCount}/{TOTAL} answered
                  </span>
                </div>
                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 700, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>{pct}%</span>
              </div>
              <div style={{ height: '8px', borderRadius: '9999px', backgroundColor: '#eef2f1', overflow: 'hidden', marginBottom: '14px' }}>
                <div style={{ height: '100%', width: `${pct}%`, borderRadius: '9999px', background: 'linear-gradient(90deg, #1a7b74, #2dd4bf)', boxShadow: '0 0 12px rgba(26,123,116,0.5)', transition: 'width 0.4s ease' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {questions.map((_, i) => (
                  <span
                    key={i}
                    style={{
                      width: i === step && !submitted ? '28px' : '10px', height: '10px', borderRadius: '9999px',
                      backgroundColor: submitted || i < step || (questions[i].kind === 'single' && answers[questions[i].key]) ? '#1a7b74' : '#e2e8f0',
                      boxShadow: i === step && !submitted ? '0 0 10px rgba(26,123,116,0.55)' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
                <span style={{ fontSize: '12px', color: '#94a3b8', marginLeft: '10px', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>GHC-aligned</span>
              </div>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '70px 32px' }}>
                <span style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: '#e6f4f1', color: '#1a7b74', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 0 32px rgba(26,123,116,0.25)' }}>
                  <CheckCircle2 size={38} />
                </span>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                  Requirement received{form.name ? `, ${form.name.split(' ')[0]}` : ''}!
                </h2>
                <p style={{ fontSize: '15px', color: '#5b6472', lineHeight: 1.65, maxWidth: '520px', margin: '0 auto 8px auto' }}>
                  Our team will review your answers and reach out via <strong>{form.contactVia.toLowerCase()}</strong> within 24 hours with your tailored roadmap.
                </p>
                <div style={{ display: 'inline-flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', margin: '20px 0 28px 0' }}>
                  {[answers.industry, answers.stage, answers.service].filter(Boolean).map((a, i) => (
                    <span key={i} style={{ fontSize: '12.5px', fontWeight: 700, color: '#1a7b74', backgroundColor: '#eefaf8', border: '1px solid rgba(20,184,166,0.25)', padding: '7px 16px', borderRadius: '9999px' }}>{a}</span>
                  ))}
                </div>
                <div>
                  <button onClick={reset} style={{ background: 'none', border: 'none', color: '#1a7b74', fontWeight: 700, fontSize: '14px', cursor: 'pointer', textDecoration: 'underline' }}>
                    Submit another requirement
                  </button>
                </div>
              </div>
            ) : (
              <div className="contact-body-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '48px', padding: '44px 40px' }}>
                {/* Left — question */}
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '2.4px', color: '#1a7b74', marginBottom: '14px', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
                    QUESTION {String(step + 1).padStart(2, '0')}
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '22px' }}>
                    {q.label}
                  </h2>
                  <div style={{ borderRadius: '14px', backgroundColor: '#f0fdfa', border: '1px solid #99f6e4', padding: '16px 18px', marginBottom: '30px', display: 'flex', gap: '10px' }}>
                    <ShieldCheck size={18} style={{ color: '#1a7b74', flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.6 }}>
                      <strong style={{ color: '#0f172a' }}>Why we ask: </strong>{q.why}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                    <button
                      onClick={() => setStep((s) => Math.max(s - 1, 0))}
                      disabled={step === 0}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px', borderRadius: '9999px',
                        border: '1px solid #e2e8f0', backgroundColor: step === 0 ? '#f8fafc' : '#ffffff',
                        color: step === 0 ? '#cbd5e1' : '#0f172a', fontWeight: 700, fontSize: '14px',
                        cursor: step === 0 ? 'not-allowed' : 'pointer', fontFamily: 'inherit',
                      }}
                    >
                      <ArrowLeft size={15} /> Back
                    </button>
                    <button
                      onClick={handleContinue}
                      disabled={!canContinue()}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 30px', borderRadius: '9999px',
                        border: 'none', backgroundColor: canContinue() ? '#1a7b74' : '#e2e8f0',
                        color: canContinue() ? '#ffffff' : '#94a3b8', fontWeight: 800, fontSize: '14px',
                        cursor: canContinue() ? 'pointer' : 'not-allowed', fontFamily: 'inherit',
                        boxShadow: canContinue() ? '0 10px 24px -8px rgba(26,123,116,0.5)' : 'none',
                      }}
                    >
                      <span>{q.kind === 'form' ? 'Submit' : 'Continue'}</span><ArrowRight size={15} />
                    </button>
                  </div>
                  <p style={{ fontSize: '13px', color: '#94a3b8' }}>
                    {q.kind === 'form' ? 'Fill your details and hit submit — we reply within 24 hours.' : 'Select an option to continue — auto-advances for speed.'}
                  </p>
                </div>

                {/* Right — options or contact form */}
                <div>
                  {q.kind === 'single' ? (
                    <div className="contact-options-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                      {q.options.map((opt) => {
                        const selected = answers[q.key] === opt;
                        return (
                          <button
                            key={opt}
                            onClick={() => selectOption(q.key, opt)}
                            style={{
                              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
                              padding: '20px 20px', borderRadius: '16px', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit',
                              backgroundColor: selected ? '#f0fdfa' : '#ffffff',
                              border: selected ? '1.5px solid #1a7b74' : '1px solid #e2e8f0',
                              boxShadow: selected ? '0 10px 24px -8px rgba(26,123,116,0.3)' : 'none',
                              transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => { if (!selected) { e.currentTarget.style.borderColor = '#99f6e4'; e.currentTarget.style.backgroundColor = '#f8fafc'; } }}
                            onMouseLeave={(e) => { if (!selected) { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.backgroundColor = '#ffffff'; } }}
                          >
                            <span style={{ fontSize: '14.5px', fontWeight: 700, color: selected ? '#125651' : '#0f172a', lineHeight: 1.4 }}>{opt}</span>
                            <span style={{
                              width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                              border: selected ? '7px solid #1a7b74' : '1.5px solid #cbd5e1',
                              backgroundColor: '#ffffff', transition: 'all 0.2s ease',
                            }} />
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="contact-form-grid">
                        <div>
                          <label style={{ ...monoLabel, display: 'block', marginBottom: '6px', fontSize: '10.5px' }}>FULL NAME *</label>
                          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Aanya Sharma" style={inputStyle} />
                        </div>
                        <div>
                          <label style={{ ...monoLabel, display: 'block', marginBottom: '6px', fontSize: '10.5px' }}>COMPANY / STARTUP</label>
                          <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Acme Pvt. Ltd." style={inputStyle} />
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="contact-form-grid">
                        <div>
                          <label style={{ ...monoLabel, display: 'block', marginBottom: '6px', fontSize: '10.5px' }}>EMAIL *</label>
                          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="founder@startup.com" style={inputStyle} />
                        </div>
                        <div>
                          <label style={{ ...monoLabel, display: 'block', marginBottom: '6px', fontSize: '10.5px' }}>PHONE / WHATSAPP</label>
                          <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" style={inputStyle} />
                        </div>
                      </div>
                      <div>
                        <label style={{ ...monoLabel, display: 'block', marginBottom: '6px', fontSize: '10.5px' }}>PREFERRED CONTACT METHOD</label>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                          {['Email', 'Phone', 'WhatsApp'].map((m) => (
                            <button
                              key={m}
                              type="button"
                              onClick={() => setForm({ ...form, contactVia: m })}
                              style={{
                                padding: '10px 22px', borderRadius: '9999px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
                                backgroundColor: form.contactVia === m ? '#1a7b74' : '#ffffff', color: form.contactVia === m ? '#ffffff' : '#475569',
                                border: form.contactVia === m ? '1px solid #1a7b74' : '1px solid #e2e8f0',
                              }}
                            >
                              {m}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label style={{ ...monoLabel, display: 'block', marginBottom: '6px', fontSize: '10.5px' }}>ANYTHING ELSE WE SHOULD KNOW?</label>
                        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} placeholder="Tell us about your requirement in a few lines..." style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} />
                      </div>
                      {formError && <p style={{ fontSize: '13px', color: '#be123c', fontWeight: 600 }}>{formError}</p>}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <p style={{ textAlign: 'center', fontSize: '12.5px', color: '#94a3b8', marginTop: '22px' }}>
            Your answers stay confidential and are only used to prepare your tailored roadmap.
          </p>
        </div>
        <style>{`
          @media (max-width: 960px) {
            .contact-body-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding: 32px 24px !important; }
            .contact-options-grid { grid-template-columns: 1fr !important; }
            .contact-form-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
};
