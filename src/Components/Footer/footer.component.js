import React from "react";
import "./Footer.css"; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-link">
          <a href="/support">Support</a>
        </div>
        <div className="footer-text">
          &copy; Miraclesoft 2023. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
