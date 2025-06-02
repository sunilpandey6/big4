import React from 'react';

const AboutHero = () => {
  return (
    <div className="relative h-[60vh] flex items-center justify-center bg-fixed bg-cover bg-center"
         style={{
           backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
         }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4 font-montserrat">About The Big 4 Consultancy</h1>
      </div>
    </div>
  );
};

export default AboutHero;