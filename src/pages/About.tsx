import React from 'react';
import AboutHero from '../components/about/AboutHero';
import WhoWeAre from '../components/about/WhoWeAre';
import CoreValues from '../components/about/CoreValues';
import TeamSection from '../components/about/TeamSection';
import QuoteSection from '../components/about/QuoteSection';
import ClosingTagline from '../components/about/ClosingTagline';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <WhoWeAre />
      <CoreValues />
      <TeamSection />
      <QuoteSection />
      <ClosingTagline />
      <Footer />
    </div>
  );
};

export default About;