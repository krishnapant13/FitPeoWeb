import React from "react";

const FPDataCard = ({ color, heading, price, data, dataIcon, mainIcon }) => {
  return (
    <div className="w-full bg-white rounded-lg flex justify-center items-center p-3">
      <div className="w-[40%]">
        <div
          className="h-[5em] w-[5em] flex justify-center items-center rounded-full "
          style={{ backgroundColor: color + "75" }}
        >
          {mainIcon}
        </div>
      </div>
      <div className="w-[60%] flex-col justify-start items-center md:pt-4">
        <p className="text-xs text-start text-gray-300">{heading}</p>
        <p className="text-xl text-start">{`$${price}k`}</p>
        <div className="flex justify-start items-center">
          <span
            style={{ color: color }}
            className="flex justify-start items-center"
          >
            {dataIcon}
            {data}%
          </span>
          <p className="text-sm">&nbsp;This month</p>
        </div>
      </div>
    </div>
  );
};

export default FPDataCard;
