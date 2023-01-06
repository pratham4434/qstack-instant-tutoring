import React from "react";
import "./App.css";
import Video from "./components/videochat/Video.jsx"
import Videochatnav from "./components/videochat/Videochatnav";
import Discussion from "./components/discussion/Discussion";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route path="/" element={<><div className="gradient__bg">
        <Navbar />
        <Header />
      </div><Brand />
      <WhatGPT3 />
      <Possibility />

      <Features />
      <CTA />
      <Blog />
      <Footer /></>}/>

    
      {/* <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Possibility />

      <Features />
      <CTA />
      <Blog />
      <Footer /> */}
      <Route path="/video" element={<><Videochatnav/><Video/></>}/>
      <Route path="/discusssion" element={<><Videochatnav/><Discussion/><Discussion/><Discussion/></>}/>
      </Routes>
    </div>
    </Router>
  );
};

export default App;
