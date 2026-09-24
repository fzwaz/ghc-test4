import React, { useEffect, useState } from 'react';

export const StatsSection: React.FC = () => {
  const [counts, setCounts] = useState({ startups: 0, mentors: 0, funds: 0 });

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const steps = 40;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start++;
      const progress = Math.min(start / steps, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        startups: Math.floor(ease * 500),
        mentors: Math.floor(ease * 100),
        funds: Math.floor(ease * 500),
      });

      if (progress >= 1) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      value: `${counts.startups}+`,
      label: 'Startups Supported',
    },
    {
      value: `${counts.mentors}+`,
      label: 'Expert Mentors',
    },
    {
      value: `₹${counts.funds}Cr+`,
      label: 'Funds Facilitated',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
        marginTop: 'auto',
        paddingTop: '20px',
      }}
    >
      {stats.map((stat, idx) => (
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

          {idx < stats.length - 1 && (
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
  );
};
