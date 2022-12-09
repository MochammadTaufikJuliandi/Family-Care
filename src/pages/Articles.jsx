import React from 'react';
import ArticleList from "../components/ArticleList";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Articles = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className='overflow-hidden'>
    <Header />
    <ArticleList />
    <Footer />
    </div>
  );
};

export default Articles;
