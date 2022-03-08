import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./footer/Footer";
import Myskills from "./pages/Myskills";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="about" element={<About />}></Route>
          <Route exact path="portfolio" element={<Portfolio />} />
          <Route exact path="my-skills" element={<Myskills />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
