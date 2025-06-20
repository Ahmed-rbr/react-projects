import React from "react";

const Btn = ({ onclick, isEnabled }) => {
  return (
    <button
      onClick={onclick}
      className="bg-amber-900 mt-10 hover:bg-amber-700 hover:cursor-pointer hover:scale-105 px-4 rounded transition-all duration-200 text-white font-bold p-2"
    >
      {isEnabled ? "Disable Multi Selection" : "Enable Multi Selection"}{" "}
    </button>
  );
};

export default Btn;
