import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { RxDotFilled } from "react-icons/rx";
import img from "../../../assets/slider_image.svg";
import quote from "../../../assets/quotes_icon.svg";
import { slides } from "../data/testimonialData.js";
// import { Carousel } from "flowbite-react";

// Carousel : Using useState
const TestimoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[90%]  w-full mdl:py-14 px-4 relative group flex items-center">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full hidden mdl:block h-[600px] my-auto relative rounded-2xl bg-right bg-no-repeat bg-contain opacity-25 duration-500"
      />
      <div className="mdl:absolute top-0 left-0 text-white  w-full h-full pdng flex flex-wrap justify-between gap-5 mdl:gap-0">
        {/* px-36 py-20 */}
        <div className="w-full mdl:w-[33%] h-full flex ">
          <img
            src={slides[currentIndex].url}
            alt=""
            className="m-auto object-contain"
          />
        </div>
        <div
          className="w-full mdl:w-[59%] flex flex-col justify-center text-white
          text-[28px] leading-9 font-medium space-y-4"
        >
          <div className="flex space-x-1 justify-end">
            {[quote, quote].map((image) => (
              <img key={image} src={image} alt="" />
            ))}
          </div>
          <h1 className="">{slides[currentIndex].desc}</h1>
          <h3>{slides[currentIndex].by}</h3>

          {/* Buttons: Left and Right */}
          <div className=" flex justify-end gap-4">
            {/* Left Arrow */}
            <div
              className=" select-none  rounded-full p-6 bg-black/20 text-white cursor-pointer border-4 border-primary
            hover:bg-gradient-to-br from-primary to-[#D0172D]"
              onClick={prevSlide}
            >
              <FaChevronLeft className="scale-[1.7]" />
            </div>
            {/* Right Arrow */}
            <div
              className=" select-none rounded-full p-6 bg-black/20 text-white cursor-pointer border-4 border-primary
            hover:bg-gradient-to-br from-primary to-[#D0172D]"
              onClick={nextSlide}
            >
              <FaChevronRight className="scale-[1.7]" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default TestimoCarousel;

{
  /* <Carousel slide={false}>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel> */
}
