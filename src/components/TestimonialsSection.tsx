import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Thank you so much, Team GHC Growth Lab and CS Manu Francis. Your guidance and support has been incredibly valuable in helping us lay a strong financial foundation during these early stages. It\u2019s rare to find partners who are this committed to helping startups navigate with clarity and confidence.',
    name: 'Vivek Chandran', role: 'Founder & CEO, Risknox.ai', photo: '/img/client_0.jpg',
  },
  {
    quote: 'Heartfelt thanks to CS Manu Francis and the entire team at GHC Growth Lab for all the assistance and support! Big thanks for prompt support throughout!',
    name: 'Naseef Nazar', role: 'Cofounder, Femisafe', photo: '/img/client_1.jpg',
  },
  {
    quote: 'Thank you, CS Manu Francis and GHC Growth Lab, for invaluable support in securing the scale-up seed fund for NaturUp India. Thanks to your tireless efforts and strategic guidance, we secured the capital to propel our venture to new heights.',
    name: 'Antony Pathadan', role: 'Cofounder, NaturUp', photo: '/img/client_2.jpg',
  },
  {
    quote: 'Thank you so much, team GHC Growth Lab and CS Manu Francis for sharing Bhooshan\u2019s JR exciting news and for your heartfelt congratulations!',
    name: 'Sarath Bhooshan', role: 'Founder & CEO, Bhooshan\u2019s Junior', photo: '/img/client_3.jpg',
  },
  {
    quote: 'Thank you so much, team GHC Growth Lab, for being a part of this milestone! Your support in navigating our startup valuation and funding journey has been truly instrumental. Grateful to partner with a team that believes in empowering early-stage founders.',
    name: 'Shibin', role: 'CEO, Rail Rolls', photo: '/img/client_4.jpg',
  },
  {
    quote: 'A sincere thank you to the entire team at GHC Growth Lab for unwavering support in guiding us through fundraising and compliance. Deep gratitude to CS Manu Francis for his personal involvement and dedicated assistance.',
    name: 'Navneet', role: 'Cofounder, Medecro AI', photo: '/img/client_5.jpg',
  },
];

function initials(name: string) {
  return name.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0]).join('').toUpperCase();
}

export const TestimonialsSection: React.FC = () => {
  return (
    <section style={{ width: '100%', backgroundColor: '#ffffff', padding: '90px 0 100px 0', borderTop: '1px solid rgba(226,232,240,0.6)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1b736b', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            FOUNDER LOVE
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)', fontWeight: 800, lineHeight: 1.2, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Founders who <span style={{ color: '#1a7b74' }}>grew with GHC</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#52606d', maxWidth: '620px', margin: '0 auto', lineHeight: 1.6 }}>
            Real stories of funding, compliance and valuation wins — in their own words.
          </p>
        </div>
      </div>

      <div className="testimonial-marquee" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <div className="testimonial-track" style={{ display: 'flex', width: 'max-content', animation: 'testimonialMarquee 55s linear infinite' }}>
          {[0, 1].map((half) => (
            <div key={half} aria-hidden={half === 1} style={{ display: 'flex', gap: '24px', padding: '6px 24px 18px 0', paddingLeft: half === 0 ? '24px' : '0' }}>
              {testimonials.map((t, idx) => (
            <div
              key={idx}
              aria-hidden={idx >= testimonials.length}
              style={{
                width: 'min(400px, 85vw)', flexShrink: 0, borderRadius: '24px', padding: '28px 26px',
                backgroundColor: '#f7faf9', border: '1px solid #e2e8f0',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <Quote size={26} style={{ color: '#99f6e4' }} />
                  <span style={{ display: 'flex', gap: '2px', color: '#f59e0b' }}>
                    {[0, 1, 2, 3, 4].map((s) => (<Star key={s} size={13} fill="#f59e0b" />))}
                  </span>
                </div>
                <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.65, marginBottom: '24px' }}>"{t.quote}"</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #e2e8f0', paddingTop: '18px' }}>
                {(t as { photo?: string }).photo ? (
                  <img
                    src={(t as { photo?: string }).photo}
                    alt={t.name}
                    style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #ccfbf1', flexShrink: 0 }}
                  />
                ) : (
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'radial-gradient(circle at 35% 30%, #177a72 0%, #115651 55%, #073834 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '13px', border: '2px solid #ccfbf1', flexShrink: 0 }}>
                    {initials(t.name)}
                  </div>
                )}
                <div>
                  <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: '#0f172a' }}>{t.name}</h4>
                  <p style={{ fontSize: '12px', color: '#64748b' }}>{t.role}</p>
                </div>
              </div>
            </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '120px', background: 'linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '120px', background: 'linear-gradient(-90deg, #ffffff 0%, rgba(255,255,255,0) 100%)', pointerEvents: 'none' }} />
      </div>

      <style>{`
        @keyframes testimonialMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonial-marquee:hover .testimonial-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .testimonial-track { animation: none !important; }
        }
      `}</style>
    </section>
  );
};
