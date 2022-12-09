import React, { useState } from 'react';

// import components
import Logo from '../assets/img/logo.png';
import Nav from './Nav';
import NavMobile from './NavMobile';

// import icons
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header
      style={{padding:'0px 10px', position: 'fixed'}}
      className='sticky top-0 z-30 w-full px-2 py-4 bg-accent-tertiary sm:px-4 shadow-xl'
      data-aos='fade-down'
      data-aos-delay='800'
      data-aos-duration='1000'
    >
      <div className='container mx-auto py-4 sticky'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-[120px]'>
            {/* logo */}
            <Link to='/'>
              <img src={Logo} alt='' className=''/>
            </Link>

            {/* nav / initially hidden / show on large screens  */}
            <div className='hidden lg:flex'>
              <Nav />
            </div>
          </div>

          {/* mobile nav / initially is showing / hide on large screens */}
          <div
            className={`${
              navMobile ? 'max-h-52' : 'max-h-0'
            } lg:hidden absolute top-14 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>


          {/* nav trigger btn / only shows on mobile screens */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className='text-2xl text-primary cursor-pointer lg:hidden'
          >
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
