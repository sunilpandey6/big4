import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin with a thorough discussion of your needs and objectives.'
  },
  {
    number: '02',
    title: 'Analysis & Planning',
    description: 'Our team develops a customized strategy based on your requirements.'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'We execute the agreed-upon strategy with precision and care.'
  },
  {
    number: '04',
    title: 'Monitoring & Support',
    description: 'Continuous oversight and adjustments to ensure optimal results.'
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat text-[#002B5B]">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <span className="text-4xl font-bold text-blue-600 mb-4 block">{step.number}</span>
                <h3 className="text-xl font-semibold mb-3 font-montserrat text-[#002B5B]">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;