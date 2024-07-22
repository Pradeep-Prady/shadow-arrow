import React from "react";

const BgSection = ({ right_circle, rightStyle, left_circle, leftStyle }) => {
  return (
    <div className="relative">
      <img
        src={right_circle}
        alt=""
        className={`absolute  right-0 w-[450px] -z-10 pt-[800px] mdl:pt-[400px] lg:pt-60 ${rightStyle}`}
      />
      <img
        src={left_circle}
        alt=""
        className={`absolute left-0 w-[400px] -z-10 ${leftStyle}`}
      />
    </div>
  );
};

export default BgSection;
