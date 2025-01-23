import { useState, useEffect } from "react";
import React from "react";
import Background from "../components/background/Background";
import Hero from "../components/hero/Hero";
import Grid from "../components/grid/Grid";
import Categories from "../components/categories/Categories";
import Features from "../components/features/Features";
import Video from "../components/video/Video";
import { VisualImpact } from "../components/visualImpact/VisualImpact";
import Services from "../components/services/Services";

const Home = () => {
  
  return (
    <div>
      
      {/* <Background playStatus={playStatus} heroCount={heroCount} /> */}
      <Hero
        
      />
      <Categories />
      <Features />
      <Video />
      <VisualImpact />
      <Services />
      <Grid />
      
    </div>
  );
};

export default Home;
