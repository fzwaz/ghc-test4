import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowWeHelp } from './components/HowWeHelp';
import { MentorsSection } from './components/MentorsSection';
import { ProgramsFramework } from './components/ProgramsFramework';
import { SuccessStories } from './components/SuccessStories';
import { ResourcesSection } from './components/ResourcesSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [modalTopic, setModalTopic] = useState('Growth Advisory');

  const handleGetStarted = () => {
    setIsLogin(false);
    setModalTopic('New Founder Onboarding');
    setModalOpen(true);
  };

  const handleLogin = () => {
    setIsLogin(true);
    setModalOpen(true);
  };

  const handleTalkToTeam = () => {
    setIsLogin(false);
    setModalTopic('Strategic Consultation');
    setModalOpen(true);
  };

  const handleServiceClick = (serviceName: string) => {
    setIsLogin(false);
    setModalTopic(`${serviceName} Consultation`);
    setModalOpen(true);
  };

  const handleBookMentor = (mentorName: string) => {
    setIsLogin(false);
    setModalTopic(`Mentorship with ${mentorName}`);
    setModalOpen(true);
  };

  const handleSelectProgram = (programName: string) => {
    setIsLogin(false);
    setModalTopic(`Program Application: ${programName}`);
    setModalOpen(true);
  };

  const handleDownloadResource = (resourceTitle: string) => {
    setIsLogin(false);
    setModalTopic(`Toolkit Download: ${resourceTitle}`);
    setModalOpen(true);
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
      {/* 1. Floating Sticky Navbar with Margins */}
      <Navbar
        onGetStartedClick={handleGetStarted}
        onLoginClick={handleLogin}
      />

      {/* Main Landing Sections */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* 2. Hero Section */}
        <Hero
          onStartJourney={handleGetStarted}
          onTalkToTeam={handleTalkToTeam}
        />

        {/* 3. How We Help Orbital Section */}
        <HowWeHelp
          onServiceClick={handleServiceClick}
          onExploreServices={handleGetStarted}
          onTalkToTeam={handleTalkToTeam}
        />

        {/* 4. Mentors Network Section */}
        <MentorsSection
          onBookMentor={handleBookMentor}
        />

        {/* 5. Stage-wise Programs Framework */}
        <ProgramsFramework
          onSelectProgram={handleSelectProgram}
        />

        {/* 6. Success Stories & Portfolio Highlights */}
        <SuccessStories />

        {/* 7. Founder Knowledge Vault / Resources */}
        <ResourcesSection
          onDownloadResource={handleDownloadResource}
        />

        {/* 8. Closing High-Impact CTA Banner */}
        <CtaBanner
          onStartJourney={handleGetStarted}
          onTalkToTeam={handleTalkToTeam}
        />
      </main>

      {/* 9. Corporate Footer */}
      <Footer />

      {/* 10. Interactive Global Consultation & Login Modal */}
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
