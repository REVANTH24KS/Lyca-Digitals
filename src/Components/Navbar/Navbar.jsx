import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#Payasyougo" onClick={closeMenu}>Pay as you go</a>
          </li>
          <li>
            <a href="#Paymonthly" onClick={closeMenu}>Pay monthly</a>
          </li>
          <li>
            <a href="#Phoneshop" onClick={closeMenu}>Phone shop</a>
          </li>
          <li>
            <a href="#Help" onClick={closeMenu}>Help</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <button className="btn quick-topup">Quick top-up</button>
        <button className="icon-btn user-icon"></button>
        <button className="icon-btn basket-icon"></button>
        <div className="lang-select">
          <span>EN</span>
          <span className="flag-icon"></span>
          <span className="arrow-icon"></span>
        </div>
        <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;