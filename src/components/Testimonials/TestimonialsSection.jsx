import React from "react";
// import bg from "../../assets/testimonial_bg.svg";
import bg from "../../assets/testimonial_bg1.png";
import Carousel from "./components/TestimoCarousel";

const TestimonialsSection = () => {
  return (
    <section
      className=" bg-no-repeat w-full bg-cover bg-center justify-center flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Carousel />
    </section>
  );
};

export default TestimonialsSection;
