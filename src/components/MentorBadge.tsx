import React from 'react';

interface MentorBadgeProps {
  onClick?: () => void;
}

export const MentorBadge: React.FC<MentorBadgeProps> = ({ onClick }) => {
  const mentors = [
    {
      name: 'Dr. Arjun Mehta',
      role: 'Ex-VC & Angel Investor',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    {
      name: 'Sarah Joseph',
      role: 'Head of Growth, Unicorn FinTech',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    },
    {
      name: 'Vikram Menon',
      role: 'Serial Founder & Advisor',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div
      onClick={onClick}
      className="glass-badge animate-float"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '14px',
        padding: '10px 18px 10px 12px',
        borderRadius: '24px',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        userSelect: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        boxShadow: '0 12px 32px -4px rgba(18, 86, 81, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.04)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 18px 36px -4px rgba(18, 86, 81, 0.18)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 12px 32px -4px rgba(18, 86, 81, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.04)';
      }}
      title="Click to view mentor network"
    >
      {/* Mentor Avatars Stack */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {mentors.map((m, idx) => (
          <div
            key={idx}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '2.5px solid #ffffff',
              overflow: 'hidden',
              marginLeft: idx === 0 ? '0' : '-12px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
              position: 'relative',
              zIndex: 3 - idx,
              backgroundColor: '#e2e8f0',
            }}
          >
            <img
              src={m.img}
              alt={m.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>

      {/* Text Info */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontSize: '18px',
            fontWeight: '800',
            color: '#125651',
            lineHeight: '1.1',
            letterSpacing: '-0.3px',
          }}
        >
          100+
        </span>
        <span
          style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#475569',
            marginTop: '1px',
            letterSpacing: '0.1px',
          }}
        >
          Expert Mentors
        </span>
      </div>
    </div>
  );
};
