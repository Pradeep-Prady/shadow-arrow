import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const BlogItem = ({ id, image, date, title, link_to }) => {
  return (
    <li className="border-2 rounded-lg w-full md:w-[47%] lg:w-[31%]   transition-all ease-linear duration-200">
      <div className="w-full">
        <img src={image} alt="" className=" w-full object-contain" />
      </div>
      <div className="p-3 space-y-3">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="flex flex-wrap mdl:flex-nowrap justify-center mdl:justify-between items-center gap-3 mdl:gap-0">
          <h6 className="text-xl text-primary">{date}</h6>
          <button
            className="flex justify-center items-center px-2 py-1
          hover:text-primary border-2 rounded-lg space-x-2 
          border-black hover:border-primary transition-all ease-linear"
          >
            <span className="">Read More</span>
            <FaChevronRight className="scale-[1.3]" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default BlogItem;
