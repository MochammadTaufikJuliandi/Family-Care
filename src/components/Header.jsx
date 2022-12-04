import React from "react";
import Navbar from './Navbar';

function Header() {
    return(
        <div id='main'>
            
            <div className="name">
                <h1><span>FAMILY CARE</span><br/>Mari Membangun Keluarga yang Bahagia</h1>
                <p className="details">Family Care merupakan website tentang parenting 
                yang berisikan tentang artikel-artikel permasalahan keluarga dan kami juga
                memberikan beberapa rekomendasi media konsultasi parenting</p>
                <a href='#parenting' className='cv-btn'>Apa itu Parenting?</a>
            </div>
        </div>
    )
}

export default Header;