import React from "react";
import WhiteBttn from "../../../components/General/UI/WhiteBttn";

const BlogItemWTags = ({
  id,
  img,
  title,
  desc,
  author,
  date,
  tags,
  link,
  showDesc,
  style,
  URL,
}) => {
  return (
    <li className={`${style} border-2 rounded-lg p-5 group space-y-3`}>
      <div className="w-full overflow-hidden rounded-lg h-min">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full group-hover:scale-110 transition-all duration-500"
        />
      </div>

      <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>

      <div className="flex flex-wrap md:flex-nowrap gap-5 justify-between items-center">
        <div className="flex">
          <h6 className="pr-3 border-r-2 border-primary">{`Written By : ${author}`}</h6>
          <h6 className="pl-3">{date}</h6>
        </div>
        <ul className="flex gap-3 justify-center md:justify-start w-full md:w-auto ">
          {tags &&
            tags?.map(({ id, tag }) => (
              <li
                key={id}
                className="text-white bg-primary px-2 py-[1px] rounded-full"
              >
                {tag}
              </li>
            ))}
        </ul>
      </div>

      <WhiteBttn
        text="Read More"
        black
        style="scale-[0.75] ml-auto"
        redirect_to={link}
      />
    </li>
  );
};

export default BlogItemWTags;
