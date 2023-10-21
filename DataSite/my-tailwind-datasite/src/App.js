import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Analytics from "./components/Analytics.js";
import Newsletter from "./components/Newsletter";
import Card from "./components/Card.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Card />
      <Footer />
    </div>
  );
}
export default App;
