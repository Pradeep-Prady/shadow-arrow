const ValueItem = ({ id, number, text }) => {
  return (
    <div
      className="flex flex-col w-full mb-10 md:mb-6 lg:mb-0 md:w-[48%] justify-center items-center space-y-3 "
      key={id}
    >
      <h3 className="text-primary text-[44px] font-medium">{number}+</h3>
      <h6 className="text-white font-light text-[17px]">{text}</h6>
    </div>
  );
};

export default ValueItem;
