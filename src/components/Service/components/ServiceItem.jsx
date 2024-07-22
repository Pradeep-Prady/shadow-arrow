import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const ServiceItem = ({ id, title, desc }) => {
  return (
    <li
      className="w-full mdl:w-[48%] bg-primary text-white rounded-xl p-3 mdl:p-5 space-y-3
      border-l-4 border-b-4 border-primary hover:bg-cement/90 hover:text-primary
      transition-all ease-linear mb-11"
    >
      <div className="flex items-center gap-3">
        <h3 className="text-3xl font-medium">{title}</h3>
        <FaChevronRight />
      </div>
      <p className="font-ligh">{desc}</p>
    </li>
  );
};

export default ServiceItem;
