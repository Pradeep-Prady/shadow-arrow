import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const GalleryItem = ({ src, text = "Branding", style, url = "/" }) => {
  return (
    <div className={`relative group h-96 rounded-3xl ${style}`}>
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover object-center rounded-3xl"
      />
      <div
        className="absolute inset-0 bg-black rounded-3xl bg-opacity-50 opacity-100 md:opacity-0 group-hover:opacity-100
       flex flex-col items-center justify-center text-white p-16 gap-2 cursor-pointer"
      >
        <p className="text-2xl font-semibold">{text}</p>
        <a
          href={url}
          target="_blank"
          className="flex items-center gap-2 hover:text-primary transition-all ease-linear"
        >
          <span>View Portfolio</span>
          <FaAngleRight />
        </a>
      </div>
    </div>
  );
};

export default GalleryItem;
