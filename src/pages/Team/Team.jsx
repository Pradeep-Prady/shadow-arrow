 import Breadcrumbs from "../../components/General/UI/Breadcrumbs";
import MainContext from "../../components/General/MainContext";
import { FaChevronRight, FaStar } from "react-icons/fa6";
import teamImage from "./assets/teamImage.svg";
import teamsBuildingImage from "./assets/teamsBuildingImage.svg";
import teamBuilding from "./assets/teamBuilding.svg";
import { teamsData } from "../../components/Team/data/teamsData";
import TeamItem from "../../components/Team/components/TeamItem";

const Team = () => {
  return (
    <section className=" xxl:mx-auto pt-20 relative ">
      {/* <BgframeImg URL={serviceBg1} style="right-0 top-0" /> */}
      <Breadcrumbs
        currentPage={[
          { URL: "", text: "Pages" },
          { URL: "", text: "Team" },
        ]}
        style="py-8"
      />
      <div className="px-4 md:px-16 lg:px-9 xl:px-20 space-y-16">
        <div className="flex flex-wrap gap-10 lg:gap-0 justify-between">
          <div className="w-full lg:w-[43%] space-y-6 flex flex-col justify-center">
            <MainContext
              style="space-y-4"
              title="Meet Our Team"
              subTitle="Innovation and Creativity are the driving forces behind our team’s success"
              desc="Discover how our dedicated team champions your service needs with unmatched skills and expertise."
              descStyle="text-xl xl:w-[100%]"
            />
            <div className="flex justify-center md:justify-start">
              <button
                className="flex gap-3 items-center border-2 border-primary px-3 md:px-4 py-2 md:py-4 rounded-full
            hover:bg-gradient-to-r from-primary via-[#FF294B] to-primary transition-all
            ease-linear shadow-2xl hover:shadow-primary"
              >
                <span className="text-xl font-medium">
                  Explore Our Services
                </span>
                <FaChevronRight className="scale-[1.4]" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[55%]">
            <img
              src={teamImage}
              alt=""
              className="object-cover object-center h-full mx-auto"
            />
          </div>
        </div>
        <div className="space-y-16 py-4">
          <div className="flex flex-col items-center justify-center text-justify md:text-center space-y-6">
            <h1 className="text-4xl font-semibold w-full md:w-[80%] lg:w-[60%] leading-tight text-center">
              Introducing The core team that powers our Innovative Solutions
            </h1>
            <div className="space-y-5 pt-8">
              <ul className="flex gap-8 justify-center">
                {[0, 1, 2].map((i) => (
                  <FaStar
                    key={i}
             
                    className={`${
                      i === 1 ? "scale-[3] -translate-y-2" : "scale-[1.8]"
                    }`}
                  />
                ))}
              </ul>
              <h3 className="text-3xl font-medium">Our Mission</h3>
            </div>
            <p className="w-full mxl:w-[70%] lgl:w-[51%] font-medium">
              At the heart of our service providing company lies a dedicated
              team comprised of highly skilled professionals, each masterful in
              their respective roles. From innovative solution architects and
              passionate design thinkers to meticulous project handlers and
              customer-oriented service champions
            </p>
          </div>
          <div className="flex flex-wrap rounded-lg bg-[#FEF6F2] gap-10 lg:gap-0 ">
            <div className="w-full lg:w-[47%]">
              <img
                src={teamsBuildingImage}
                alt=""
                className="object-cover h-full w-full object-center"
              />
            </div>
            <div
              className="w-full lg:w-[53%] flex flex-col justify-center items-center text-justify md:text-center
              px-5 md:px-12 space-y-4 py-5 bg-[#FEF6F2] "
            >
              <img
                src={teamBuilding}
                alt=""
                className="mx-auto object-contain"
              />
              <p className="font-semibold">
                Our team members come from a wealth of backgrounds, each
                bringing a unique set of skills and experiences that contribute
                to our holistic approach
              </p>
              <p className="text-sm font-medium ">
                Flaunting a cumulative experience spanning decades, our team’s
                wide-ranging expertise encapsulates the essence of our approach
                to service always thinking outside the box.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFE8D7] rounded-t-[70px] mt-16 pdngx py-14 space-y-12">
        <h1 className="text-3xl font-bold text-center">
          Our Technical Experts
        </h1>
        <ul className="relative flex flex-wrap justify-center gap-7 lg:gap-9 lgl:gap-10 xl:gap-12 w-full overflow-hidden p-0">
          {teamsData.map(({ id, image, name, designation, socialLinks }) => (
            <TeamItem
              key={id}
              style="w-full md:w-[47%] lg:w-[30.2%]"
              {...{ image, name, designation, socialLinks }}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
