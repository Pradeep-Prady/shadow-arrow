import React from "react";
import { blogData } from "../data/blogData";
import BlogItem from "./BlogItem";

const BlogList = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-7 ">
      {blogData.map(({ id, image, date, title, link_to }) => (
        <BlogItem
          key={id}
          image={image}
          date={date}
          title={title}
          link_to={link_to}
        />
      ))}
    </ul>
  );
};

export default BlogList;
