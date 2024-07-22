import BgframeImg from "../../components/General/UI/BgframeImg";
import Breadcrumbs from "../../components/General/UI/Breadcrumbs";
import MainContext from "../../components/General/MainContext";
import blogBg from "../Service/assets/servicesBg1.svg";
import BlogList from "./components/BlogList";
import ExploreBlogs from "./components/ExploreBlogs";
import FeaturedBlogs from "./components/FeaturedBlogs";
import MoreBlogs from "./components/MoreBlogs";

const Blog = () => {
  return (
    <section className=" xxl:mx-auto pt-20 relative">
      <BgframeImg URL={blogBg} style="right-0 top-0" />
      <Breadcrumbs currentPage={[{ URL: "", text: "Blog" }]} style="py-8" />
      <div className="px-4 md:px-16 lg:px-9 xl:px-20 space-y-12 pt-4 pb-20">
        <MainContext
          style="space-y-3"
          title="Our Blog"
          desc="Crafting new bright brands, unique visual systems and digital experience focused on a wide range of original collabs."
          descStyle="text-xl leading-8"
        />
        <div className="flex flex-wrap gap-8 lg:gap-0 justify-between">
          <BlogList />
          <ExploreBlogs />
        </div>
      </div>
      <FeaturedBlogs />
      <MoreBlogs />
    </section>
  );
};

export default Blog;
