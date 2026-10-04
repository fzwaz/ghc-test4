import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Navbar, type PageKey } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatsNext } from './components/WhatsNext';
import { HowWeHelp } from './components/HowWeHelp';
import { FundingSection } from './components/FundingSection';
import { MentorsSection } from './components/MentorsSection';
import { PortfolioWall } from './components/PortfolioWall';
import { ShortsSection } from './components/ShortsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { MentorTopics } from './components/MentorTopics';
import { BecomeMentorSection } from './components/BecomeMentorSection';
import { InsightsSection } from './components/InsightsSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import CustomCursor from './components/CustomCursor';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { MentorsPage } from './pages/MentorsPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { useGsapScroll } from './utils/useGsapScroll';

const pageToPath = (page: PageKey): string => (page === 'home' ? '/' : `/${page}`);

const pathToPage = (pathname: string): PageKey => {
  const seg = pathname.replace(/^\/+|\/+$/g, '');
  const pages: PageKey[] = ['about', 'services', 'mentors', 'programs', 'resources'];
  return pages.includes(seg as PageKey) ? (seg as PageKey) : 'home';
};

export const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const page = pathToPage(location.pathname);
  const mainContainerRef = useGsapScroll(page);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [modalTopic, setModalTopic] = useState('Growth Advisory');
  const [inHero, setInHero] = useState(false);
  const inHeroRef = useRef(false);

  // Custom cursor lives only inside hero sections.
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const inside = !!el?.closest?.('[data-hero]');
      if (inside !== inHeroRef.current) {
        inHeroRef.current = inside;
        document.body.classList.toggle('in-hero', inside);
        setInHero(inside);
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const anchor = (location.state as { anchor?: string } | null)?.anchor;
    if (anchor) {
      const timer = window.setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [location]);

  const goPage = (next: PageKey, anchor?: string) => {
    navigate(pageToPath(next), anchor ? { state: { anchor } } : undefined);
  };

  const openTopic = (topic: string) => {
    setIsLogin(false);
    setModalTopic(topic);
    setModalOpen(true);
  };

  const handleGetStarted = () => openTopic('New Founder Onboarding');

  const handleLogin = () => {
    setIsLogin(true);
    setModalOpen(true);
  };

  const handleTalkToTeam = () => openTopic('Strategic Consultation');

  const handleServiceClick = (serviceName: string) => openTopic(`${serviceName} Consultation`);

  const handleBookMentor = (mentorName: string) => openTopic(`Mentorship with ${mentorName}`);

  const handleMilestoneClick = (title: string) => openTopic(`${title} Stage Advisory`);

  const handleMentorClick = () => openTopic('Mentor Network');

  const handleGetFunded = () => openTopic('Funding Application');

  const handleConnectMentor = () => openTopic('Mentorship Request');

  const handleBecomeMentor = () => openTopic('Mentor Application');

  const handleReadArticle = () => openTopic('Insights Article Access');

  const handlePartner = () => openTopic('Partnership with GHC');

  const handleBrowseMentors = () => {
    const target = page === 'mentors' ? 'mentors-grid' : 'mentors';
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f7faf9',
        position: 'relative',
      }}
    >
      <div className={inHero ? undefined : 'cc-paused'}>
        <CustomCursor dotColor="#14b8a6" ringColor="rgba(20,184,166,0.4)" />
      </div>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          body.cc-cursor-on, body.cc-cursor-on a, body.cc-cursor-on button, body.cc-cursor-on [role="button"] { cursor: auto !important; }
          body.in-hero, body.in-hero a, body.in-hero button, body.in-hero [role="button"] { cursor: none !important; }
        }
        .cc-paused .cc-dot, .cc-paused .cc-ring { display: none !important; }
      `}</style>
      {/* 1. Floating Fixed Navbar — always visible */}
      <Navbar
        onGetStartedClick={handleGetStarted}
        onLoginClick={handleLogin}
        onNavigate={goPage}
        activePage={page}
      />
      <main ref={mainContainerRef} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={
          <>
            {/* 2. Hero Section */}
            <Hero
              onStartJourney={handleGetStarted}
              onTalkToTeam={handleTalkToTeam}
              onMilestoneClick={handleMilestoneClick}
              onMentorClick={handleMentorClick}
            />

            {/* What's Next Events Section */}
            <WhatsNext
              onRegisterEvent={(eventTitle) => openTopic(`Event Registration: ${eventTitle}`)}
              onViewAllEvents={() => openTopic('All Upcoming Events Schedule')}
            />

            {/* 3. How We Help Orbital Section */}
            <HowWeHelp
              onServiceClick={handleServiceClick}
              onExploreServices={handleGetStarted}
              onTalkToTeam={handleTalkToTeam}
            />

            {/* 4. Strategic Funding Solutions */}
            <FundingSection onGetFunded={handleGetFunded} />

            {/* 5. Mentor Network with real roster */}
            <MentorsSection
              onBookMentor={handleBookMentor}
              onBrowseMentors={handleBrowseMentors}
            />

            {/* 6. Portfolio logo wall */}
            <PortfolioWall />

            {/* 7. GHC Shorts */}
            <ShortsSection />

            {/* 8. Founder testimonials */}
            <TestimonialsSection />

            {/* 9. 1-on-1 topics + stats */}
            <MentorTopics onConnectMentor={handleConnectMentor} />

            {/* 10. Become a mentor */}
            <BecomeMentorSection onBecomeMentor={handleBecomeMentor} />

            {/* 11. Insights + newsletter */}
            <InsightsSection onReadArticle={handleReadArticle} onReserveSeat={(title) => openTopic(`Event Seat: ${title}`)} />

            {/* 12. Closing CTA */}
            <CtaBanner />
          </>
          } />
          <Route path="/about" element={
          <AboutPage
            onTalkToTeam={handleTalkToTeam}
            onGetFunded={handleGetFunded}
            onPartner={handlePartner}
            onReadArticle={handleReadArticle}
            onReserveSeat={(title) => openTopic(`Event Seat: ${title}`)}
          />
          } />
          <Route path="/services" element={
          <ServicesPage
            onSelectService={handleServiceClick}
            onReadArticle={handleReadArticle}
            onReserveSeat={(title) => openTopic(`Event Seat: ${title}`)}
          />
          } />
          <Route path="/mentors" element={
          <MentorsPage
            onBookMentor={handleBookMentor}
            onBrowseMentors={handleBrowseMentors}
            onConnectMentor={handleConnectMentor}
            onBecomeMentor={handleBecomeMentor}
            onReadArticle={handleReadArticle}
            onReserveSeat={(title) => openTopic(`Event Seat: ${title}`)}
          />
          } />
          <Route path="/programs" element={
          <ProgramsPage
            onSelectProgram={(name) => openTopic(`Program Application: ${name}`)}
            onReadArticle={handleReadArticle}
            onReserveSeat={(title) => openTopic(`Event Seat: ${title}`)}
          />
          } />
          <Route path="/resources" element={
          <ResourcesPage
            onReadArticle={handleReadArticle}
            onTalkToTeam={handleTalkToTeam}
            onReserveSeat={(title) => openTopic(`Event Seat: ${title}`)}
          />
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* 13. Corporate Footer */}
      <Footer onNavigate={goPage} />

      {/* 14. Global Consultation & Login Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        isLogin={isLogin}
        defaultTopic={modalTopic}
      />
    </div>
  );
};

export default App;
