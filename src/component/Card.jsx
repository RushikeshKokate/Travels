// Card.js
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { PiEqualsBold } from "react-icons/pi";
import { FaLocationPin } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Card = ({ image, name, rating, description }) => {
  return (
    <>
      <div className="flex rounded-lg p-3 items-center max-sm:hidden group hover:shadow-lg transition">
        <PiEqualsBold className="text-[30px]" />
        <img
          className="w-[112px] h-[112px] rounded-[12px] object-cover my-4 mx-3 max-sm:h-16 max-sm:w-16"
          src={image}
          alt={name}
        />
        <div className="flex flex-col p-3">
          <div className="flex justify-between w-full px-3">
            <p className="font-Helvetica font-bold text-[16px]">{name}</p>
            <div className="flex w-[106px] p-[6px] justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaLocationDot />
              <GrAttachment />
              <RiDeleteBinLine className="text-red-700" />
            </div>
          </div>
          <p className="font-Helvetica text-[#6C757D] p-3 text-sm">{rating}</p>
          <div className="flex bg-[#F8F9FA] rounded-xl gap-[8px]">
            <p className="font-Helvetica font-[400] text-sm ml-[12px] my-[6px] text-[#343A40]">
              {description}
            </p>
            <MdOutlineEdit className="text-[30px] mt-[6px] mr-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>

      <div className="rounded-lg mr-3 mt-6   items-center w-full max-sm:flex sm:hidden">
        <div className="flex  ">
          <PiEqualsBold className="  text-[24px]" />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex w-full">
            <img
              className="w-[112px] h-[112px] rounded-[12px] object-cover m-3 max-sm:h-16 max-sm:w-16"
              src={image}
              alt={name}
            />
            <div className="w-full">
              <div className="flex justify-between w-full h-[30px] items-center mt-3 ">
                <p className="font-Helvetica font-bold text-[16px]">{name}</p>
                <div className="flex w-[106px] max-sm:w-[72px] p-[6px] justify-between">
                  <FaLocationDot />
                  <HiOutlineDotsVertical />
                </div>
              </div>
              <p className="font-Helvetica text-[#6C757D] mt-[6px] text-sm ">
                {rating}
              </p>
            </div>
          </div>
          <div className="flex bg-[#F8F9FA] rounded-xl ml-3 mb-3 gap-[8px] ">
            <p className="font-Helvetica font-[400] text-sm ml-[12px] my-[6px] text-[#343A40] ">
              {description}
            </p>
            <MdOutlineEdit className="text-[30px] mt-[6px] mr-[12px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
