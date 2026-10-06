import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RightHeroJourney } from './RightHeroJourney';

interface HeroProps {
  onStartJourney?: () => void;
  onTalkToTeam?: () => void;
  onMilestoneClick?: (title: string) => void;
  onMentorClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartJourney,
  onTalkToTeam,
  onMilestoneClick,
  onMentorClick,
}) => {

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '122px 48px 20px 48px',
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
          background: 'linear-gradient(90deg, rgba(247, 250, 249, 0.88) 0%, rgba(247, 250, 249, 0.72) 32%, rgba(247, 250, 249, 0.18) 55%, rgba(247, 250, 249, 0.0) 100%)',
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
            Elevate Your{' '}
            <span
              style={{
                display: 'block',
                color: '#1b7a74',
              }}
            >
              Startup Journey.
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
            Empowering Startups with Strategic Funding Solutions daily to their Unique Needs turning Dreams into Successful Ventures.
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
              onClick={onStartJourney}
              className="btn-primary"
              style={{
                padding: '13px 24px',
                fontSize: '14.5px',
              }}
            >
              <span>Get Funded Now</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onTalkToTeam}
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
              marginTop: 'auto',
              paddingTop: '20px',
            }}
          >
            {[
              { value: '1000+', label: 'Startup Consultations' },
              { value: '300+', label: 'Business Valuations' },
              { value: '100+', label: 'Funding' },
            ].map((stat, idx, arr) => (
              <React.Fragment key={idx}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      fontSize: '28px',
                      fontWeight: '800',
                      color: '#111827',
                      letterSpacing: '-0.5px',
                      lineHeight: '1.1',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#53626c',
                      marginTop: '4px',
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
                {idx < arr.length - 1 && (
                  <div
                    style={{
                      width: '1px',
                      height: '36px',
                      backgroundColor: 'rgba(148, 163, 184, 0.3)',
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
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
            onMilestoneClick={(title) => onMilestoneClick?.(title)}
            onMentorClick={() => onMentorClick?.()}
          />
        </div>
      </div>

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
