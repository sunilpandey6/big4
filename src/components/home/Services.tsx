import React from 'react';
import { LineChart, PieChart, Briefcase, Users, Building2, Shield } from 'lucide-react';

const services = [
  {
    icon: LineChart,
    title: 'Financial Analysis',
    description: 'Comprehensive financial analysis and reporting for informed decision-making',
  },
  {
    icon: PieChart,
    title: 'Tax Advisory',
    description: 'Strategic tax planning and compliance services for businesses',
  },
  {
    icon: Briefcase,
    title: 'Business Consulting',
    description: 'Expert guidance for business growth and optimization',
  },
  {
    icon: Users,
    title: 'HR Solutions',
    description: 'Complete human resource management and consulting services',
  },
  {
    icon: Building2,
    title: 'Corporate Finance',
    description: 'Mergers, acquisitions, and corporate restructuring expertise',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;