import React from 'react';
import '../styles/navbar.css'; // Import CSS file
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
</nav>
);
}
export default Navbar;