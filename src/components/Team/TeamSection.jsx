import React from "react";
import MainContext from "../General/MainContext";
import XCarousel from "./components/X-Carousel";
import Carousel from "./components/Carousel";

const TeamSection = () => {
  return (
    <section className="pdng space-y-8">
      <MainContext
        title="Meet Our Team"
        subTitle="The People behind the "
        stOrngeText="Passion"
        desc="Meet the passionate individuals who bring your vision to life. Our team of skilled professionals boasts extensive experience in web design, development, branding, marketing, and graphic design. "
      />
      {/* <XCarousel /> */}
      <Carousel />
    </section>
  );
};

export default TeamSection;
