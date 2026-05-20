import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when mobile menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#">AA</a>
        </div>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#events" onClick={closeMenu}>Events</a>
          <a href="#travel-stay" onClick={closeMenu}>Travel & Stay</a>
          <a href="#things-to-do" onClick={closeMenu}>Things to Do</a>
          <a href="#vibes" onClick={closeMenu}>Discover Cairo</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#faqs" onClick={closeMenu}>FAQs</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
