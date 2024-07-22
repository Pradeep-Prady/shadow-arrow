import { FaSearch } from "react-icons/fa";
import RecentBlogs from "./RecentBlogs";
import { blogData, categoriesData, popularTagsData } from "../data/blogData";
import { FaAngleRight } from "react-icons/fa6";

const ExploreBlogs = () => {
  return (
    <div
      className="w-full lg:w-[37%] bg-gradient-to-tr from-black  to-primary rounded-lg px-3 lg:px-6
    text-white py-12 space-y-[85px] h-[1900px]"
    >
      <div className="space-y-5">
        <h1 className="text-4xl font-medium text-primary">Explore Blogs</h1>
        <div className="border-2 border-primary rounded flex bg-black/30 items-center p-2 pr-3 gap-6">
          <input
            type="text"
            className="h-full w-full py-1 px-2 bg-transparent text-cement/80 outline-none peer"
            placeholder="Search"
          />
          <FaSearch className="scale-[1.5] text-primary peer-focus:text-cement/80 cursor-pointer" />
        </div>
      </div>
      <RecentBlogs data={blogData} />
      {/* Categories */}
      <div className="space-y-5">
        <h2 className="text-white text-3xl font-medium">Categories</h2>
        <ul className="space-y-2">
          {categoriesData.map(({ id, URL, text }) => (
            <a
              key={id}
              className="flex items-center justify-between border-b-2 border-cement/50
              rounded-2xl px-3 py-2 hover:scale-105 transition-all ease-linear duration-300"
              href={URL}
              target="_blank"
            >
              <span>{text}</span>
              <FaAngleRight className="text-primary" />
            </a>
          ))}
        </ul>
      </div>
      {/* Tags */}
      <div className="space-y-5">
        <h2 className="text-white text-3xl font-medium">Popular Tags</h2>
        <ul className="flex flex-wrap gap-4  items-center h-64 overflow-y-auto ">
          {popularTagsData.map(({ id, tag }) => (
            // border-[#783513]
            <li
              key={id}
              className="border-2 border-primary w-fit px-3 py-1 rounded-full
              font-light"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExploreBlogs;
