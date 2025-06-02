import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ProcessSection from '../components/services/ProcessSection';
import WhyChooseUs from '../components/services/WhyChooseUs';
import ContactCTA from '../components/services/ContactCTA';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Services;