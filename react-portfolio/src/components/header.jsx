import React from 'react';
import './header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Eldrish Ramos</h1>
        <nav className="nav">
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;