import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Home from './pages/Home.jsx'
import Skill from './pages/Skillset.jsx'
import Project from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Preloader from "./components/PreLoader.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skillset" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/cases" element={<Cases />} />
          <Route path="/case1" element={<CaseOne />} />
          <Route path="/case2" element={<CaseTwo />} />
          <Route path="/case3" element={<CaseThree />} />
          <Route path="/case4" element={<CaseFour />} />
          <Route path="/case5" element={<CaseFive />} />
          <Route path="/case6" element={<CaseSix />} />
          <Route path="/case7" element={<CaseSeven />} />
          <Route path="/case8" element={<CaseEight />} /> */}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
