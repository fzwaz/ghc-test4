import React, { useState } from 'react';
import { Sparkles, Calendar, Star, ExternalLink } from 'lucide-react';

interface MentorsSectionProps {
  onBookMentor?: (mentorName: string) => void;
}

export const MentorsSection: React.FC<MentorsSectionProps> = ({ onBookMentor }) => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Fintech & Banking', 'B2B SaaS', 'AI & DeepTech', 'D2C & Consumer'];

  const mentors = [
    {
      name: 'Dr. Arjun Mehta',
      role: 'Former Partner @ Sequoia Surge',
      company: 'Angel Investor in 35+ Startups',
      category: 'Fintech & Banking',
      rating: '4.98',
      sessions: '140+ sessions',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
      expertise: ['Series A Pitching', 'Valuation Modeling', 'Fintech Regulations'],
    },
    {
      name: 'Sarah Joseph',
      role: 'VP of Growth @ Razorpay (Ex)',
      company: 'Growth Advisor & Board Member',
      category: 'B2B SaaS',
      rating: '5.0',
      sessions: '190+ sessions',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
      expertise: ['GTM Playbooks', 'PLG Acquisition', 'Unit Economics'],
    },
    {
      name: 'Vikram Menon',
      role: 'Founder & CEO (Exited for $85M)',
      company: 'Serial Tech Entrepreneur',
      category: 'AI & DeepTech',
      rating: '4.95',
      sessions: '110+ sessions',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
      expertise: ['0-to-1 Product', 'AI Automation', 'Enterprise Sales'],
    },
    {
      name: 'Ananya Roy',
      role: 'Head of Brand & D2C Growth',
      company: 'Ex-Nykaa, Advisory Council',
      category: 'D2C & Consumer',
      rating: '4.99',
      sessions: '160+ sessions',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
      expertise: ['CAC Optimization', 'Omnichannel Strategy', 'Brand Retention'],
    },
  ];

  const filtered = activeTab === 'All' ? mentors : mentors.filter((m) => m.category === activeTab);

  return (
    <section
      id="mentors"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#f7faf9',
        padding: '90px 48px 100px 48px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1380px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
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
              marginBottom: '16px',
            }}
          >
            <Sparkles size={12} /> VENTURE MENTOR NETWORK
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              maxWidth: '700px',
            }}
          >
            World-class operators & investors{' '}
            <span style={{ color: '#1a7b74' }}>in your corner.</span>
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: '#52606d',
              maxWidth: '580px',
              lineHeight: '1.6',
            }}
          >
            Gain unfiltered advice, investor connections, and execution guidance from 100+ proven founders and venture partners.
          </p>

          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '32px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  fontSize: '13.5px',
                  fontWeight: '600',
                  border: activeTab === cat ? '1.5px solid #125651' : '1px solid #e2e8f0',
                  backgroundColor: activeTab === cat ? '#125651' : '#ffffff',
                  color: activeTab === cat ? '#ffffff' : '#475569',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === cat ? '0 4px 12px rgba(18, 86, 81, 0.2)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mentors Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '24px',
          }}
        >
          {filtered.map((mentor, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                borderRadius: '24px',
                padding: '24px',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 10px 28px -6px rgba(18, 86, 81, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(18, 86, 81, 0.16)';
                e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 28px -6px rgba(18, 86, 81, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.9)';
              }}
            >
              <div>
                {/* Top Profile Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '2.5px solid #ccfbf1',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={mentor.img}
                      alt={mentor.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#0f172a' }}>
                        {mentor.name}
                      </h3>
                      <ExternalLink size={13} style={{ color: '#0d9488', cursor: 'pointer' }} />
                    </div>
                    <p style={{ fontSize: '12px', fontWeight: '600', color: '#16655e', marginTop: '2px' }}>
                      {mentor.role}
                    </p>
                    <p style={{ fontSize: '11px', color: '#64748b' }}>
                      {mentor.company}
                    </p>
                  </div>
                </div>

                {/* Rating & Sessions Pill */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderRadius: '12px',
                    backgroundColor: '#f8fafc',
                    marginBottom: '16px',
                    fontSize: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b', fontWeight: '700' }}>
                    <Star size={13} fill="#f59e0b" />
                    <span>{mentor.rating}</span>
                  </div>
                  <span style={{ color: '#64748b', fontWeight: '500' }}>{mentor.sessions}</span>
                </div>

                {/* Expertise tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                  {mentor.expertise.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#134e4a',
                        backgroundColor: '#e6f4f1',
                        padding: '4px 9px',
                        borderRadius: '6px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Book button */}
              <button
                onClick={() => onBookMentor?.(mentor.name)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '11px',
                  borderRadius: '12px',
                  backgroundColor: '#f0fdfa',
                  color: '#125651',
                  border: '1px solid #ccfbf1',
                  fontWeight: '700',
                  fontSize: '13.5px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#125651';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f0fdfa';
                  e.currentTarget.style.color = '#125651';
                }}
              >
                <Calendar size={14} />
                <span>Book 1-on-1 Mentorship</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
