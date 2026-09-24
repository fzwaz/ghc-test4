import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Clock, CheckCircle } from 'lucide-react';

interface CtaBannerProps {
  onStartJourney?: () => void;
  onTalkToTeam?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onStartJourney, onTalkToTeam }) => {
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
          background: 'radial-gradient(circle at 80% 20%, #177068 0%, #115651 45%, #083733 100%)',
          padding: '70px 48px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 25px 60px -15px rgba(18, 86, 81, 0.35)',
        }}
      >
        {/* Ambient Ring Ornaments */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            border: '1.5px solid rgba(255, 255, 255, 0.1)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-40px',
            right: '-40px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: '1px dashed rgba(20, 184, 166, 0.25)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '720px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
              color: '#99f6e4',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '11.5px',
              fontWeight: '700',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            <Sparkles size={13} /> ACCELERATE YOUR STARTUP
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
              fontWeight: '900',
              lineHeight: '1.14',
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '20px',
            }}
          >
            Ready to turn your idea into a venture-backed growth engine?
          </h2>

          <p
            style={{
              fontSize: '16.5px',
              lineHeight: '1.6',
              color: '#ccfbf1',
              marginBottom: '36px',
              maxWidth: '560px',
            }}
          >
            Schedule a 1-on-1 strategic diagnostic with senior venture partners. We evaluate your unit economics, investor readiness, and growth roadmaps.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '36px',
            }}
          >
            <button
              onClick={onStartJourney}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#ffffff',
                color: '#125651',
                fontWeight: '700',
                fontSize: '15px',
                padding: '14px 28px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
              }}
            >
              <span>Schedule Growth Diagnostic</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onTalkToTeam}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(8px)',
                color: '#ffffff',
                fontWeight: '600',
                fontSize: '15px',
                padding: '13px 26px',
                borderRadius: '9999px',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
            >
              Talk to Our Team
            </button>
          </div>

          {/* Reassurance Badges */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              color: '#99f6e4',
              fontSize: '13px',
              fontWeight: '500',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} /> Zero Upfront Equity Dilution
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} /> 24-Hour Response Guarantee
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={16} /> Strict Non-Disclosure (NDA) Protected
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
