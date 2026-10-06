import React, { useEffect, useState } from 'react';
import { Calendar, Video, User, Clock, MapPin, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { events as seedEvents, type GhcEvent } from '../data/events';
import { fetchUpcomingEvents } from '../lib/sanity';
import { AllEventsModal } from './AllEventsModal';

interface WhatsNextProps {
  onRegisterEvent?: (eventTitle: string) => void;
  onViewAllEvents?: () => void;
}

// Helper to parse date parts from GhcEvent
function parseEventDate(evt: GhcEvent) {
  if (evt.eventDate) {
    try {
      const d = new Date(evt.eventDate);
      if (!isNaN(d.getTime())) {
        return {
          month: d.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
          day: String(d.getDate()).padStart(2, '0'),
          year: String(d.getFullYear()),
          time: d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }) + ' IST',
        };
      }
    } catch {
      // fallback
    }
  }

  // Parse from schedule string like "17 Oct 2026 · 6 PM IST" or "Oct 18, 2026"
  const match = evt.schedule.match(/(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})/);
  if (match) {
    return {
      day: match[1].padStart(2, '0'),
      month: match[2].toUpperCase(),
      year: match[3],
      time: evt.schedule.split('·')[1]?.trim() || evt.schedule,
    };
  }

  return {
    month: 'UPCOMING',
    day: '•',
    year: '2026',
    time: evt.schedule,
  };
}

export const WhatsNext: React.FC<WhatsNextProps> = ({
  onRegisterEvent,
  onViewAllEvents,
}) => {
  const [eventsList, setEventsList] = useState<GhcEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAllEventsOpen, setIsAllEventsOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function loadEvents() {
      setLoading(true);
      try {
        const sanityEvents = await fetchUpcomingEvents();
        if (!isMounted) return;
        if (sanityEvents && sanityEvents.length > 0) {
          setEventsList(sanityEvents);
        } else {
          setEventsList(seedEvents);
        }
      } catch (err) {
        console.warn('Failed to fetch events from Sanity, falling back to seed events:', err);
        if (isMounted) {
          setEventsList(seedEvents);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadEvents();
    return () => {
      isMounted = false;
    };
  }, []);

  // Determine featured event: either explicitly featured == true, or first event
  const featuredEvent = eventsList.find((e) => e.featured) || eventsList[0] || null;
  const moreEvents = eventsList.filter((e) => e !== featuredEvent).slice(0, 3);

  const featuredDate = featuredEvent ? parseEventDate(featuredEvent) : null;

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

        {loading ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '64px 20px',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid #e2e8f0',
            }}
          >
            <Loader2 size={32} style={{ color: '#0d7a6e', marginBottom: '12px', animation: 'spin 1s linear infinite' }} />
            <p style={{ fontSize: '14.5px', color: '#64748b' }}>Loading upcoming events...</p>
            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
          </div>
        ) : (
          /* 2-Column Events Layout: Always preserved */
          <div
            className="whats-next-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.05fr)',
              gap: '32px',
              alignItems: 'stretch',
            }}
          >
            {/* Left Column: Featured Event Card (or Placeholder if none) */}
            {featuredEvent ? (
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
                  minHeight: '440px',
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
                      {featuredEvent.badge || 'Workshop'}
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
                        {featuredDate?.month || 'OCT'}
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
                        {featuredDate?.day || '18'}
                      </span>
                      <span
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#94a3b8',
                        }}
                      >
                        {featuredDate?.year || '2026'}
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
                        {featuredEvent.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '13.5px',
                          color: '#64748b',
                          lineHeight: 1.5,
                          fontWeight: 450,
                        }}
                      >
                        {featuredEvent.desc}
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
                          {featuredDate ? `${featuredDate.month} ${featuredDate.day}, ${featuredDate.year}` : featuredEvent.schedule}
                        </div>
                        <div
                          style={{
                            fontSize: '12.5px',
                            color: '#64748b',
                            marginTop: '1px',
                          }}
                        >
                          {featuredDate?.time || featuredEvent.schedule}
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
                          {featuredEvent.mode}
                        </div>
                        <div
                          style={{
                            fontSize: '12.5px',
                            color: '#64748b',
                            marginTop: '1px',
                          }}
                        >
                          {featuredEvent.location || (featuredEvent.mode.toLowerCase().includes('online') ? 'Google Meet' : 'GHC Growth Lab')}
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
                        {featuredEvent.speakerName || 'GHC Growth Lab Team'}
                      </div>
                      <div
                        style={{
                          fontSize: '12.5px',
                          color: '#64748b',
                        }}
                      >
                        {featuredEvent.speakerRole || 'GHC GrowthLab Partners'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <button
                    onClick={() =>
                      onRegisterEvent?.(featuredEvent.title)
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
            ) : (
              /* Fallback Featured Card (Matches empty state design) */
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  border: '1.5px solid #ddede8',
                  padding: '32px 36px 36px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 12px 32px -4px rgba(18, 86, 81, 0.04), 0 4px 12px -2px rgba(0, 0, 0, 0.02)',
                  overflow: 'hidden',
                  minHeight: '440px',
                }}
              >
                {/* Background Decorative Rings in Bottom Left */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-60px',
                    bottom: '-60px',
                    width: '240px',
                    height: '240px',
                    pointerEvents: 'none',
                    zIndex: 0,
                  }}
                >
                  <svg width="100%" height="100%" viewBox="0 0 240 240" fill="none">
                    <circle cx="40" cy="200" r="180" stroke="#dcfce7" strokeWidth="28" opacity="0.55" />
                    <circle cx="40" cy="200" r="120" stroke="#ecfdf5" strokeWidth="22" opacity="0.8" />
                    <circle cx="40" cy="200" r="70" fill="#d1fae5" fillOpacity="0.5" />
                  </svg>
                </div>

                {/* Top Header Badges */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    zIndex: 2,
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
                    Stay Tuned
                  </div>
                </div>

                {/* Center Graphic & Text */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '24px 0',
                    position: 'relative',
                    zIndex: 2,
                    flex: 1,
                  }}
                >
                  {/* Calendar with Clock Illustration */}
                  <div
                    style={{
                      position: 'relative',
                      width: '136px',
                      height: '136px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    {/* Soft mint circular glow */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#e6f7f0',
                      }}
                    />

                    {/* Sparkles around calendar */}
                    <svg
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
                      viewBox="0 0 136 136"
                      fill="none"
                    >
                      {/* Left sparkle */}
                      <path d="M 22 56 Q 26 56 26 52 Q 26 56 30 56 Q 26 56 26 60 Q 26 56 22 56 Z" fill="#0d9488" />
                      <circle cx="34" cy="44" r="1.5" fill="#0d9488" />
                      {/* Right sparkle */}
                      <path d="M 112 40 Q 116 40 116 36 Q 116 40 120 40 Q 116 40 116 44 Q 116 40 112 40 Z" fill="#0d9488" />
                      <circle cx="104" cy="30" r="1.5" fill="#0d9488" />
                    </svg>

                    {/* Calendar + Clock vector */}
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ position: 'relative', zIndex: 2 }}>
                      {/* Calendar Body */}
                      <rect x="14" y="18" width="48" height="44" rx="10" fill="#ffffff" stroke="#1e3e3b" strokeWidth="2.2" />
                      <line x1="14" y1="30" x2="62" y2="30" stroke="#1e3e3b" strokeWidth="2" strokeLinecap="round" />
                      {/* Rings on top */}
                      <line x1="26" y1="12" x2="26" y2="20" stroke="#1e3e3b" strokeWidth="2.4" strokeLinecap="round" />
                      <line x1="50" y1="12" x2="50" y2="20" stroke="#1e3e3b" strokeWidth="2.4" strokeLinecap="round" />
                      {/* Clock overlapping bottom right */}
                      <circle cx="56" cy="54" r="14" fill="#ffffff" stroke="#1e3e3b" strokeWidth="2.2" />
                      <path d="M 56 46 V 54 H 61" stroke="#1e3e3b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <h3
                    style={{
                      fontSize: '19.5px',
                      fontWeight: 800,
                      color: '#0f172a',
                      letterSpacing: '-0.015em',
                      marginBottom: '8px',
                      marginTop: 0,
                    }}
                  >
                    No featured event at the moment
                  </h3>

                  <p
                    style={{
                      fontSize: '13.5px',
                      color: '#64748b',
                      lineHeight: 1.55,
                      maxWidth: '380px',
                      margin: 0,
                    }}
                  >
                    We're curating exciting sessions, workshops and discussions for founders and businesses. Stay tuned for updates.
                  </p>
                </div>

                {/* Bottom empty spacing to match flex layout */}
                <div style={{ height: '6px' }} />
              </div>
            )}

            {/* Right Column: More Upcoming Events (Top aligned) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: '16px',
              }}
            >
              {/* Header with Title and "View All Events" */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 4px',
                }}
              >
                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: 800,
                    color: '#0f172a',
                    letterSpacing: '-0.015em',
                    margin: 0,
                  }}
                >
                  More Upcoming Events
                </h3>
                <button
                  onClick={() => {
                    if (onViewAllEvents) {
                      onViewAllEvents();
                    } else {
                      setIsAllEventsOpen(true);
                    }
                  }}
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

              {/* Stack of Event Cards or Future Placeholder */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                {moreEvents.length > 0 ? (
                  moreEvents.map((evt) => {
                    const d = parseEventDate(evt);
                    const isOnline = evt.mode.toLowerCase().includes('online');
                    return (
                      <div
                        key={evt.id}
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
                            {d.month}
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
                            {d.day}
                          </span>
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: 600,
                              color: '#94a3b8',
                            }}
                          >
                            {d.year}
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
                            {evt.desc}
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
                              <span>{d.time}</span>
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
                              {isOnline ? (
                                <Video size={13.5} style={{ color: '#0e574c' }} />
                              ) : (
                                <MapPin size={13.5} style={{ color: '#0e574c' }} />
                              )}
                              <span>{evt.location || evt.mode}</span>
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
                            {evt.badge || 'Session'}
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
                    );
                  })
                ) : (
                  /* Placeholder when no additional events exist (Matches empty state design) */
                  <div
                    style={{
                      position: 'relative',
                      backgroundColor: '#ffffff',
                      borderRadius: '24px',
                      border: '1.5px solid #ddede8',
                      padding: '40px 36px',
                      minHeight: '388px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      overflow: 'hidden',
                      boxShadow: '0 12px 32px -4px rgba(18, 86, 81, 0.04), 0 4px 12px -2px rgba(0, 0, 0, 0.02)',
                    }}
                  >
                    {/* Decorative Dot Grid in Bottom Right */}
                    <div
                      style={{
                        position: 'absolute',
                        right: '32px',
                        bottom: '30px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 5px)',
                        gap: '14px',
                        pointerEvents: 'none',
                        opacity: 0.5,
                      }}
                    >
                      {Array.from({ length: 12 }).map((_, i) => (
                        <span
                          key={i}
                          style={{
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            backgroundColor: '#94a3b8',
                            display: 'inline-block',
                          }}
                        />
                      ))}
                    </div>

                    {/* Stacked Cards Illustration */}
                    <div
                      style={{
                        position: 'relative',
                        width: '136px',
                        height: '136px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                        zIndex: 2,
                      }}
                    >
                      {/* Soft mint circular glow */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: '12px',
                          borderRadius: '50%',
                          backgroundColor: '#e6f7f0',
                        }}
                      />

                      {/* Sparkles around cards */}
                      <svg
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
                        viewBox="0 0 136 136"
                        fill="none"
                      >
                        {/* Left sparkle */}
                        <path d="M 22 52 Q 26 52 26 48 Q 26 52 30 52 Q 26 52 26 56 Q 26 52 22 52 Z" fill="#0d9488" />
                        <circle cx="34" cy="42" r="1.5" fill="#0d9488" />
                        {/* Right sparkle */}
                        <path d="M 110 40 Q 114 40 114 36 Q 114 40 118 40 Q 114 40 114 44 Q 114 40 110 40 Z" fill="#0d9488" />
                        <circle cx="102" cy="30" r="1.5" fill="#0d9488" />
                      </svg>

                      {/* Stacked Cards Vector */}
                      <svg width="90" height="82" viewBox="0 0 90 82" fill="none" style={{ position: 'relative', zIndex: 2 }}>
                        {/* Back card 3 */}
                        <rect x="26" y="10" width="52" height="40" rx="9" fill="#ffffff" stroke="#1e3e3b" strokeWidth="2" opacity="0.45" />
                        {/* Middle card 2 */}
                        <rect x="20" y="17" width="52" height="40" rx="9" fill="#ffffff" stroke="#1e3e3b" strokeWidth="2" opacity="0.75" />
                        {/* Front card 1 */}
                        <rect x="14" y="24" width="54" height="44" rx="9" fill="#ffffff" stroke="#1e3e3b" strokeWidth="2.2" />
                        {/* Mini calendar on front card */}
                        <rect x="22" y="33" width="13" height="13" rx="3" stroke="#0d9488" strokeWidth="1.8" />
                        <line x1="22" y1="37" x2="35" y2="37" stroke="#0d9488" strokeWidth="1.6" />
                        {/* Horizontal placeholder bars */}
                        <rect x="40" y="35" width="20" height="3.5" rx="1.75" fill="#cbd5e1" />
                        <rect x="40" y="42" width="14" height="3" rx="1.5" fill="#e2e8f0" />
                      </svg>
                    </div>

                    <h3
                      style={{
                        fontSize: '19.5px',
                        fontWeight: 800,
                        color: '#0f172a',
                        letterSpacing: '-0.015em',
                        marginBottom: '8px',
                        marginTop: 0,
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      No upcoming events yet
                    </h3>

                    <p
                      style={{
                        fontSize: '13.5px',
                        color: '#64748b',
                        lineHeight: 1.55,
                        maxWidth: '380px',
                        margin: 0,
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      We're working on bringing more valuable sessions, workshops and discussions soon.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* All Events Popup Modal */}
      <AllEventsModal
        isOpen={isAllEventsOpen}
        onClose={() => setIsAllEventsOpen(false)}
        onRegisterEvent={(title) => {
          setIsAllEventsOpen(false);
          onRegisterEvent?.(title);
        }}
      />

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
