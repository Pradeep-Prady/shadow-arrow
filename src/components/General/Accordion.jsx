import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import TimeLineDot from "./UI/TimeLineDot";
import { AnimatePresence, m } from "framer-motion";

const Accordion = ({ id, header, body }) => {
  const [viewBody, setViewBody] = useState(false);
  return (
    <m.div
      className="space-y-3"
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "linear" }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <TimeLineDot isAbsolute={false} />
          <h1 className="text-primary text-3xl font-medium">{header}</h1>
        </div>
        <FaPlus
          className="text-primary cursor-pointer"
          size={22}
          onClick={() => setViewBody((prevState) => !prevState)}
        />
      </div>
      {viewBody && (
        <m.p
          className=" px-14 text-xl font-medium"
          initial={{ opacity: 0, y: -50 }}
          exit={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          //   transition={{ duration: 1, ease: "linear" }}
        >
          {body}
        </m.p>
      )}
    </m.div>
  );
};

export default Accordion;
