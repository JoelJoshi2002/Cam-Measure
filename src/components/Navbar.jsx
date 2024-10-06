import React from 'react';
import '../styles/Navbar.css'; // Import the corresponding CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">
        <img src="/assets/logo.png" alt="Logo" />
      </div> */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Measure">Measure</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
