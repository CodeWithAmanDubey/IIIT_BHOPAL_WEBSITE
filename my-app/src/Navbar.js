import React, { useState } from 'react';
import './Navbar.css'; 
import facebook from "../src/assest/facebook.webp"
import instagram from "../src/assest/instagram.webp"
import linkedin from "../src/assest/linkedin.webp"
import logo from "../src/assest/logo.png"
import gandhi from "../src/assest/Gandhi.png"
import emplem from "../src/assest/emplem.png"
import {  FaCaretDown } from 'react-icons/fa';
import back from "../src/assest/back.jpg";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    'Home', 'About', 'Academics', 'Department', 'Research',
    'People', 'Placement', 'Anti-Ragging', 'Quick Links', 'Life @IIIT Bhopal'
  ];

  return (
  <>
    {/* // navbar 1 */}
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#">Admission</a></li>
        <li><a href="#">pgportal.gov.in</a></li>
        <li><a href="#">ERP login</a></li>
        <li><a href="#">Placement</a></li>
        <li><a href="#">Notice</a></li>
        <li><a href="#">RTIP2R conference 2024</a></li>
        <li><a href="#">Tender</a></li>
      </ul>
      <div className="social-media">
        <span>Follow Us:</span>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className="icon" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" className="icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="icon" />
        </a>
      </div>
    </nav>
    {/* // navbar 2 */}

    <nav className="secondary-navbar"  style={{backgroundImage : `url(${back})` }}>
        <div className="secondary-navbar-logo">
          <img src={logo} alt="College Logo" className="logo" />
        </div>
        <div className="secondary-navbar-details">
          <p><b>भारतीय सूचना प्रौद्योगिकी संस्थान, भोपाल</b></p>
          <h1><b>Indian Institute Of Information Technology , Bhopal</b></h1>
          <h5>(An Autonomous Institute Of National Importance under act of Parliament)</h5>
          
          
        </div>
        <div className="secondary-navbar-logos">
          <img src={gandhi} alt="Right Logo 1" className="logo" />
          <img src={emplem} alt="Right Logo 2" className="logo" />
        </div>
      </nav>
      {/* navbar 3 */}

      <nav className="navbar2">
      <ul>
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            <span>{item}</span>
            <span className="icon"><FaCaretDown /></span>  {/* Same icon for each item */}
          </li>
        ))}
      </ul>
    </nav>

    </>
  );
};

export default Navbar;