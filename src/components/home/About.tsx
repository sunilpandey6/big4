// import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Team meeting"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 mb-6">
            With years of experience, The Big4 Consultancy has established itself as a leader in delivering top-tier financial and business consulting services to clients. 
            Our team of specialists combines in-depth industry expertise with technical proficiency to craft innovative, 
            results-driven solutions tailored to meet the unique challenges of each client. Whether navigating complex financial landscapes or driving strategic transformation, 
            we are committed to empowering businesses with the insights and support needed to thrive in an ever-evolving market.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* <div>
                <h4 className="text-2xl font-bold text-blue-600">500+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div> */}
              {/* <div>
                <h4 className="text-2xl font-bold text-blue-600">5+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div> */}
              <div>
                <h4 className="text-2xl font-bold text-blue-600">5+</h4>
                <p className="text-gray-600">Expert Consultant</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-600">98%</h4>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;