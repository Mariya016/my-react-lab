import React from 'react';
import '../styles/Footer.css';  // Import CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Logo Section */}
        <div className="footer-logo">
          <h2>MyCompany</h2>
        </div>

        
        <div className="footer-links">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Footer Social Media Links */}
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>

      {/* Footer Bottom Section with Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 MyCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; // Export the component
