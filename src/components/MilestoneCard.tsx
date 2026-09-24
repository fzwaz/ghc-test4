import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MilestoneCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  delay?: number;
  isActive?: boolean;
  onClick?: () => void;
  nodePosition?: 'left' | 'bottom' | 'none';
}

export const MilestoneCard: React.FC<MilestoneCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="glass-panel"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '16px 20px',
        borderRadius: '18px',
        backgroundColor: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1.2px solid rgba(255, 255, 255, 0.95)',
        boxShadow: '0 14px 34px -6px rgba(18, 86, 81, 0.09), 0 4px 10px rgba(0, 0, 0, 0.03)',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        width: '185px',
        position: 'relative',
        userSelect: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)';
        e.currentTarget.style.boxShadow = '0 20px 40px -8px rgba(18, 86, 81, 0.16), 0 6px 16px rgba(0, 0, 0, 0.05)';
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 14px 34px -6px rgba(18, 86, 81, 0.09), 0 4px 10px rgba(0, 0, 0, 0.03)';
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.88)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
      }}
    >
      {/* Icon */}
      <div
        style={{
          color: '#16655e',
          marginBottom: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon size={24} strokeWidth={2.2} />
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '16px',
          fontWeight: '700',
          color: '#0f172a',
          lineHeight: '1.2',
          marginBottom: '4px',
          letterSpacing: '-0.2px',
        }}
      >
        {title}
      </h3>

      {/* Subtitle */}
      <p
        style={{
          fontSize: '11.5px',
          color: '#52606d',
          lineHeight: '1.35',
          fontWeight: '450',
        }}
      >
        {subtitle}
      </p>
    </div>
  );
};
