import React from "react";

const BgframeImg = ({ URL, style }) => {
  return <div>
    <img src={URL} alt="" className={`absolute -z-10 ${style}`} />
  </div>;
};

export default BgframeImg;
