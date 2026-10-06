import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Video, User, Ticket, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { events as seedEvents, type GhcEvent } from '../data/events';
import { fetchAllEvents } from '../lib/sanity';

interface AllEventsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterEvent: (eventTitle: string) => void;
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
    month: 'EVENT',
    day: '•',
    year: '2026',
    time: evt.schedule,
  };
}

export const AllEventsModal: React.FC<AllEventsModalProps> = ({
  isOpen,
  onClose,
  onRegisterEvent,
}) => {
  const [eventsList, setEventsList] = useState<GhcEvent[]>([]);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'ongoing'>('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    let isMounted = true;
    async function load() {
      setLoading(true);
      try {
        const data = await fetchAllEvents();
        if (!isMounted) return;
        if (data && data.length > 0) {
          setEventsList(data);
        } else {
          setEventsList(seedEvents);
        }
      } catch (err) {
        console.warn('Failed to load all events from Sanity:', err);
        if (isMounted) setEventsList(seedEvents);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    load();
    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredEvents = eventsList.filter((e) => {
    if (filter === 'all') return true;
    return e.status === filter;
  });

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(11, 29, 40, 0.65)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        animation: 'modalBackdropFade 0.2s ease-out',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          backgroundColor: '#ffffff',
          borderRadius: '28px',
          boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          animation: 'modalSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div
          style={{
            padding: '28px 32px 20px 32px',
            borderBottom: '1px solid #eef2f1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
            position: 'sticky',
            top: 0,
            zIndex: 10,
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '1.2px',
                color: '#1a7b74',
                backgroundColor: '#e6f4f1',
                padding: '4px 10px',
                borderRadius: '9999px',
                marginBottom: '6px',
                textTransform: 'uppercase',
              }}
            >
              <Sparkles size={12} /> Schedule & Sessions
            </div>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              All GHC Events & Workshops
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#f1f5f9',
              border: 'none',
              color: '#64748b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e2e8f0';
              e.currentTarget.style.color = '#0f172a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f1f5f9';
              e.currentTarget.style.color = '#64748b';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Filter Pills Bar */}
        <div
          style={{
            padding: '12px 32px',
            backgroundColor: '#f8faf9',
            borderBottom: '1px solid #eef2f1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            {(['all', 'upcoming', 'ongoing'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: filter === tab ? '1px solid #1a7b74' : '1px solid #e2e8f0',
                  backgroundColor: filter === tab ? '#1a7b74' : '#ffffff',
                  color: filter === tab ? '#ffffff' : '#475569',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab === 'all' ? 'All Events' : tab === 'upcoming' ? 'Upcoming' : 'Ongoing'}
              </button>
            ))}
          </div>

          <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 600 }}>
            {filteredEvents.length} Event{filteredEvents.length === 1 ? '' : 's'}
          </span>
        </div>

        {/* Scrollable Events Content List */}
        <div
          style={{
            padding: '24px 32px 32px 32px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
          className="all-events-modal-body"
        >
          {loading ? (
            <div style={{ padding: '60px 0', textAlign: 'center', color: '#64748b' }}>
              Loading all events...
            </div>
          ) : filteredEvents.length === 0 ? (
            <div
              style={{
                padding: '48px 24px',
                textAlign: 'center',
                backgroundColor: '#f8faf9',
                borderRadius: '20px',
                border: '1.5px dashed #d1e3dd',
              }}
            >
              <Calendar size={32} style={{ color: '#1a7b74', margin: '0 auto 12px auto' }} />
              <h4 style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                No events found
              </h4>
              <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0 }}>
                More events will be scheduled and updated soon.
              </p>
            </div>
          ) : (
            filteredEvents.map((evt) => {
              const d = parseEventDate(evt);
              const isOnline = evt.mode.toLowerCase().includes('online');
              const isOngoing = evt.status === 'ongoing';

              return (
                <div
                  key={evt.id}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    border: '1px solid #e2e8f0',
                    padding: '22px 24px',
                    display: 'grid',
                    gridTemplateColumns: '70px 1fr auto',
                    gap: '24px',
                    alignItems: 'center',
                    boxShadow: '0 4px 16px -2px rgba(0,0,0,0.03)',
                    transition: 'all 0.2s ease',
                  }}
                  className="modal-event-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#99f6e4';
                    e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(18,86,81,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 16px -2px rgba(0,0,0,0.03)';
                  }}
                >
                  {/* Date Stack */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#f8faf9',
                      border: '1px solid #e2e8f0',
                      borderRadius: '14px',
                      padding: '10px 6px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        color: '#1a7b74',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {d.month}
                    </span>
                    <span
                      style={{
                        fontSize: '26px',
                        fontWeight: 800,
                        color: '#0f172a',
                        lineHeight: 1.1,
                      }}
                    >
                      {d.day}
                    </span>
                    <span
                      style={{
                        fontSize: '10.5px',
                        fontWeight: 600,
                        color: '#94a3b8',
                      }}
                    >
                      {d.year}
                    </span>
                  </div>

                  {/* Event Details */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                      {isOngoing ? (
                        <span
                          style={{
                            fontSize: '10.5px',
                            fontWeight: 800,
                            color: '#0d9488',
                            backgroundColor: '#ccfbf1',
                            padding: '3px 10px',
                            borderRadius: '9999px',
                            letterSpacing: '0.8px',
                          }}
                        >
                          ONGOING NOW
                        </span>
                      ) : (
                        <span
                          style={{
                            fontSize: '10.5px',
                            fontWeight: 700,
                            color: '#475569',
                            backgroundColor: '#f1f5f9',
                            padding: '3px 10px',
                            borderRadius: '9999px',
                          }}
                        >
                          {evt.badge || 'Session'}
                        </span>
                      )}

                      {evt.featured && (
                        <span
                          style={{
                            fontSize: '10.5px',
                            fontWeight: 800,
                            color: '#125651',
                            backgroundColor: '#e6f7f0',
                            border: '1px solid #d1fae5',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                          }}
                        >
                          ★ Featured
                        </span>
                      )}
                    </div>

                    <h4
                      style={{
                        fontSize: '17px',
                        fontWeight: 800,
                        color: '#0f172a',
                        lineHeight: 1.3,
                        marginBottom: '6px',
                      }}
                    >
                      {evt.title}
                    </h4>

                    <p
                      style={{
                        fontSize: '13px',
                        color: '#64748b',
                        lineHeight: 1.5,
                        marginBottom: '12px',
                      }}
                    >
                      {evt.desc}
                    </p>

                    {/* Metadata Row */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        flexWrap: 'wrap',
                        fontSize: '12px',
                        color: '#64748b',
                      }}
                    >
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <Clock size={13} style={{ color: '#1a7b74' }} /> {d.time}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        {isOnline ? (
                          <Video size={13} style={{ color: '#1a7b74' }} />
                        ) : (
                          <MapPin size={13} style={{ color: '#1a7b74' }} />
                        )}
                        {evt.location || evt.mode}
                      </span>
                      {evt.speakerName && (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                          <User size={13} style={{ color: '#1a7b74' }} /> {evt.speakerName}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div>
                    <button
                      onClick={() => {
                        onClose();
                        onRegisterEvent(evt.title);
                      }}
                      style={{
                        backgroundColor: '#0e574c',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '11px 20px',
                        fontSize: '13.5px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 12px rgba(14, 87, 76, 0.2)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#083931';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#0e574c';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <span>Reserve Seat</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalBackdropFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { transform: translateY(20px) scale(0.97); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        .all-events-modal-body::-webkit-scrollbar {
          width: 6px;
        }
        .all-events-modal-body::-webkit-scrollbar-track {
          background: transparent;
        }
        .all-events-modal-body::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 9999px;
        }
        @media (max-width: 680px) {
          .modal-event-card {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
        }
      `}</style>
    </div>
  );
};
