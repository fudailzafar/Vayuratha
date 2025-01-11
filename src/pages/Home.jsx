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
  let heroData = [
    { text1: "Buy for your", text2: "Agriculture" },
    { text1: "Check out", text2: "our Drones" },
    { text1: "Give in to", text2: "your passions" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);
  return (
    <div>
      
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        className={`${playStatus ? "hidden" : "block"}`}
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
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
