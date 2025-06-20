import React from "react";

const Accordion = ({ data, isOpen, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className="bg-blue-300  w-full sm:w-4/5 md:w-3/5 lg:w-2/5 rounded drop-shadow-2xl gap-6 flex flex-col p-4"
    >
      <div className="flex  items-center  justify-between">
        <h2 className="text-white font-bold">{data.question} </h2>
        <span className="font-black transition-all duration-500 text-white text-3xl">
          {isOpen ? "-" : "+"}
        </span>
      </div>
      {isOpen && (
        <p className={`text-center  font-semibold  text-black`}>
          {data.answer}
        </p>
      )}
    </div>
  );
};

export default Accordion;
