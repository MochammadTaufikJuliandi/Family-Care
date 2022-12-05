import React, { useState } from "react";
import logo from './images/icon1.png';
import {Link} from 'react-router-dom'

function Navbar() {

    const [nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {

        } else {
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    return(
        <nav className={nav ? 'nav active' : 'nav'}>
            <Link to="/" className="logo">
                <img src={logo} alt=''/>
            </Link>
            
            <input type='checkbox' className="menu-btn" id='menu-btn' />
            <label className="menu-icon" htmlFor='menu-btn'>
                <span className="nav-icon"></span>
            </label>

            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/article">Artikel</Link></li>
                <li><Link to="/konsultasi">Konsultasi</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register" className="active">Daftar</Link></li>
            </ul>
        </nav>
        
    )
}


export default Navbar;