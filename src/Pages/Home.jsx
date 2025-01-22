import React from "react";
import Afnan from "../components/Afnan_com";
import Faruq from "../components/Faruq";
import HeroSection from "../HeroSection/Herosection";
import Mohamed from "../components/Mohamed";
import H4assoni from "../components/H4assoni";
import Saphaa from "../components/saphaa";
import Advertise from "../components/Advertise";
import Product_cars from "../components/Product_cars";
import Foter from "../components/Foter";
import ContactForm from "./Contact";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <Mohamed />
      <Afnan />
      <Faruq />
      <H4assoni />
      <Saphaa />
      <Advertise />
      <Product_cars />
      <ContactForm />
      <Foter />
    </div>
  );
};

export default Home;
