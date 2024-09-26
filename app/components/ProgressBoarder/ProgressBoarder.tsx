"use client";
import React, { useEffect, useState } from "react";
const ProgressBoarder = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    let intervalID: number;
    const updateProgressBar = () => {
      const intervalID = setInterval(() => {
        setWidth((prevWidth: number) => {
          if (prevWidth >= 100) {
            clearInterval(intervalID);
            return 100;
          }
          return prevWidth + 5;
        });
      }, 2);
    };
    updateProgressBar();
    return () => clearInterval(intervalID);
  }, []);
  return (
    <div className="w-full  rounded-full h-0.5">
      <div
        className="bg-meroColor-light-grey rounded-full h-0.5 transition-all ease-in duration-700 delay-300"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};
export default ProgressBoarder;
