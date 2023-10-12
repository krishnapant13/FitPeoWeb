import React from "react";
import { PiHandWavingFill } from "react-icons/pi";
import FPSearchBar from "./FPSearchBar.jsx";
const FPHeader = () => {
  return (
    <div className="w-full flex justify-between items-center py-3 md:p-3">
      <div className="flex justify-evenly items-center">
        <p className="font-[400]">Hello Shahrukh</p>
        <PiHandWavingFill size={20} color="#e0ac69" />,
      </div>
      <div className="md:block hidden ">
        <FPSearchBar />
      </div>
    </div>
  );
};

export default FPHeader;
