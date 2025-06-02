import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          The Big4 Consultancy
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Building Financial Success, One Step at a Time
        </p>
        <a
          href="#services"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Explore Our Services
        </a>
      </div>
    </div>
  );
};

export default Hero;