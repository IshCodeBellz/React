// src/components/Footer.js

import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My React Website</p>
    </footer>
  );
};

export default Footer;
