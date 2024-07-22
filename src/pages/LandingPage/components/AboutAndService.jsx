import React from "react";
import AboutSection from "../../../components/About/AboutSection";
import big_circle from "../../../assets/big_circle.svg";
import small_circle from "../../../assets/small_circle.svg";
import ServiceSection from "../../../components/Service/ServiceSection";

const AboutAndService = () => {
  return (
    <div className="md:pt-80 lg:pt-52 xl:pt-32 pb-8 relative">
      <div className="relative">
        <img
          src={big_circle}
          alt=""
          className=" absolute  right-0 w-[450px] -z-10 pt-[800px] mdl:pt-[400px] lg:pt-60"
        />
        <img
          src={small_circle}
          alt=""
          className=" absolute left-0 w-[400px] -z-10"
        />
      </div>
      <AboutSection />
      <ServiceSection />
    </div>
  );
};

export default AboutAndService;
