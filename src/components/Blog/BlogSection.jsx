import React from "react";
import BlogList from "./components/BlogList";

const BlogSection = () => {
  return (
    <section className="pdng space-y-12">
      <div className="space-y-2">
        <h1 className="text-[66px] leading-[66px] ">What's New In Blog</h1>
        <h3 className="text-3xl">Explore Our Latest Blogs</h3>
      </div>
      <BlogList />
    </section>
  );
};

export default BlogSection;
