import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> Include the Header component */}
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={NotFound} />
        </Routes>
        {/* <Footer /> Include the Footer component */}
      </div>
    </Router>
  );
}

export default App;
