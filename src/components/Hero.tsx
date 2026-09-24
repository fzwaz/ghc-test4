import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { RightHeroJourney } from './RightHeroJourney';
import { StatsSection } from './StatsSection';
import { ContactModal } from './ContactModal';

interface HeroProps {
  onStartJourney?: () => void;
  onTalkToTeam?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartJourney, onTalkToTeam }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState('Growth Advisory');

  const handleMilestoneClick = (title: string) => {
    setModalTopic(`${title} Stage Advisory`);
    setModalOpen(true);
  };

  const handleStart = () => {
    if (onStartJourney) {
      onStartJourney();
    } else {
      setModalTopic('Start Growth Journey');
      setModalOpen(true);
    }
  };

  const handleTalk = () => {
    if (onTalkToTeam) {
      onTalkToTeam();
    } else {
      setModalTopic('Talk to Strategy Team');
      setModalOpen(true);
    }
  };

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 'calc(100vh - 75px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '10px 48px 36px 48px',
        maxWidth: '1440px',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      {/* Background Scenic Landscape Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'right bottom',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />

      {/* Gentle Gradient Wash for Ultra Crisp Text on the Left */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(247, 250, 249, 0.96) 0%, rgba(247, 250, 249, 0.90) 36%, rgba(247, 250, 249, 0.25) 58%, rgba(247, 250, 249, 0.0) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Main Hero Container Grid */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: 'minmax(400px, 460px) 1fr',
          gap: '72px',
          alignItems: 'center',
          width: '100%',
          flex: 1,
        }}
        className="hero-grid"
      >
        {/* Left Column: Hero Typography & Actions */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingRight: '12px',
          }}
        >
          {/* Pill Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#e3f3f0',
              color: '#1b736b',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              marginBottom: '18px',
              boxShadow: '0 2px 8px rgba(18, 86, 81, 0.06)',
            }}
          >
            FOR STARTUP FOUNDERS
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 3.8vw, 3.5rem)',
              fontWeight: '800',
              lineHeight: '1.14',
              letterSpacing: '-0.03em',
              color: '#0f172a',
              marginBottom: '18px',
            }}
          >
            From Idea to a{' '}
            <span
              style={{
                display: 'block',
                color: '#1b7a74',
              }}
            >
              Business That Grows.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '15.5px',
              lineHeight: '1.6',
              color: '#475569',
              fontWeight: '450',
              marginBottom: '28px',
              maxWidth: '460px',
            }}
          >
            GHC Growth Lab helps startup founders turn ideas into scalable businesses through expert mentorship, strategy, funding support and end-to-end growth advisory.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '36px',
            }}
          >
            <button
              onClick={handleStart}
              className="btn-primary"
              style={{
                padding: '13px 24px',
                fontSize: '14.5px',
              }}
            >
              <span>Start Your Growth Journey</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={handleTalk}
              className="btn-secondary"
              style={{
                padding: '12px 22px',
                fontSize: '14.5px',
              }}
            >
              Talk to Our Team
            </button>
          </div>

          {/* Bottom Stats Row */}
          <StatsSection />
        </div>

        {/* Right Column: Exact Match Journey Canvas */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: '520px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <RightHeroJourney
            onMilestoneClick={handleMilestoneClick}
            onMentorClick={() => {
              setModalTopic('Mentor Network');
              setModalOpen(true);
            }}
          />
        </div>
      </div>

      {/* Modal Dialog */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTopic={modalTopic}
      />

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1100px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};
