// src/components/Header.js

import React from "react";
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div onClick={() => (window.location.href = "/")}>
        <h1>My React Website</h1>
      </div>
    </header>
  );
};

export default Header;
