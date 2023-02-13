import React from "react";
import Hello from "../Hello/Hello";
import Carousel from "../HeroSection/Carousel";
import { countries } from "../HeroSection/Data";

const MainHome = () => {
  return (
    <div>
      <Carousel images={countries}></Carousel>
      <Hello></Hello>
    </div>
  );
};

export default MainHome;
