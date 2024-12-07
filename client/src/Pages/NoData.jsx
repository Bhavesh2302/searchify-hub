import React from "react";
import { FaRegClock } from "react-icons/fa";

const NoData = () => {
  return (
    <div className="w-full h-[500px] flex flex-col items-center justify-center">
      <div>
        <FaRegClock fontSize="50px" />
      </div>
      <div className="font-semibold text-lg">No Result Found!</div>
    </div>
  );
};

export default NoData;
