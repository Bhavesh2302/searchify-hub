import React, { useState } from "react";
import Filters from "./Filters";
import { MdOutlineCancel } from "react-icons/md";

function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-700 text-white rounded-[10px] px-10 py-3 text-xl focus:outline-none"
        onClick={toggleDrawer}
      >
        Filter
      </button>
      <div
        className={`fixed inset-0 bg-gray-200 backdrop-blur-sm flex justify-end transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-60 bg-white p-4 shadow-lg">
          <div className="flex justify-end items-center w-full">
            <MdOutlineCancel
              onClick={toggleDrawer}
              fontSize={26}
              className="cursor-pointer text-blue-700"
            />
          </div>
          <Filters />
        </div>
      </div>
    </div>
  );
}

export default Drawer;
