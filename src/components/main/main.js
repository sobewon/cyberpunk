// import React, { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import About from "../about/about";
//import Contact from "./contact";
//import Resume from "./resume";
import Portfolio from "../portfolio/portfolio";

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

function Main({ setPage }) {
  return (
    <Router>
      <Header setPage={setPage} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/reaction-portfolio" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Main;