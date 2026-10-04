import React, { useState } from 'react';
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
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { MentorsPage } from './pages/MentorsPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { useGsapScroll } from './utils/useGsapScroll';

export const App: React.FC = () => {
  const [page, setPage] = useState<PageKey>('home');
  const mainContainerRef = useGsapScroll(page);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [modalTopic, setModalTopic] = useState('Growth Advisory');

  const goPage = (next: PageKey, anchor?: string) => {
    setPage(next);
    window.setTimeout(() => {
      if (anchor) {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }, 150);
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
      {/* 1. Floating Fixed Navbar — always visible */}
      <Navbar
        onGetStartedClick={handleGetStarted}
        onLoginClick={handleLogin}
        onNavigate={goPage}
        activePage={page}
      />
      <main ref={mainContainerRef} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {page === 'home' ? (
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
            <InsightsSection onReadArticle={handleReadArticle} />

            {/* 12. Closing CTA */}
            <CtaBanner />
          </>
        ) : page === 'about' ? (
          <AboutPage
            onTalkToTeam={handleTalkToTeam}
            onGetFunded={handleGetFunded}
            onPartner={handlePartner}
          />
        ) : page === 'services' ? (
          <ServicesPage
            onSelectService={handleServiceClick}
          />
        ) : page === 'mentors' ? (
          <MentorsPage
            onBookMentor={handleBookMentor}
            onBrowseMentors={handleBrowseMentors}
            onConnectMentor={handleConnectMentor}
            onBecomeMentor={handleBecomeMentor}
          />
        ) : page === 'programs' ? (
          <ProgramsPage
            onSelectProgram={(name) => openTopic(`Program Application: ${name}`)}
          />
        ) : (
          <ResourcesPage
            onReadArticle={handleReadArticle}
            onTalkToTeam={handleTalkToTeam}
          />
        )}
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
