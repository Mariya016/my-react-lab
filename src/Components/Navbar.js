import React from 'react';
import '../styles/navbar.css'; // Check if this is the correct path


function Navbar() {
  return (
    <nav className="navbar">


      <div className="navbar-logo">COSMETIC CITY</div>
      
      <ul className="navbar-menu">
        <li><a href="#" className="navbar-link">Home</a></li>
        <li><a href="#" className="navbar-link">About</a></li>
        <li><a href="#" className="navbar-link">Services</a></li>
        <li><a href="#" className="navbar-link">Contact</a></li>
      </ul>
      
     
      <div className="user-actions">
        <a href="#" className="user-action-link sign-in">Sign In</a>
        <a href="#" className="user-action-link log-in">Log In</a>
      </div>
    </nav>
  );
}

export default Navbar;
