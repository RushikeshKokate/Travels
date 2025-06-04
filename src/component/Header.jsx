import React from "react";
import logo from "../assets/images/Screenshot (513).png";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex justify-between">
      <img src={logo} alt="" className="h-8 mx-5 my-6" />
      <IoMenuSharp className="sm:hidden text-[19px] mx-5 my-6" />
    </div>
  );
};

export default Header;
