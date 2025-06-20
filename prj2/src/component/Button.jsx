import React from "react";

const Button = ({ value, generateColor }) => {
  return (
    <button
      onClick={generateColor}
      className={`hover:scale-105 py-2 px-4 rounded hover:cursor-pointer bg-blue-600 font-semibold text-white text-center hover:bg-blue-400`}
    >
      {value}
    </button>
  );
};

export default Button;
