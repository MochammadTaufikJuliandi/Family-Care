import React from 'react';
import { Link } from 'react-router-dom';

// import navigation data
import { navigationData } from '../data';

const NavMobile = () => {
  return (
    <ul className='flex flex-col px-6 py-8 gap-y-4'>
      {navigationData.map((item, index) => {
        return (
          <li key={index}>
            <Link className='text-white' to={item.href}>
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMobile;
