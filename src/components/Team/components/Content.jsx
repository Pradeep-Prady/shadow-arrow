import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Content = ({ id, image, name, designation, socialLinks }) => {
  return (
    <div className="h-full w-full flex items-end group">
      <div
        className="p-5 flex justify-between items-end w-full opacity-100 md:opacity-0
        group-hover:opacity-100 transition-all duration-[600ms]"
      >
        <div className="">
          <h1 className="text-4xl">{name}</h1>
          <h3 className="text-lg font-light">{designation}</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-4 md:scale-[1.3]">
          <a
            href={socialLinks.instagram}
            target="_blank"
            // className="cursor-pointer"
          >
            <FaInstagram />
          </a>
          <a
            href={socialLinks.x}
            target="_blank"
            // className="cursor-pointer"
          >
            <FaTwitter />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            // className="cursor-pointer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
