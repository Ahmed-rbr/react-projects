import React, { useEffect, useState } from "react";

const App = () => {
  const [darkMode, setDarkmode] = useState(null);
  useEffect(() => {
    try {
      const storedMode = JSON.parse(localStorage.getItem("darkMode"));
      setDarkmode(storedMode ?? false);
    } catch {
      setDarkmode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode !== null) {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode]);
  if (darkMode === null) return null;

  return (
    <div
      className={`h-screen w-full gap-4 flex-col flex items-center justify-center  ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      <h2 className={`text-3xl  ${darkMode ? "text-white" : "text-black"}`}>
        hello world
      </h2>

      <button
        onClick={() => setDarkmode((prev) => !prev)}
        className={`px-6 py-2 rounded-2xl shadow-2xl hover:cursor-pointer ${
          darkMode ? "bg-white text-black" : " text-white bg-black"
        }`}
      >
        click me
      </button>
    </div>
  );
};

export default App;
