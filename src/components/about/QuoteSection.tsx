import React from 'react';
import { Quote } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section className="py-20 bg-[#002B5B] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="h-16 w-16 mx-auto mb-8 opacity-50" />
          <blockquote className="text-xl italic mb-8">
            "Our team takes a proactive approach to delivering tailored solutions to meet the unique needs of each client, and we work closely with our clients to provide a seamless and stress-free experience. Whether you're looking for tax planning, auditing, or other corporate services, our CA team is here to help you achieve your financial goals."
          </blockquote>
          <p className="font-semibold">- Ganesh, Senior Partner</p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;