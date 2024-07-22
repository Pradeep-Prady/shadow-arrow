import React from "react";

const BlogItem = ({
  id,
  img,
  title,
  desc,
  author,
  date,
  tags,
  link,
  showDesc,
  URL,
  // STYLES of this Components

  style,
  imgPrntStyle,
  imgStyle,
  cntntPrntStyle,
  titleStyle = "text-2xl font-semibold",
}) => {
  return (
    <li
      className={`flex ${style} border-2 border-primary/20 rounded-lg group space-y-3 overflow-clip`}
    >
      <div className={`${imgPrntStyle} overflow-hidden rounded-lg  border`}>
        <img
          src={img}
          alt=""
          className={`${imgStyle} object-cover object-center w-full h-full group-hover:scale-110 transition-all duration-500`}
        />
      </div>

      <div className={`${cntntPrntStyle} `}>
        <h1 className={`${titleStyle}`}>{`${
          title?.trim().length > 35 ? title?.trim().slice(0, 35) + "..." : title
        }`}</h1>
        {desc && (
          <p className="text-sm">{`${
            desc?.trim().length > 95 ? desc?.trim().slice(0, 95) + "..." : desc
          }`}</p>
        )}
        <h6 className="text-primary">{date}</h6>
      </div>
    </li>
  );
};

export default BlogItem;
