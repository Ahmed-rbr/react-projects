import React from "react";
import Button from "./component/Button";
import { useState } from "react";
const App = () => {
  const [colorType, setColorType] = useState("HEX");
  const [theColor, setColor] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const generatHex = () => {
    setShowBtn(true);
    setColorType("HEX");
    const hexLetters = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      0,
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    let color = "#";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexLetters.length);
      color += hexLetters[randomIndex];
    }
    document.querySelector("body").style.background = color;
    setColor(color);
  };

  const generatRGB = () => {
    setShowBtn(true);

    setColorType("RGB");
    const x = Math.floor(Math.random() * 256);

    const y = Math.floor(Math.random() * 256);

    const z = Math.floor(Math.random() * 256);

    const color = `rgb(${x}, ${y}, ${z})`;
    document.querySelector("body").style.background = color;
    setColor(color);
  };

  const copyToclipBored = (text) => {
    navigator.clipboard.writeText(text).then(alert("color was Copied!"));
  };
  return (
    <div className="w-full  mx-auto flex-col items-center flex justify-center p-6 sm:w-4/5 md:3/5 lg:2/5">
      <div className="flex flex-col md:flex-row gap-4 ">
        <Button
          value="Generate HEX Color"
          generateColor={() => {
            generatHex();
          }}
        />
        <Button
          value="Generate RGB Color"
          generateColor={() => {
            generatRGB();
          }}
        />
        <Button
          value="Generate Random Color"
          generateColor={() => {
            const isColor = Math.random() < 0.5;
            isColor ? generatHex() : generatRGB();
          }}
        />
      </div>
      <h1 className="text-white font-bold text-3xl my-12">
        {colorType === "HEX" ? "HEX" : "RGB"} Color
      </h1>
      <h2 className="text-white font-bold text-3xl my-18">{theColor}</h2>
      {showBtn && (
        <Button
          generateColor={() => copyToclipBored(theColor)}
          value={"Click here to copy To clipBored"}
        />
      )}
    </div>
  );
};

export default App;
