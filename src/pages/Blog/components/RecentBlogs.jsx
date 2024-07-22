 
import { blogData } from "../data/blogData";
import BlogList from "./BlogList";
import BlogItem from "./BlogItem";

const RecentBlogs = ({ data }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-white text-3xl font-medium">Recent Blogs</h2>
      <ul className="space-y-3 ">
        {blogData.slice(0, 4).map(({ id, img, date, title }) => (
          <BlogItem
            key={id}
            {...{ id, img, date, title }}
            style=" gap-3 bg-black/20"
            imgPrntStyle="w-[45%]"
            titleStyle="text-xl font-normal"
            cntntPrntStyle="flex flex-col justify-between w-[50%] pb-1 pr-1"
          />
        ))}
      </ul>
    </div>
  );
};

export default RecentBlogs;
