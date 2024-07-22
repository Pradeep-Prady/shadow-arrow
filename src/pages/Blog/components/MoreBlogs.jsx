import React from "react";
import CategorizedBlogs from "./CategorizedBlogs";
import { blogData } from "../data/blogData";

const MoreBlogs = () => {
  return (
    <div className="px-4 md:px-16 lg:px-9 xl:px-20 py-16 space-y-10">
      <h1 className="text-5xl font-semibold">Explore More Blogs</h1>
      <CategorizedBlogs category="Service" data={blogData} />
      <CategorizedBlogs category="Design" data={blogData} />
    </div>
  );
};

export default MoreBlogs;
