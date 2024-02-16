import React from 'react';
import  { useState } from 'react';
import {Link} from "react-router-dom"
import emailjs from "@emailjs/browser";
import  { useRef } from 'react';
import './Navbarandfootbarcontact.css';
import './form.scss';
import logo from '../images/logo.png';
import whatsapp from '../images/whatsapp.png';



const Home = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNavbar = () => {
    setShowNav(!showNav);
  };
  const phoneNumber = '+923225277210';
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9x7dmwi",
        "template_2qmo5yv",
        form.current,
        "HdNlDinzYXEaYrxp4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };



  return (
    <div>
    <header className='headercontactus'>
    <div className="navbar">
        <div className="logo">
        <Link to="/" style={{textDecoration:"none"}}><img src={logo} alt="Logo" /></Link>
        </div>
        
        <button className="toggle-btn" onClick={toggleNavbar}>
          ☰
        </button>
        <ul className={`nav-list ${showNav ? 'show' : ''}`}>
        <li><Link  to="/" style={{textDecoration:"none"}}><span>About Us</span></Link></li>
        <li><Link  to="/Services" style={{textDecoratHomeion:"none"}}><span>Services</span></Link></li>
        <li><Link  to="/Residential" style={{textDecoration:"none"}}><span>Residential</span></Link></li>
        <li><Link  to="/Project" style={{textDecoration:"none"}}><span>Projects</span></Link></li>
        <li><Link  to="/Contactus" style={{textDecoration:"none"}}><span>ContactUs</span></Link></li>
        </ul>
      </div>
    
    </header>
    <div className='form-container'>
<form ref={form} onSubmit={sendEmail}>

        <h1 className='Quotation'> Get Quotation</h1>
        <label className='form'>Name Of Customer</label>
        <input type="text" name="user_name" className='form1'/>
        <label className='form'>Phone Number of Customer</label>
        <input type="text" name="user_number" className='form1'/>
        <label className='form'>Email of a customer</label>
        <input type="text" name="user_email" className='form1' />
        <label className='form'>Province</label>
        <input type="text" name="user_province" className='form1' />
        <label className='form'>City</label>
        <input type="text" name="user_city" className='form1' />
        <label className='form'>Address</label>
        <input type="text" name="user_address" className='form1' />
        <label className='form'>Total Load Estimated</label>
        <input type="text" name="user_load" className='form1' />
        <label className='form'>Need Net Metering?</label>
        <input type="text" name="user_netmetering" className='form1' />
        <label className='form'>System</label>
        <input type="text" name="user_" className='form1' />
        <label className='form'>Message</label>
        <textarea name="message"  className='form1'/>
        <input type="submit" value="Send" />
      </form>
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

