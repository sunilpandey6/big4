import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Expertise',
    description: 'Our team consists of certified professionals with years of experience.'
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'We prioritize understanding and meeting your unique needs.'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We respect deadlines and deliver results on schedule.'
  },
  {
    icon: Shield,
    title: 'Trusted Partner',
    description: 'Your success and confidentiality are our top priorities.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat text-[#002B5B]">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <reason.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-3 font-montserrat text-[#002B5B]">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;  // Ensure default export
