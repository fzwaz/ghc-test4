import React from 'react';
import { Calendar, Video, User, Clock, MapPin, ArrowRight } from 'lucide-react';

interface WhatsNextProps {
  onRegisterEvent?: (eventTitle: string) => void;
  onViewAllEvents?: () => void;
}

export const WhatsNext: React.FC<WhatsNextProps> = ({
  onRegisterEvent,
  onViewAllEvents,
}) => {
  const upcomingEvents = [
    {
      month: 'OCT',
      day: '24',
      year: '2026',
      badge: 'Session',
      title: 'Tax Strategy for Growing Businesses',
      description: 'Learn tax planning strategies, compliance essentials and how to optimize for growth.',
      time: '5:00 PM – 6:30 PM IST',
      location: 'Online (Google Meet)',
      type: 'online',
    },
    {
      month: 'NOV',
      day: '02',
      year: '2026',
      badge: 'Panel Discussion',
      title: 'From Idea to Scale: Real Founder Stories',
      description: 'A panel discussion with founders on key lessons, challenges and what it takes to scale.',
      time: '4:00 PM – 5:30 PM IST',
      location: 'GHC Growth Lab, Kochi',
      type: 'offline',
    },
    {
      month: 'NOV',
      day: '15',
      year: '2026',
      badge: 'Networking',
      title: 'Founder Networking Session',
      description: 'An exclusive networking session for founders, operators and investors.',
      time: '4:00 PM – 6:00 PM IST',
      location: 'GHC Growth Lab, Kochi',
      type: 'offline',
    },
  ];

  return (
    <section
      id="whats-next"
      style={{
        position: 'relative',
        width: '100%',
        padding: '72px 24px 84px 24px',
        backgroundColor: '#f7faf9',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
        }}
      >
        {/* Top Header Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '52px',
          }}
        >
          {/* Pill Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#e6f7f0',
              border: '1px solid #d1fae5',
              padding: '6px 16px',
              borderRadius: '9999px',
              marginBottom: '18px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                display: 'inline-block',
                boxShadow: '0 0 6px rgba(16, 185, 129, 0.6)',
              }}
            />
            <span
              style={{
                fontSize: '11.5px',
                fontWeight: 700,
                letterSpacing: '0.8px',
                color: '#065f46',
                textTransform: 'uppercase',
              }}
            >
              UPCOMING AT GHC
            </span>
          </div>

          {/* Main Title */}
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.4vw, 3.1rem)',
              fontWeight: 800,
              color: '#0b1d28',
              letterSpacing: '-0.025em',
              lineHeight: 1.18,
              marginBottom: '14px',
            }}
          >
            What’s happening{' '}
            <span style={{ color: '#0d7a6e' }}>next?</span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '16px',
              color: '#53626c',
              maxWidth: '680px',
              lineHeight: 1.55,
              fontWeight: 450,
            }}
          >
            Join expert-led sessions, workshops, and discussions to gain practical
            insights, build connections, and accelerate your growth.
          </p>
        </div>

        {/* 2-Column Events Layout */}
        <div
          className="whats-next-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.05fr)',
            gap: '32px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Featured Event Card */}
          <div
            className="featured-event-card"
            style={{
              position: 'relative',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1.5px solid #ddede8',
              padding: '36px 36px 32px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 12px 32px -4px rgba(18, 86, 81, 0.06), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
              overflow: 'hidden',
            }}
          >
            {/* Background Decorative Rings in Bottom Right */}
            <div
              style={{
                position: 'absolute',
                right: '-60px',
                bottom: '-60px',
                width: '320px',
                height: '320px',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 320 320" fill="none">
                <circle cx="260" cy="260" r="220" stroke="#dcfce7" strokeWidth="36" opacity="0.45" />
                <circle cx="260" cy="260" r="160" fill="#ecfdf5" fillOpacity="0.75" />
                <circle cx="260" cy="260" r="100" fill="#d1fae5" fillOpacity="0.8" />
              </svg>
            </div>

            {/* Card Content Top Layer */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              {/* Badges Header Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '32px',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    backgroundColor: '#e6f7f0',
                    border: '1px solid #d1fae5',
                    padding: '5px 14px',
                    borderRadius: '9999px',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      display: 'inline-block',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#065f46',
                    }}
                  >
                    Featured Event
                  </span>
                </div>

                <div
                  style={{
                    backgroundColor: '#f1f5f9',
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#64748b',
                  }}
                >
                  Workshop
                </div>
              </div>

              {/* Date & Title Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '76px 1px 1fr',
                  gap: '20px',
                  alignItems: 'center',
                  marginBottom: '32px',
                }}
              >
                {/* Date Stack */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#0f172a',
                      letterSpacing: '0.5px',
                    }}
                  >
                    OCT
                  </span>
                  <span
                    style={{
                      fontSize: '44px',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1,
                      margin: '2px 0',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    18
                  </span>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#94a3b8',
                    }}
                  >
                    2026
                  </span>
                </div>

                {/* Vertical Divider Line */}
                <div
                  style={{
                    width: '1px',
                    height: '70px',
                    backgroundColor: '#e2e8f0',
                  }}
                />

                {/* Title & Description */}
                <div>
                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.25,
                      letterSpacing: '-0.015em',
                      marginBottom: '8px',
                    }}
                  >
                    Financial Planning <br />
                    for Early-Stage Startups
                  </h3>
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: '#64748b',
                      lineHeight: 1.5,
                      fontWeight: 450,
                    }}
                  >
                    A practical session on managing finances, runway planning and scaling your startup.
                  </p>
                </div>
              </div>

              {/* Event Metadata (Date & Online Info) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  padding: '16px 0',
                  borderTop: '1px solid #f1f5f9',
                  borderBottom: '1px solid #f1f5f9',
                  marginBottom: '22px',
                }}
              >
                {/* Date / Time info */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    flex: 1,
                  }}
                >
                  <Calendar
                    size={20}
                    style={{ color: '#0e574c', marginTop: '2px', flexShrink: 0 }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: '13.5px',
                        fontWeight: 700,
                        color: '#0f172a',
                      }}
                    >
                      Oct 18, 2026
                    </div>
                    <div
                      style={{
                        fontSize: '12.5px',
                        color: '#64748b',
                        marginTop: '1px',
                      }}
                    >
                      4:00 PM – 5:00 PM IST
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    width: '1px',
                    height: '32px',
                    backgroundColor: '#e2e8f0',
                  }}
                />

                {/* Online Mode info */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    flex: 1,
                  }}
                >
                  <Video
                    size={20}
                    style={{ color: '#0e574c', marginTop: '2px', flexShrink: 0 }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: '13.5px',
                        fontWeight: 700,
                        color: '#0f172a',
                      }}
                    >
                      Online
                    </div>
                    <div
                      style={{
                        fontSize: '12.5px',
                        color: '#64748b',
                        marginTop: '1px',
                      }}
                    >
                      Google Meet
                    </div>
                  </div>
                </div>
              </div>

              {/* Host / Speaker Profile */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '28px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0e574c',
                    flexShrink: 0,
                  }}
                >
                  <User size={19} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#0f172a',
                    }}
                  >
                    Anna Jain Jose
                  </div>
                  <div
                    style={{
                      fontSize: '12.5px',
                      color: '#64748b',
                    }}
                  >
                    Co-Founder, GHC Growth Lab
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <button
                onClick={() =>
                  onRegisterEvent?.('Financial Planning for Early-Stage Startups')
                }
                className="featured-register-btn"
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  backgroundColor: '#0e574c',
                  color: '#ffffff',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  padding: '13px 24px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 4px 14px rgba(14, 87, 76, 0.22)',
                }}
              >
                <span>Register for this event</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          {/* Right Column: More Upcoming Events */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Header with Title and "View All Events" */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
                padding: '0 4px',
              }}
            >
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 800,
                  color: '#0f172a',
                  letterSpacing: '-0.015em',
                }}
              >
                More Upcoming Events
              </h3>
              <button
                onClick={onViewAllEvents}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'none',
                  border: 'none',
                  color: '#0d7a6e',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  padding: '4px 0',
                  transition: 'transform 0.2s ease, color 0.2s ease',
                }}
                className="view-all-events-btn"
              >
                <span>View All Events</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Stack of 3 Event Cards */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {upcomingEvents.map((evt, idx) => (
                <div
                  key={idx}
                  onClick={() => onRegisterEvent?.(evt.title)}
                  className="upcoming-event-item"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #e5ece9',
                    padding: '18px 22px',
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr auto',
                    gap: '18px',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.22s ease',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                  }}
                >
                  {/* Date Column */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#0f172a',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {evt.month}
                    </span>
                    <span
                      style={{
                        fontSize: '28px',
                        fontWeight: 800,
                        color: '#0f172a',
                        lineHeight: 1,
                        margin: '1px 0',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {evt.day}
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#94a3b8',
                      }}
                    >
                      {evt.year}
                    </span>
                  </div>

                  {/* Details Column */}
                  <div>
                    <h4
                      style={{
                        fontSize: '15.5px',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: '4px',
                        lineHeight: 1.3,
                      }}
                    >
                      {evt.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '12.5px',
                        color: '#64748b',
                        lineHeight: 1.45,
                        marginBottom: '10px',
                      }}
                    >
                      {evt.description}
                    </p>

                    {/* Meta details row */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          fontSize: '12px',
                          color: '#64748b',
                          fontWeight: 500,
                        }}
                      >
                        <Clock size={13.5} style={{ color: '#0e574c' }} />
                        <span>{evt.time}</span>
                      </div>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          fontSize: '12px',
                          color: '#64748b',
                          fontWeight: 500,
                        }}
                      >
                        {evt.type === 'online' ? (
                          <Video size={13.5} style={{ color: '#0e574c' }} />
                        ) : (
                          <MapPin size={13.5} style={{ color: '#0e574c' }} />
                        )}
                        <span>{evt.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Actions Column (Badge & Arrow Button) */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                      height: '100%',
                      gap: '18px',
                    }}
                  >
                    {/* Badge */}
                    <span
                      style={{
                        backgroundColor: '#f1f5f9',
                        color: '#475569',
                        fontSize: '11px',
                        fontWeight: 500,
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {evt.badge}
                    </span>

                    {/* Circular Arrow Button */}
                    <div
                      className="arrow-circle-btn"
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0f172a',
                        backgroundColor: '#ffffff',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Component Scoped CSS for Hover & Responsive Styling */}
      <style>{`
        .featured-register-btn:hover {
          background-color: #093e36 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(14, 87, 76, 0.32) !important;
        }
        .featured-register-btn:active {
          transform: translateY(0);
        }
        .view-all-events-btn:hover {
          color: #095950 !important;
        }
        .view-all-events-btn:hover svg {
          transform: translateX(3px);
          transition: transform 0.2s ease;
        }
        .upcoming-event-item:hover {
          border-color: #bbf7d0 !important;
          box-shadow: 0 8px 22px rgba(18, 86, 81, 0.08) !important;
          transform: translateY(-2px);
        }
        .upcoming-event-item:hover .arrow-circle-btn {
          background-color: #0e574c !important;
          border-color: #0e574c !important;
          color: #ffffff !important;
          transform: scale(1.05);
        }
        @media (max-width: 960px) {
          .whats-next-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .featured-event-card {
            padding: 24px 20px !important;
          }
          .upcoming-event-item {
            padding: 16px 16px !important;
          }
        }
        @media (max-width: 600px) {
          .upcoming-event-item {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .upcoming-event-item > div:last-child {
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
            width: 100% !important;
            border-top: 1px solid #f1f5f9;
            padding-top: 10px;
          }
        }
      `}</style>
    </section>
  );
};
