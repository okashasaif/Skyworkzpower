import React from 'react';
import  { useState } from 'react';
import {Link} from "react-router-dom"
import logo from '../images/logo.png';
import './Navbarandfootbarservices.css';
import '../Services/services.scss';
import whatsapp from '../images/whatsapp.png';
import SolarPanel from '../images/SolarPanel.png';
import inverter from '../images/inverter.png';


const Project = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNavbar = () => {
    setShowNav(!showNav);
  };

  const phoneNumber = '+923225277210';


  return (
    <div>
    <header className='headerservices'>
     
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
      <button className='buttoncontainer2'><h2>"Brighter Horizons, Cleaner Energy"</h2></button>
    </header>
    <div className="container2">
     <div className='container2-content'>
      <button className='buttoncontainer'>  <h1 >Meet Our Company's Finest Professional Solar Engineers</h1></button>
   
     </div>
</div>
<div className="services-container">

      <div className="services-grid">
      
        <div className="services-item">
          <img src={SolarPanel} alt="Project 1" />
        </div>
        <div className="services-item">
          <h2>Solar Panels</h2>
          <p>
SkyWorkz's cutting-edge Smart Solar System integrates advanced solar photovoltaic (PV) polycrystalline panels sourced from leading global providers. Recognized for their outstanding efficiency, these solar panels are meticulously designed for easy installation and handling by our dedicated in-house installation team. Our tailored Smart Solar System packages include these high-performance solar panels, ensuring a seamless and comprehensive solution.

At the forefront of solar technology in Pakistan, we offer unparalleled solar panels that not only excel in energy conversion but also prioritize safety. SkyWorkz takes pride in delivering top-tier solar solutions, backed by a commitment to the highest fire safety standards. We stand behind the performance of every installed system, providing our customers with a reliable and efficient renewable energy solution.</p>
        
        
      </div>
      </div>
      <div className="servicesinv-container">

    
    
    <div className="servicesinv-grid">
    <div className="servicesinv-item">
        <h2>Energy Inverters</h2>
        <p>
Experience unrivaled efficiency and reliability with our cutting-edge inverters, setting the gold standard in town. At [Your Company Name], we pride ourselves on utilizing the best inverters available in the market to power your solar solutions. Our commitment to excellence ensures that your energy needs are met with state-of-the-art technology, guaranteeing optimal performance, durability, and peace of mind.

Why settle for less when you can have the best? Our carefully selected inverters are renowned for their advanced features, maximum energy conversion, and seamless integration with our Smart Solar Systems. Whether you're looking to harness solar power for your home or business, our commitment to using the finest inverters in the industry positions us as the top choice in town.</p>
      </div>
      
      <div className="servicesinv-item">
        <img src={inverter} alt="Project 1" />
      </div>
      
      </div>
     
      
      
      
    </div>
  </div>

    <footer className="footer">
      <div className="footer-bottom1">
        <p>&copy; 2024 SkyWorkz Power Private Limited. All rights reserved</p>
        <span> Developed by OOs Bytes</span>
      </div>
    </footer>
   
    
   
    <div className="whatsapp-button">
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

}

export default Project;