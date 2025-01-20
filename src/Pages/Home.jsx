import React from "react";
import Afnan from "../components/Afnan_com";
import Faruq from "../components/Faruq";
import HeroSection from "../HeroSection/Herosection";
import Mohamed from "../components/Mohamed";
import H4assoni from "../components/H4assoni";
import Footer from '../components/Footer';



const Home = () => {
  return (
    <div>
      <HeroSection />
      <Mohamed />
      <Afnan />
      <Faruq />
      <H4assoni />
      <Footer />
    </div>
  );
};

export default Home;
