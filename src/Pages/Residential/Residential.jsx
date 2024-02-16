// CarouselWithNavbar.jsx
import React from 'react';
import  { useState } from 'react';
import {Link} from "react-router-dom"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Residential.scss';
import './Navbarandfootbarresidential.css';
import logo from '../images/logo.png';
import whatsapp from '../images/whatsapp.png';
import Tabs from '../Tabs/Tabs';



const Services = () => {

  const phoneNumber = '+923225277210';
  const [showNav, setShowNav] = useState(false);
  const toggleNavbar = () => {
    setShowNav(!showNav);
  };
 
  
  return (
   <div>
     <header className='headerresidential'>
    <div className="navbar">
        <div className="logo">
        <Link to="/" style={{textDecoration:"none"}}><img src={logo} alt="Logo" /></Link>
        </div>
        
        <button className="toggle-btn" onClick={toggleNavbar}>
          ☰
        </button>
        <ul className={`nav-list ${showNav ? 'show' : ''}`}>
        <li><Link  to="/" style={{textDecoration:"none"}}><span>About Us</span></Link></li>
        <li><Link  to="/Services" style={{textDecoration:"none"}}><span>Services</span></Link></li>
        <li><Link  to="/Residential" style={{textDecoration:"none"}}><span>Residential</span></Link></li>
        <li><Link  to="/Project" style={{textDecoration:"none"}}><span>Projects</span></Link></li>
        <li><Link  to="/Contactus" style={{textDecoration:"none"}}><span>ContactUs</span></Link></li>
        </ul>
      </div>
    
    </header>


   <div className='tabs12'>
    <Tabs/>
   </div>


    <footer className="footer">
      <div className="footer-bottom">
        <p>&copy; 2024 SkyWorkz Power Private Limited. All rights reserved</p>
        <span> Developed by OOs Bytes</span>
      </div>
    </footer>
   

    <div>
    <a 
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className='whatsapp' src={whatsapp} alt=''/>
        </a>
      </div>
    </div>




  );
};

export default Services;
