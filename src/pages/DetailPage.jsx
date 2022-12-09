import React from 'react';
import DetailArticle from "../components/DetailArticle";
import DetailKonsul from "../components/DetailKonsul";
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/Detail.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

const DetailPage = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className='overflow-hidden'>
    <Header />
    <DetailArticle />
    <DetailKonsul />
    <Footer />
    </div>
  );
};

export default DetailPage;
