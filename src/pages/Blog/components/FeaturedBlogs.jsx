import React from "react";
import { blogData } from "../data/blogData";

const FeaturedBlogs = () => {
  return (
    <div className="bg-[#FFEEE5] px-4 md:px-16 lg:px-9 xl:px-20 py-10 space-y-8">
      <h1 className="text-4xl font-semibold">Featured Blogs</h1>
      <ul className="flex overflow-x-clip hover:overflow-x-scroll gap-7 pb-3">
        {blogData.map(({ id, img, link, title, author, date }) => (
          <li className="flex-shrink-0 w-[100%] md:w-[48%] lg:w-[30%] border rounded-lg border-primary/25">
            <div className="h-[290px] w-full rounded-lg">
              <img
                src={img}
                alt=""
                className="h-full object-cover object-center rounded-t-lg w-full"
              />
            </div>
            <div className="text-primary p-2">
              <a
                className="text-black text-2xl font-medium"
                href={link}
                target="_blank"
              >{`${
                title.length > 30 ? title.trim().slice(0, 39) + "..." : title
              }`}</a>
              <h3 className="text-lg capitalize">{author}</h3>
              <h6>{date}</h6>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedBlogs;
