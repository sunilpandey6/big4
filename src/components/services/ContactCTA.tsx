import React from 'react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-[#002B5B] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 font-montserrat">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to discuss how we can help you achieve your financial goals.
        </p>
        <button className="bg-white text-[#002B5B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          <a href = "/Contact">
          Contact Us
          </a>
        </button>
      </div>
    </section>
  );
};

export default ContactCTA;