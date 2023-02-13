import React from "react";
import Hello from "../Hello/Hello";
import HelloSection from "../HelloSection";
import Carousel from "../HeroSection/Carousel";
import { countries } from "../HeroSection/Data";

const MainHome = () => {
  return (
    <div>
      <Carousel images={countries}></Carousel>
      <HelloSection></HelloSection>
    </div>
  );
};

export default MainHome;
