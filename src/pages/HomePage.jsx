import React from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Homepage = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;
