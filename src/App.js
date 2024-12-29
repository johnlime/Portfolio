import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";

import Projects from "./components/Projects/Projects";
import SpringCreatures from "./components/Projects/SpringCreatures";
import LVFitting from "./components/Projects/LVFitting";
import ConvergentEvolution from "./components/Projects/ConvergentEvolution";
import DirichletDIAYN from "./components/Projects/DirichletDIAYN";

import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
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
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/Portfolio/projects" element={<Projects />} />
          <Route path="/Portfolio/spring-creatures" element={<SpringCreatures />} />
          <Route path="/Portfolio/lv-fitting" element={<LVFitting />} />
          <Route path="/Portfolio/convergent-evolution" element={<ConvergentEvolution />} />
          <Route path="/Portfolio/diayn" element={<DirichletDIAYN />} />
          <Route path="/Portfolio/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/Portfolio"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// <Route path="/about" element={<About />} />
