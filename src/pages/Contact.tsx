import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;