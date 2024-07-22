import React from "react";
import BlogItem from "./BlogItem";

const CategorizedBlogs = ({ category, data }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-5">
        <h1 className="text-primary text-4xl font-semibold">{category}</h1>
        <hr className="border-2 border-primary w-full rounded-3xl translate-y-[3.5px]" />
      </div>
      <ul className="flex flex-wrap gap-9 xl:gap-10 justify-between">
        {data.slice(0, 4).map(({ id, img, title, desc, date }) => (
          <BlogItem
            {...{ id, img, title, desc, date }}
            style="w-full lg:w-[48%] p-2 h-auto lg:h-56 gap-3"
            key={id}
            imgPrntStyle=" w-[40%]"
            cntntPrntStyle="w-[60%] space-y-3"
          />
        ))}
      </ul>
    </div>
  );
};

export default CategorizedBlogs;
