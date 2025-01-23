import React from 'react';
import logo from '../utils/Logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#gallery">Media Gallery</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Action Button */}
        <div className="header-button">
          <button className="btn">Donate Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
