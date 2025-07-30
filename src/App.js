import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Credits from "./components/Credits";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"; 
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="content">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Credits />
      </div>
      <Footer /> {/* ✅ This makes it appear at the bottom */}
    </div>
  );
}
export default App;
