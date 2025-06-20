import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <FaStar
      size={32}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`cursor-pointer transition-transform duration-200 ${
        filled ? "text-yellow-500" : ""
      } `}
    />
  );
};

export default Star;
