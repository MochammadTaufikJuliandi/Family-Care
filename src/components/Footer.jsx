import React from 'react';

// import footer data
import { footerData } from '../data';

// import components
import Copyright from './Copyright';

const Footer = () => {
  // destructure footer data
  const { logo, address, email, phone, list1, list2, socialList } = footerData;
  return (
    <footer data-aos='fade-up'>
      <Copyright />
    </footer>
  );
};

export default Footer;
