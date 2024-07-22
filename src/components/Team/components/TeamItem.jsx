import React from "react";
import Content from "./Content";

const TeamItem = ({ id, image, name, designation, socialLinks, style }) => {
  return (
    <li
      key={id}
      className={`text-white bg-cover bg-no-repeat bg-center h-96 rounded-lg
      hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] shadow-primary ${style}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Content
        name={name}
        designation={designation}
        socialLinks={socialLinks}
      />
    </li>
  );
};

export default TeamItem;
