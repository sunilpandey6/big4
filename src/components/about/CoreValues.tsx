import React from 'react';
import { Target, Eye } from 'lucide-react';

const CoreValues = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-[#002B5B] mr-4" />
              <h3 className="text-2xl font-bold font-montserrat text-[#002B5B]">Our Mission</h3>
            </div>
            <p className="text-gray-700">
              Our mission is to provide high-quality financial services to our clients, including accounting, tax planning, and business consulting. We strive to build long-term relationships with our clients, understanding their unique needs and delivering personalized solutions to help them achieve their financial goals.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-[#002B5B] mr-4" />
              <h3 className="text-2xl font-bold font-montserrat text-[#002B5B]">Our Vision</h3>
            </div>
            <p className="text-gray-700">
              Our vision is to be the most trusted and respected financial services provider, known for our expertise, integrity, and commitment to our clients' success. We aim to build a team of highly skilled and dedicated professionals who share our values and passion for delivering exceptional service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;