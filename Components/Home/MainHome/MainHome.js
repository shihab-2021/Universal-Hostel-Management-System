import React from "react";
import HelloSection from "../HelloSection";
import Carousel from "../HeroSection/Carousel";
import { countries } from "../HeroSection/Data";
import Facilities from "../Facilities/Facilities";
import Contacts from "../Contacts";
import StayTuned from "../StayTuned";
import Footer from "../Footer";

const MainHome = () => {
  return (
    <div className="bg-white text-black">
      <Carousel images={countries}></Carousel>
      <HelloSection></HelloSection>
      <Facilities />
      <StayTuned />
      <Contacts />
      <Footer />
    </div>
  );
};

export default MainHome;
