import React, { useState } from "react";
import { blogData } from "../data/blogData";
import BlogItemWTags from "./BlogItemWTags";
import Pagination from "../../../components/General/Pagination";

const BlogList = ({ style }) => {
  const blogLength = blogData.length;
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const itemsPerpage = 3;
  const startIndex = (currentPageNumber - 1) * itemsPerpage;
  const endIndex = currentPageNumber * itemsPerpage;
  const totalpages = Math.ceil(blogLength / itemsPerpage);

  return (
    <div className="flex flex-col w-full lg:w-[59%] space-y-10 justify-between ">
      <ul className={`${style} space-y-7`}>
        {blogData
          .slice(startIndex, endIndex)
          .map(({ id, img, title, desc, author, date, tags, link }) => (
            <BlogItemWTags
              key={id}
              style=""
              {...{ id, img, title, desc, author, date, tags, link }}
            />
          ))}
      </ul>
      {/* Pagination */}
      {blogLength > 4 && (
        <Pagination
          totalpages={totalpages}
          itemsPerpage={itemsPerpage}
          currentPageNumber={currentPageNumber}
          setCurrentPageNumber={setCurrentPageNumber}
        />
      )}
    </div>
  );
};

export default BlogList;
