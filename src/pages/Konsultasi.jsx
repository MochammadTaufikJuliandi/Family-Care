import React from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import KonsultasiList from '../components/KonsultasiList'
import "../styles/Detail.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Konsultasi = () => {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className='overflow-hidden'>
    <Header />
    <KonsultasiList />
    <Footer />
    </div>
  );
};

export default Konsultasi;
