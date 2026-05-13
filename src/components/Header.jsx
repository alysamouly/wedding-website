import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#">AA</a>
        </div>
        <nav className="nav-links">
          <a href="#events">Events</a>
          <a href="#travel-stay">Travel & Stay</a>
          <a href="#things-to-do">Things to Do</a>
          <a href="#vibes">Discover Cairo</a>
          <a href="#faqs">FAQs</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
