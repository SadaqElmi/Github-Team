import React from "react";
import Afnan from "../components/Afnan_com";
import Faruq from "../components/Faruq";
import HeroSection from "../HeroSection/Herosection";
import Mohamed from "../components/Mohamed";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Mohamed />
      <Afnan />
      <Faruq />
    </div>
  );
};

export default Home;
