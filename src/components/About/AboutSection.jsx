import { FaChevronRight } from "react-icons/fa6";
import men from "../../assets/aboutus_men.svg";
import women from "../../assets/aboutus_women.svg";
import { Link } from "react-router-dom";

const AboutSection = ({ aboutBtn = true }) => {
  return (
    <section className="flex flex-wrap lg:flex-nowrap px-4 md:px-16 lg:px-9 xl:px-24 py-28 justify-between gap-12 mdl:gap-40 ">
      <div className="flex w-full lg:w-[50%] relative justify-center lg:justify-start gap-3">
        <img
          src={men}
          alt=""
          className="hidden md:block mdl:sticky lg:left-0 w-[310px]  mdl:translate-y-28"
        />
        <img
          src={women}
          alt=""
          className="mdl:sticky -z-10  lg:right-0 w-[310px] lg:-translate-x-40"
        />
      </div>
      <div className="w-full lg:w-[50%] space-y-4 ">
        <div className="space-y-4 py-3 text-5xl md:text-[66px] md:leading-[66px] font-semibold">
          <h1 className="">Crafting</h1>
          <h1 className=" text-primary">Exceptional</h1>
          <h1 className="">Experiences</h1>
        </div>
        <p className="text-2xl font-medium leading-9 py-3">
          Our team consists of skilled designers, developers, and marketing
          specialists who bring a wealth of experience and innovative thinking
          to every project.
        </p>

        {aboutBtn && (
          <div className="flex justify-end pt-3">
            <Link
              to={`/about`}
              className="flex justify-center items-center px-3 py-2
         text-black hover:text-primary border-[3px] rounded-lg space-x-2 
          border-black hover:border-primary transition-all ease-linear"
            >
              <span className="text-[22px] font-medium">More About Us</span>
              <FaChevronRight className="scale-[1.3]" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
