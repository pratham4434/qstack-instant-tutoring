import React from 'react'
import {
    Footer,
    Blog,
    Possibility,
    Features,
    WhatGPT3,
    Header,
  } from "../../containers";
import { CTA, Brand, Navbar } from "../../components";


function Home() {
  return (
    <div>
        <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Possibility />

      <Features />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home