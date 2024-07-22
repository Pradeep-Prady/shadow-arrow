 
import { valueItemsData } from "./data/valuesData";
import ValueItem from "./components/ValueItem";

const Value = () => {
  return (
    <section className="relative">
      <div className="md:absolute z-20 flex justify-center items-center w-full  md:-translate-y-28">
        <div
          className="bg-gradient-to-b from-[#660616] to-180% to-black w-full md:w-[88%] md:rounded-2xl
        px-4 md:px-12 lg:px-20 py-10 lg:py-14 flex flex-wrap justify-between gap-8 "
        >
          <div className="w-full lg:w-[35%] space-y-2">
            <h3 className="text-primary text-4xl font-medium">Why Choose Us</h3>
            <p className="text-white font-light leading-7 text-justify md:text-left">
           {`   We prioritize building genuine partnerships with our clients. Your
              success is our success, and we're dedicated to exceeding your
              expectations at every touchpoint.`}
            </p>
          </div>
          <div className="flex w-full lg:w-[60%] flex-wrap md:gap-3 xl:gap-5 justify-between">
            {valueItemsData.map(({ id, number, text }) => (
              <ValueItem key={id} id={id} number={number} text={text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
