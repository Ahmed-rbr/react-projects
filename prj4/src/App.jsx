import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const App = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list").then((res) => {
      setData(res.data.slice(0, 10));
    });
  }, []);

  const handleNext = () => {
    setIsImageLoading(true);
    setIndex((prev) => {
      console.log(prev);

      return (prev = (prev + 1) % data.length);
    });
  };
  const handlePrev = () => {
    setIsImageLoading(true);
    setIndex((prev) => {
      console.log(prev);

      return (prev = (prev - 1) % data.length);
    });
  };

  return (
    <div className="flex relative gap-2 w-3/5 h-64 justify-center items-center mt-24 mx-auto my-4">
      {data.length === 0 ? (
        <p className="text-gray-600 text-lg">Loading data...</p>
      ) : (
        <>
          {isImageLoading && (
            <p className="text-gray-500 absolute">Loading image...</p>
          )}
          <img
            src={data[index].download_url}
            key={data[index].id}
            alt=""
            onLoad={() => setIsImageLoading(false)}
            className={`w-6/12 object-cover  rounded cursor-pointer transition-opacity duration-300 ${
              isImageLoading ? "opacity-0" : "opacity-100"
            }`}
          />
        </>
      )}
      <FaChevronLeft
        onClick={() => handlePrev()}
        className={`left-0 top-5/12 font-bold hover:cursor-pointer hover:scale-110   absolute ${
          index === 0 ? "hidden" : ""
        }`}
        size={36}
      />
      <FaChevronRight
        onClick={() => handleNext()}
        className={`right-0 top-5/12 hover:cursor-pointer hover:scale-110  absolute font-bold ${
          index === data.length - 1 ? "hidden" : ""
        }`}
        size={36}
      />
      <div className="flex absolute bottom-0 gap-3 transform -translate-x-1/2  left-1/2">
        {[...Array(data.length)].map((_, id) => {
          return (
            <div
              key={id}
              className={`h-3 w-3 rounded-full ${
                index === id ? "bg-black" : "bg-blue-300"
              } `}
            >
              {console.log(id)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
