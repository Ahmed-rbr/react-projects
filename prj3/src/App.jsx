import React, { useState } from "react";
import Star from "./components/Star";
const App = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const handleHovering = (id) => {
    setHovered(id);
  };
  const handleClicking = (id) => {
    setRating(id);
  };
  const handleMovingOut = () => {
    setHovered(rating);
  };

  return (
    <div className="flex gap-2   justify-center items-center mx-auto my-4">
      {[...Array(10)].map((_, id) => {
        const index = id + 1;
        return (
          <Star
            key={id}
            filled={index <= (hovered ?? rating)}
            onClick={() => handleClicking(index)}
            onMouseEnter={() => handleHovering(index)}
            onMouseLeave={() => handleMovingOut()}
          />
        );
      })}
      <p className="">Rating: {rating}/10</p>
    </div>
  );
};

export default App;
