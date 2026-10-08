import React, { useState, useRef } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Same YouTube Shorts as old site Ghc-website/app/components/Landing/Shorts.jsx
const shorts = [
  { id: '1', title: '"Partnership and LLP Can Be Converted to a Company', thumbnailUrl: 'https://img.youtube.com/vi/iNvn07gjcFk/hqdefault.jpg', videoUrl: 'https://www.youtube.com/shorts/iNvn07gjcFk' },
  { id: '2', title: 'Can NRIs do business in India?', thumbnailUrl: 'https://i.ytimg.com/vi/f4vwruRyXPQ/maxresdefault.jpg', videoUrl: 'https://www.youtube.com/shorts/f4vwruRyXPQ' },
  { id: '3', title: 'Stop chasing investors and start building a product that makes them chase you', thumbnailUrl: 'https://i.ytimg.com/vi/AL3kytunbjg/maxresdefault.jpg', videoUrl: 'https://www.youtube.com/shorts/AL3kytunbjg' },
  { id: '4', title: 'Difference between LLP and Company', thumbnailUrl: 'https://i.ytimg.com/vi/6OFYT-SUUBU/maxresdefault.jpg', videoUrl: 'https://www.youtube.com/shorts/6OFYT-SUUBU' },
  { id: '5', title: 'Foreign Direct Investment', thumbnailUrl: 'https://i.ytimg.com/vi/l6PxaRLHh-c/maxresdefault.jpg', videoUrl: 'https://www.youtube.com/shorts/l6PxaRLHh-c' },
  { id: '6', title: 'The Power of Multiple Expertise in Business', thumbnailUrl: 'https://i.ytimg.com/vi/ZV770pEB-hk/maxresdefault.jpg', videoUrl: 'https://www.youtube.com/shorts/ZV770pEB-hk' },
];

const getEmbedUrl = (url: string) => `https://www.youtube.com/embed/${url.split('/').pop()}?autoplay=1&rel=0`;

const CARD_W = 300;
const CARD_H = 533;
const GAP = 24;

export const ShortsSection: React.FC = () => {
  const [selected, setSelected] = useState<(typeof shorts)[number] | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const close = () => setSelected(null);

  const nudge = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * (CARD_W + GAP), behavior: 'smooth' });
  };

  const renderCard = (s: (typeof shorts)[number]) => (
    <div
      key={s.id}
      onClick={() => setSelected(s)}
      style={{
        width: `${CARD_W}px`,
        height: `${CARD_H}px`,
        flexShrink: 0,
        borderRadius: '22px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        backgroundColor: '#0c2220',
        border: '1px solid #e2e8f0',
        boxShadow: '0 12px 32px -8px rgba(18,86,81,0.18)',
      }}
    >
      <img
        src={s.thumbnailUrl}
        alt={s.title}
        loading="lazy"
        draggable={false}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }}
      />
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.82) 100%)',
        }}
      />
      <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <span style={{ width: '58px', height: '58px', borderRadius: '50%', backgroundColor: '#ffffff', color: '#125651', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 28px rgba(0,0,0,0.35)' }}>
          <Play size={24} fill="#125651" />
        </span>
      </span>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '20px 20px 22px 20px', pointerEvents: 'none' }}>
        <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#ffffff', lineHeight: 1.3, letterSpacing: '-0.01em', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
          {s.title}
        </h3>
      </div>
    </div>
  );

  return (
    <section style={{ width: '100%', backgroundColor: '#f7faf9', padding: '90px 0 100px 0', overflow: 'hidden', borderTop: '1px solid rgba(226,232,240,0.6)' }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#e6f4f1', color: '#1b736b', padding: '6px 14px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '16px' }}>
            GHC SHORTS
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)', fontWeight: 800, lineHeight: 1.2, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Bite-sized <span style={{ color: '#1a7b74' }}>founder knowledge</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#52606d', maxWidth: '620px', margin: '0 auto', lineHeight: 1.6 }}>
            60-second explainers on compliance, fundraising and company building.
          </p>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div
          ref={trackRef}
          className="shorts-marquee"
          style={{ display: 'flex', gap: `${GAP}px`, overflowX: 'auto', padding: '6px 48px 10px 48px', scrollbarWidth: 'none' }}
        >
          <div className="shorts-track" style={{ display: 'flex', gap: `${GAP}px`, width: 'max-content', animation: 'shortsMarquee 42s linear infinite' }}>
            {[0, 1].map((half) => (
              <div key={half} aria-hidden={half === 1} style={{ display: 'flex', gap: `${GAP}px` }}>
                {shorts.map(renderCard)}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => nudge(-1)}
          aria-label="Scroll shorts left"
          style={{
            position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)', zIndex: 5,
            width: '52px', height: '52px', borderRadius: '50%', border: '1px solid #e2e8f0', cursor: 'pointer',
            backgroundColor: '#ffffff', color: '#0f172a',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 10px 28px -8px rgba(18,86,81,0.25)',
          }}
        >
          <ChevronLeft size={26} />
        </button>
        <button
          onClick={() => nudge(1)}
          aria-label="Scroll shorts right"
          style={{
            position: 'absolute', right: '24px', top: '50%', transform: 'translateY(-50%)', zIndex: 5,
            width: '52px', height: '52px', borderRadius: '50%', border: '1px solid #e2e8f0', cursor: 'pointer',
            backgroundColor: '#ffffff', color: '#0f172a',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 10px 28px -8px rgba(18,86,81,0.25)',
          }}
        >
          <ChevronRight size={26} />
        </button>
      </div>

      {selected && (
        <div onClick={close} style={{ position: 'fixed', inset: 0, zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)', padding: '20px' }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', width: '100%', maxWidth: '400px', aspectRatio: '9 / 16' }}>
            <button onClick={close} aria-label="Close video" style={{ position: 'absolute', top: '-48px', right: 0, background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
              <X size={32} />
            </button>
            <iframe
              src={getEmbedUrl(selected.videoUrl)}
              title={selected.title}
              style={{ width: '100%', height: '100%', borderRadius: '12px', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes shortsMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .shorts-marquee::-webkit-scrollbar { display: none; }
        .shorts-marquee:hover .shorts-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .shorts-track { animation: none !important; }
        }
      `}</style>
    </section>
  );
};
