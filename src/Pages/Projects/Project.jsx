import React from 'react';
import  { useState } from 'react';
import {Link} from "react-router-dom"
import logo from '../images/logo.png';
import './Navbarandfootbarproject.css';
import './Project.css';
import solarproduced from '../images/solarProduced.png';
import solarexported from '../images/solarexported.png';
import solarselfconsumption from '../images/solarselfconsumption.png';
import whatsapp from '../images/whatsapp.png';
import pakfills from '../images/PakfillsTechnologies.png';
import LGS from '../images/LGS.png';



const Project = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNavbar = () => {
    setShowNav(!showNav);
  };

  const phoneNumber = '+923225277210';


  return (
    <div>
    <header className='headerproject'>
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

    <div className="residential-project-container">
      <h1>Residential Projects</h1>
      <p>SkyWorkz power's Smart Solar Systems have been installed in 100+ residential sites all across Pakistan.</p>

      <div className="project-grid">
        <div className="project-item">
          <img src={solarproduced} alt="Project 1" />
          <h5>Solar Installed</h5>
          <h1>UP TO 200KWh</h1>
        </div>
        <div className="project-item">
          <img src={solarexported}alt="Project 2" />
          <h4>Energy Exported</h4>
          <h1>UP TO 15KWh</h1>
        </div>
        <div className="project-item">
          <img  src={solarselfconsumption}alt="Project 3" />
          <h4>Solar Self Consumption</h4>
          <h1>UP TO 35KWh </h1>
        </div>
        
        
      </div>
    </div>

    <div className="commercial-project-container">
      <h1>Commercial Projects</h1>
      <p>SkyWorkz power's Smart Solar Systems have been installed in 100+ residential sites all across Pakistan.</p>

      <div className="commercial-project-grid">
        <div className="commercial-project-item">
          <img src={pakfills} alt="Project 1" />
          <h4>PakFills Technologies</h4>
          <h5>Type Of System: On Grid</h5>
          <h5>System Capcity: 12 KW</h5>
        </div>
        <div className="commercial-project-item">
        <img src={LGS} alt="Project 1" />
          <h4>Lahore Grammer School, Hafizabad</h4>
          <h5>Type Of System: On Grid</h5>
          <h5>System Capcity: 50 KW</h5>
        </div>
        
        
        
      </div>
    </div>


    <footer className="footer">
      <div className="footer-bottom">
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