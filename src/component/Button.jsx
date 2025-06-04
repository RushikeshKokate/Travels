import React from "react";
import { LiaMapSolid } from "react-icons/lia";
const Button = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 left-1/2 px-6 py-3 font-Helvetica gap-[7px] -translate-x-1/2 z-50 bg-[#252F40]
       hover:bg-blue-700 text-white rounded-[6px] 
        h-10 shadow-lg flex items-center justify-center transition duration-300 
        ease-in-out max-sm:flex sm:hidden"
    >
      <span>MAPS</span>
      <LiaMapSolid />
    </button>
  );
};

export default Button;
