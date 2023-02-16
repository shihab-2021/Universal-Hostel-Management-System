import React from "react";
import HelloSection from "../HelloSection";
import Carousel from "../HeroSection/Carousel";
import { countries } from "../HeroSection/Data";
import Facilities from "../Facilities/Facilities";
import Contacts from "../Contacts";
import StayTuned from "../StayTuned";
import Rooms from "../Rooms/Rooms";
import Reviews from "../Reviews/Reviews";
import Rating from "../Rating";

const MainHome = () => {
  return (
    <div className="text-white">
      <Carousel images={countries}></Carousel>
      <Rating></Rating>
      <HelloSection></HelloSection>
      <Rooms></Rooms>
      <Reviews></Reviews>
      <Facilities />
      <StayTuned />
      <Contacts />
    </div>
  );
};

export default MainHome;
