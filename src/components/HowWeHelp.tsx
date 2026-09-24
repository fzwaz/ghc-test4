import React, { useState } from 'react';
import { 
  ArrowRight, 
  Compass, 
  Coins, 
  BarChart3, 
  FileCheck2, 
  Users
} from 'lucide-react';
import { StatsSection } from './StatsSection';

interface HowWeHelpProps {
  onServiceClick?: (serviceName: string) => void;
  onExploreServices?: () => void;
  onTalkToTeam?: () => void;
}

export const HowWeHelp: React.FC<HowWeHelpProps> = ({
  onServiceClick,
  onExploreServices,
  onTalkToTeam,
}) => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Strategy & Advisory',
      desc: 'Turn your vision into a clear, realistic and actionable strategy.',
      icon: Compass,
      position: { top: '3%', left: '50%', transform: 'translateX(-50%)' }, // Top center
      lineAngle: -90,
      hubDot: { cx: 300, cy: 190 },
      cardWidth: '190px',
    },
    {
      id: 2,
      title: 'Funding & Investor Readiness',
      desc: 'Prepare, pitch and connect with the right investors.',
      icon: Coins,
      position: { top: '24%', right: '2%' }, // Top Right
      lineAngle: -20,
      hubDot: { cx: 380, cy: 260 },
      cardWidth: '190px',
    },
    {
      id: 3,
      title: 'Marketing & Growth',
      desc: 'Build your brand, reach the right users and accelerate growth.',
      icon: BarChart3,
      position: { bottom: '4%', right: '10%' }, // Bottom Right
      lineAngle: 50,
      hubDot: { cx: 360, cy: 345 },
      cardWidth: '190px',
    },
    {
      id: 4,
      title: 'Business & Compliance',
      desc: 'Build with the right legal, financial and operational foundation.',
      icon: FileCheck2,
      position: { bottom: '4%', left: '10%' }, // Bottom Left
      lineAngle: 130,
      hubDot: { cx: 240, cy: 345 },
      cardWidth: '190px',
    },
    {
      id: 5,
      title: 'Mentorship',
      desc: 'Get guidance from experienced founders, operators and industry experts.',
      icon: Users,
      position: { top: '28%', left: '2%' }, // Mid Left
      lineAngle: 180,
      hubDot: { cx: 220, cy: 260 },
      cardWidth: '190px',
    },
  ];

  return (
    <section
      id="services"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '80px 48px 90px 48px',
        overflow: 'hidden',
        borderTop: '1px solid rgba(226, 232, 240, 0.6)',
      }}
    >
      {/* Subtle Background Pattern (Teal Grid Dots) */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '40px',
          width: '180px',
          height: '180px',
          backgroundImage: 'radial-gradient(#14b8a6 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          opacity: 0.25,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '40px',
          width: '140px',
          height: '140px',
          backgroundImage: 'radial-gradient(#14b8a6 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          opacity: 0.2,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(400px, 480px) 1fr',
          gap: '70px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 10,
        }}
        className="how-we-help-grid"
      >
        {/* Left Column: Heading & Info */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* Badge */}
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
              marginBottom: '20px',
            }}
          >
            HOW WE HELP
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.6rem)',
              fontWeight: '800',
              lineHeight: '1.14',
              letterSpacing: '-0.03em',
              color: '#0f172a',
              marginBottom: '20px',
            }}
          >
            One partner.
            <br />
            Every{' '}
            <span style={{ color: '#1a7b74' }}>
              growth need.
            </span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.65',
              color: '#52606d',
              fontWeight: '450',
              marginBottom: '36px',
              maxWidth: '460px',
            }}
          >
            GHC Growth Lab provides end-to-end support for startup founders — from strategic guidance and mentorship to funding, compliance and long-term growth.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            <button
              onClick={onExploreServices}
              className="btn-primary"
              style={{
                padding: '13px 26px',
                fontSize: '15px',
              }}
            >
              <span>Explore Our Services</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onTalkToTeam}
              className="btn-secondary"
              style={{
                padding: '12px 24px',
                fontSize: '15px',
              }}
            >
              Talk to Our Team
            </button>
          </div>

          {/* Bottom Stats */}
          <StatsSection />
        </div>

        {/* Right Column: Orbital Center Hub & 5 Orbiting Service Cards */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '620px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="orbital-container"
        >
          {/* SVG Orbital Background Rings & Spoke Connectors */}
          <svg
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              zIndex: 5,
              pointerEvents: 'none',
              overflow: 'visible',
            }}
            viewBox="0 0 600 600"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.35" />
                <stop offset="60%" stopColor="#14b8a6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Faint Outer Orbital Track */}
            <circle
              cx="300"
              cy="300"
              r="260"
              stroke="#cbd5e1"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              fill="none"
              opacity="0.6"
            />

            {/* Mid Orbital Track with smooth teal arc */}
            <circle
              cx="300"
              cy="300"
              r="215"
              stroke="#e2e8f0"
              strokeWidth="1"
              fill="none"
              opacity="0.8"
            />
            <path
              d="M 120,200 A 215 215 0 0 1 480,200"
              stroke="#2dd4bf"
              strokeWidth="1.5"
              fill="none"
              opacity="0.7"
            />

            {/* Inner Orbital Track */}
            <circle
              cx="300"
              cy="300"
              r="150"
              stroke="#99f6e4"
              strokeWidth="1.2"
              strokeDasharray="3 3"
              fill="none"
              opacity="0.75"
            />

            {/* Radial Hub Glow */}
            <circle cx="300" cy="300" r="110" fill="url(#hubGlow)" />

            {/* Spoke Connectors & Node Dots */}
            {services.map((s, idx) => (
              <g key={idx}>
                {/* Spoke Line from Center to Hub Dot */}
                <line
                  x1="300"
                  y1="300"
                  x2={s.hubDot.cx}
                  y2={s.hubDot.cy}
                  stroke={hoveredService === s.id ? '#0d9488' : '#99f6e4'}
                  strokeWidth={hoveredService === s.id ? '2' : '1.2'}
                  strokeDasharray={hoveredService === s.id ? 'none' : '3 3'}
                  opacity={hoveredService === s.id ? 1 : 0.7}
                  style={{ transition: 'all 0.3s ease' }}
                />
                {/* Hub Anchor Node Dot */}
                <circle
                  cx={s.hubDot.cx}
                  cy={s.hubDot.cy}
                  r={hoveredService === s.id ? 5.5 : 4}
                  fill="#134e4a"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  style={{ transition: 'all 0.3s ease' }}
                />
              </g>
            ))}

            {/* Decorative Arc accents */}
            <circle cx="210" cy="110" r="2.5" fill="#14b8a6" opacity="0.6" />
            <circle cx="490" cy="460" r="2.5" fill="#14b8a6" opacity="0.6" />
          </svg>

          {/* Center GHC Growth Lab Sphere Hub */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '128px',
              height: '128px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 30%, #177a72 0%, #115651 55%, #073834 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 25,
              boxShadow: '0 16px 36px -4px rgba(18, 86, 81, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.4), 0 0 0 8px rgba(20, 184, 166, 0.12)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.06)';
              e.currentTarget.style.boxShadow = '0 20px 44px -4px rgba(18, 86, 81, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.5), 0 0 0 12px rgba(20, 184, 166, 0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
              e.currentTarget.style.boxShadow = '0 16px 36px -4px rgba(18, 86, 81, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.4), 0 0 0 8px rgba(20, 184, 166, 0.12)';
            }}
            onClick={onExploreServices}
          >
            <span
              style={{
                color: '#ffffff',
                fontSize: '22px',
                fontWeight: '900',
                letterSpacing: '-0.3px',
                lineHeight: '1',
              }}
            >
              GHC
            </span>
            <span
              style={{
                color: '#ccfbf1',
                fontSize: '11px',
                fontWeight: '600',
                marginTop: '4px',
                letterSpacing: '0.2px',
              }}
            >
              Growth Lab
            </span>
          </div>

          {/* The 5 Orbiting Service Cards */}
          {services.map((s) => (
            <div
              key={s.id}
              onClick={() => onServiceClick?.(s.title)}
              onMouseEnter={() => setHoveredService(s.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{
                position: 'absolute',
                ...s.position,
                width: s.cardWidth,
                padding: '16px 16px',
                borderRadius: '20px',
                backgroundColor: '#ffffff',
                boxShadow: hoveredService === s.id
                  ? '0 20px 40px -8px rgba(18, 86, 81, 0.18), 0 4px 12px rgba(0, 0, 0, 0.04)'
                  : '0 12px 30px -6px rgba(18, 86, 81, 0.08), 0 2px 6px rgba(0, 0, 0, 0.03)',
                border: hoveredService === s.id
                  ? '1.2px solid rgba(20, 184, 166, 0.5)'
                  : '1px solid rgba(226, 232, 240, 0.9)',
                transform: hoveredService === s.id
                  ? (s.position.transform ? `${s.position.transform} translateY(-6px) scale(1.03)` : 'translateY(-6px) scale(1.03)')
                  : (s.position.transform || 'none'),
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: 20,
                cursor: 'pointer',
              }}
            >
              {/* Circular Icon Badge */}
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#e6f4f1',
                  color: '#125651',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                }}
              >
                <s.icon size={19} strokeWidth={2.3} />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '14.5px',
                  fontWeight: '800',
                  color: '#0f172a',
                  lineHeight: '1.25',
                  marginBottom: '6px',
                  letterSpacing: '-0.2px',
                }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '11px',
                  color: '#52606d',
                  lineHeight: '1.4',
                  fontWeight: '450',
                  marginBottom: '10px',
                }}
              >
                {s.desc}
              </p>

              {/* Arrow Button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: hoveredService === s.id ? '#125651' : '#e6f4f1',
                    color: hoveredService === s.id ? '#ffffff' : '#125651',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <ArrowRight size={13} strokeWidth={2.4} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1100px) {
          .how-we-help-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
          .orbital-container {
            height: 600px !important;
          }
        }
        @media (max-width: 640px) {
          .orbital-container {
            height: auto !important;
            min-height: 520px !important;
          }
        }
      `}</style>
    </section>
  );
};
