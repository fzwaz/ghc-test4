import React from 'react';
import { Lightbulb, Box, Coins, BarChart3 } from 'lucide-react';
import { MentorBadge } from './MentorBadge';

interface RightHeroJourneyProps {
  onMilestoneClick: (title: string) => void;
  onMentorClick: () => void;
}

export const RightHeroJourney: React.FC<RightHeroJourneyProps> = ({
  onMilestoneClick,
  onMentorClick,
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '540px',
        userSelect: 'none',
      }}
    >
      {/* 1. Top Mentor Badge */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: '42%',
          zIndex: 30,
        }}
      >
        <MentorBadge onClick={onMentorClick} />
      </div>

      {/* 2. Handwritten Annotation & Swooping Arrow */}
      <div
        style={{
          position: 'absolute',
          top: '37%',
          left: '12%',
          zIndex: 25,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-handwriting)',
            fontSize: '23px',
            fontWeight: '600',
            color: '#287973',
            lineHeight: '1.05',
            transform: 'rotate(-12deg)',
            textShadow: '0 1px 2px rgba(255,255,255,0.9)',
          }}
        >
          Your growth
          <br />
          journey with GHC
        </div>
        {/* Curving swoosh arrow */}
        <svg
          width="60"
          height="55"
          viewBox="0 0 60 55"
          fill="none"
          style={{
            position: 'absolute',
            top: '26px',
            left: '110px',
            transform: 'rotate(8deg)',
          }}
        >
          <path
            d="M 5,5 Q 30,12 38,38"
            stroke="#287973"
            strokeWidth="1.7"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 27,34 L 39,40 L 41,28"
            stroke="#287973"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* 3. SVG Growth Line with Gradient, Nodes & Vertical Dotted Connectors */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          pointerEvents: 'none',
          overflow: 'visible',
        }}
        viewBox="0 0 800 540"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="journeyGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#115e59" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="areaFillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.0" />
          </linearGradient>

          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Faint translucent mountain contour fill */}
        <path
          d="M 40,495 Q 110,480 160,472 C 240,460 290,442 345,425 C 430,400 480,380 530,360 C 600,315 650,285 705,295 C 740,300 770,260 792,230 L 792,540 L 40,540 Z"
          fill="url(#areaFillGradient)"
        />

        {/* Vertical Dotted Connector Lines from cards to node points */}
        {/* Under Idea (x: 160) */}
        <line x1="160" y1="415" x2="160" y2="472" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.65" />
        
        {/* Under Build (x: 345) */}
        <line x1="345" y1="355" x2="345" y2="425" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.65" />
        
        {/* Under Fund (x: 530) */}
        <line x1="530" y1="295" x2="530" y2="360" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.65" />
        
        {/* Under Scale (x: 705) */}
        <line x1="705" y1="235" x2="705" y2="295" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.65" />

        {/* Main Smooth Curved Trending Line */}
        <path
          d="M 40,495 C 90,485 125,478 160,472 C 235,460 295,442 345,425 C 425,400 480,380 530,360 C 600,320 655,285 705,295 C 745,300 775,258 790,232"
          stroke="url(#journeyGradient)"
          strokeWidth="2.6"
          fill="none"
          strokeLinecap="round"
        />

        {/* Arrowhead at the end of line */}
        <path
          d="M 778,245 L 794,227 L 771,227 Z"
          fill="#115e59"
        />

        {/* Node 1 Dot (Under Idea) */}
        <circle cx="160" cy="472" r="6" fill="#14b8a6" filter="url(#nodeGlow)" />
        <circle cx="160" cy="472" r="6" fill="#134e4a" />
        <circle cx="160" cy="472" r="2.5" fill="#ffffff" />

        {/* Node 2 Dot (Under Build) */}
        <circle cx="345" cy="425" r="6" fill="#14b8a6" filter="url(#nodeGlow)" />
        <circle cx="345" cy="425" r="6" fill="#134e4a" />
        <circle cx="345" cy="425" r="2.5" fill="#ffffff" />

        {/* Node 3 Dot (Under Fund) */}
        <circle cx="530" cy="360" r="6" fill="#14b8a6" filter="url(#nodeGlow)" />
        <circle cx="530" cy="360" r="6" fill="#134e4a" />
        <circle cx="530" cy="360" r="2.5" fill="#ffffff" />

        {/* Node 4 Dot (Under Scale) */}
        <circle cx="705" cy="295" r="6" fill="#14b8a6" filter="url(#nodeGlow)" />
        <circle cx="705" cy="295" r="6" fill="#134e4a" />
        <circle cx="705" cy="295" r="2.5" fill="#ffffff" />
      </svg>

      {/* 4. The 4 Milestone Cards (More Compact, Shifted Right) */}
      {/* Card 1: Idea */}
      <div
        onClick={() => onMilestoneClick('Idea')}
        style={{
          position: 'absolute',
          top: '55%',
          left: '12%',
          zIndex: 20,
          width: '128px',
          padding: '14px 14px',
          borderRadius: '18px',
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 12px 30px -6px rgba(18, 86, 81, 0.09), 0 2px 5px rgba(0, 0, 0, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="journey-card"
      >
        <div style={{ color: '#125651', marginBottom: '6px' }}>
          <Lightbulb size={21} strokeWidth={2.3} />
        </div>
        <h4 style={{ fontSize: '14.5px', fontWeight: '800', color: '#0f172a', marginBottom: '3px', letterSpacing: '-0.2px' }}>
          Idea
        </h4>
        <p style={{ fontSize: '10.5px', color: '#52606d', lineHeight: '1.3', fontWeight: '500' }}>
          Validate your<br />concept
        </p>
      </div>

      {/* Card 2: Build */}
      <div
        onClick={() => onMilestoneClick('Build')}
        style={{
          position: 'absolute',
          top: '44%',
          left: '35%',
          zIndex: 20,
          width: '132px',
          padding: '14px 14px',
          borderRadius: '18px',
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 12px 30px -6px rgba(18, 86, 81, 0.09), 0 2px 5px rgba(0, 0, 0, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="journey-card"
      >
        <div style={{ color: '#125651', marginBottom: '6px' }}>
          <Box size={21} strokeWidth={2.3} />
        </div>
        <h4 style={{ fontSize: '14.5px', fontWeight: '800', color: '#0f172a', marginBottom: '3px', letterSpacing: '-0.2px' }}>
          Build
        </h4>
        <p style={{ fontSize: '10.5px', color: '#52606d', lineHeight: '1.3', fontWeight: '500' }}>
          Business model<br />& company setup
        </p>
      </div>

      {/* Card 3: Fund */}
      <div
        onClick={() => onMilestoneClick('Fund')}
        style={{
          position: 'absolute',
          top: '33%',
          left: '58%',
          zIndex: 20,
          width: '132px',
          padding: '14px 14px',
          borderRadius: '18px',
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 12px 30px -6px rgba(18, 86, 81, 0.09), 0 2px 5px rgba(0, 0, 0, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="journey-card"
      >
        <div style={{ color: '#125651', marginBottom: '6px' }}>
          <Coins size={21} strokeWidth={2.3} />
        </div>
        <h4 style={{ fontSize: '14.5px', fontWeight: '800', color: '#0f172a', marginBottom: '3px', letterSpacing: '-0.2px' }}>
          Fund
        </h4>
        <p style={{ fontSize: '10.5px', color: '#52606d', lineHeight: '1.3', fontWeight: '500' }}>
          Investor ready<br />with expert support
        </p>
      </div>

      {/* Card 4: Scale */}
      <div
        onClick={() => onMilestoneClick('Scale')}
        style={{
          position: 'absolute',
          top: '21%',
          left: '80%',
          zIndex: 20,
          width: '132px',
          padding: '14px 14px',
          borderRadius: '18px',
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 12px 30px -6px rgba(18, 86, 81, 0.09), 0 2px 5px rgba(0, 0, 0, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="journey-card"
      >
        <div style={{ color: '#125651', marginBottom: '6px' }}>
          <BarChart3 size={21} strokeWidth={2.3} />
        </div>
        <h4 style={{ fontSize: '14.5px', fontWeight: '800', color: '#0f172a', marginBottom: '3px', letterSpacing: '-0.2px' }}>
          Scale
        </h4>
        <p style={{ fontSize: '10.5px', color: '#52606d', lineHeight: '1.3', fontWeight: '500' }}>
          Grow with<br />continuous guidance
        </p>
      </div>

      {/* 5. Stone Ledge Quote */}
      <div
        style={{
          position: 'absolute',
          bottom: '2%',
          right: '8%',
          zIndex: 25,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '2.5px',
            color: 'rgba(255, 255, 255, 0.85)',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-sans)',
          }}
        >
          "IDEAS FIND DIRECTION HERE."
        </span>
        <div
          style={{
            width: '60px',
            height: '1.5px',
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            marginTop: '6px',
            borderRadius: '1px',
          }}
        />
      </div>

      <style>{`
        .journey-card:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 18px 36px -6px rgba(18, 86, 81, 0.16), 0 3px 10px rgba(0, 0, 0, 0.04) !important;
          background-color: rgba(255, 255, 255, 0.98) !important;
          border-color: rgba(20, 184, 166, 0.4) !important;
        }
      `}</style>
    </div>
  );
};
