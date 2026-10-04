import React from 'react';
import { AboutHero } from '../about/AboutHero';
import { OurStory } from '../about/OurStory';
import { WhatWeDo } from '../about/WhatWeDo';
import { OurTeam } from '../about/OurTeam';
import { BeliefBanner } from '../about/BeliefBanner';
import { Impact, ClosingCta } from '../about/ImpactCta';

interface AboutPageProps {
  onTalkToTeam?: () => void;
  onGetFunded?: () => void;
  onPartner?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onTalkToTeam, onGetFunded, onPartner }) => {
  return (
    <>
      <AboutHero />
      <OurStory />
      <WhatWeDo />
      <OurTeam />
      <BeliefBanner onPartner={onPartner} />
      <Impact />
      <ClosingCta onTalk={onTalkToTeam} onFunded={onGetFunded} />
    </>
  );
};
