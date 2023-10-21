// src/Home.js
import React from "react";

function Home() {
  return (
    <div>
      <h1 className="">Home Page</h1>
      <p className="">Welcome to our website!</p>
      <button onClick={() => (window.location.href = "/contact")}>
        contact
      </button>
    </div>
  );
}

export default Home;
