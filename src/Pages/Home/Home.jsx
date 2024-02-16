import React from 'react';
import  { useState } from 'react';
import {Link} from "react-router-dom"
import './Home.scss';
import logo from '../images/logo.png';
import ourmission from '../images/OurMission.png';
import ourvision from '../images/OurVision.png'
import CEO from '../images/CEO.jpeg';
import './Navbarandfootbar1.css';
import whatsapp from '../images/whatsapp.png';
import './styles.scss';


const Home = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNavbar = () => {
    setShowNav(!showNav);
  };

  const phoneNumber = '+923225277210';
  // const paragraphStyle = {
  //   textAlign: 'justify',
  // };

  return (
    <div>
    <header className='headerhome'>
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



     <div className="container">
      <div className="upper-container">
        <img src={ourmission} alt="Ourmission" />
        <h4 className='ourmission' >
          Our Mission
          <br/>
          <h5 className='ourmission1'>Skyworkz Power, brings in international experience,
          
          professional knowledge, access to latest technologies and developments and ties with world renowned quality manufacturers</h5></h4>
      </div>
      <div className="lower-container">
        <img src={ourvision} alt="Ourmission" />
        <h4 className='ourmission' >
          Our Vision
          <br/>
          <h5 className='ourmission3'>Empowering a sustainable future through cutting-edge solar solutions. Striving to be the catalyst for widespread adoption of renewable energy, driving positive change for our planet.</h5></h4>
      </div>
     
     
      <div className="CEO-container">
<div className="CEO-grid">
<div className="CEO-item">
    <img src={CEO} alt="Project 1" />
  </div>
<div className="CEO-item">
  <h1 className='paragraph'>Message From CEO</h1>
    <h2 className='paragraph'>Dear Valued Customers and Supporters,</h2>
    <p className='paragraph'>
    I am thrilled to extend a warm welcome to you on behalf of SkyWorkz Power. As the CEO, I am honored to lead a team that is dedicated to revolutionizing the way we harness and utilize solar energy. Our commitment to sustainability, innovation, and customer satisfaction drives everything we do.</p>
    <p className='paragraph custom-font-text'>At SkyWorkz Power, we believe in the transformative power of solar energy. It's not just about providing solutions; it's about shaping a brighter, cleaner, and more sustainable future for all. We take immense pride in being at the forefront of the solar industry, offering cutting-edge technology and customized solutions tailored to your unique needs.</p>
    <p className='paragraph'> Our journey is guided by a passion for excellence and a relentless pursuit of innovation. We are not just installing solar panels; we are empowering homes and businesses to embrace a more eco-friendly and cost-effective energy source. With our unwavering dedication to quality, we assure you that every installation is a testament to our commitment to your satisfaction.</p>
    <p className='paragraph'>As we navigate the dynamic landscape of renewable energy, I invite you to join us in this exciting journey towards a greener tomorrow. Together, let's redefine the way we power our lives and contribute to a sustainable and resilient future.</p>
    <h4 className='paragraph'>Thank you for choosing SkyWorkz Power—where the sun meets innovation.</h4>
    <h4 className='paragraph'>Warm regards,</h4>
    <h4 className='paragraph'>CEO, SkyWorkz Power</h4>
  </div>
  
  
  
  </div>
  </div></div>
 <div className="whatsapp-button">
    <a 
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className='whatsapp' src={whatsapp} alt=''/>
        </a>
      </div>  
    <footer className="footer">
      <div className="footer-bottom">
        <p>&copy; 2024 SkyWorkz Power Private Limited. All rights reserved</p>
        <span> Developed by OOs Bytes</span>
      </div>
    </footer>
   
    
   
   
    </div>



   
  );

}

export default Home;

// // Slider.jsx
// import React, { useState } from 'react';
// import logo from '../images/logo.png';
// import image1 from '../images/about-banner.jpg';
// import image2 from '../images/banner.jpg';
// import './Home.scss';

// const images = [image1, image2];

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
//   };

//   return (
//     <div className="slider-container">
//       <div className="navbar">
//         <img src={logo} alt="Logo" className="logo" />
//       </div>
//       <div className="slider">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`slide ${index === currentSlide ? 'active' : ''}`}
//             style={{ backgroundImage: `url(${image})` }}
//           ></div>
//         ))}
//         <button className="prev" onClick={prevSlide}>
//           &#10094;
//         </button>
//         <button className="next" onClick={nextSlide}>
//           &#10095;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;

