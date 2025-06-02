// ServicesList.tsx
import React from 'react';
import { LineChart, PieChart, Briefcase, Users, Building2, Shield } from 'lucide-react';

const services = [
  {
    icon: LineChart,
    title: 'Financial Analysis',
    description: 'Our financial analysis service provides in-depth insights into your business performance. We analyze key metrics, cash flow patterns, and market trends to help you make informed decisions. Our expert analysts use advanced tools to create detailed reports and forecasts.',
    features: [
      'Performance metrics analysis',
      'Cash flow forecasting',
      'Budget planning and control',
      'Financial modeling'
    ]
  },
  {
    icon: PieChart,
    title: 'Tax Advisory',
    description: 'Comprehensive tax planning and compliance services to optimize your tax position. We stay current with tax legislation to ensure your business remains compliant while maximizing available tax benefits and incentives.',
    features: [
      'Tax planning and strategy',
      'Compliance management',
      'International tax consulting',
      'Tax audit support'
    ]
  },
  {
    icon: Briefcase,
    title: 'Business Consulting',
    description: 'Strategic business consulting to help you achieve your growth objectives. We work closely with your team to develop and implement effective business strategies, improve operations, and enhance profitability.',
    features: [
      'Strategic planning',
      'Process optimization',
      'Growth strategy',
      'Risk assessment'
    ]
  },
  {
    icon: Users,
    title: 'HR Solutions',
    description: 'Comprehensive human resource management solutions to help you build and maintain a strong workforce. We provide guidance on HR policies, recruitment, training, and employee relations.',
    features: [
      'HR policy development',
      'Recruitment assistance',
      'Performance management',
      'Training programs'
    ]
  },
  {
    icon: Building2,
    title: 'Corporate Finance',
    description: 'Expert guidance in corporate finance matters, including mergers and acquisitions, restructuring, and capital raising. We help you navigate complex financial transactions and optimize your capital structure.',
    features: [
      'M&A advisory',
      'Capital restructuring',
      'Investment planning',
      'Financial due diligence'
    ]
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and management services to protect your business. We identify potential risks and develop strategies to mitigate them, ensuring your business remains resilient.',
    features: [
      'Risk assessment',
      'Compliance monitoring',
      'Internal controls',
      'Crisis management planning'
    ]
  }
];

const ServicesList = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <div key={service.title} className={`mb-16 ${index !== services.length - 1 ? 'border-b border-gray-200 pb-16' : ''}`}>
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="lg:w-1/3">
                <div className="flex items-center mb-6">
                  <service.icon className="h-12 w-12 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold font-montserrat text-[#002B5B]">{service.title}</h2>
                </div>
                <p className="text-gray-700 mb-6">{service.description}</p>
              </div>
              <div className="lg:w-2/3 bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 font-montserrat text-[#002B5B]">Key Features</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;  // Ensure this is a default export
