import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import News from '../components/home/News';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <main>
        <Hero />
        <Services />
        <About />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Home;