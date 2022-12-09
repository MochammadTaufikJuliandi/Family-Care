import React from 'react';
import { Link } from 'react-router-dom';

// import navigation data
import { navigationData } from '../data';

const Nav = () => {
  return (
    <nav>
      <ul className='flex gap-x-12'>
        {navigationData.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.href}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
