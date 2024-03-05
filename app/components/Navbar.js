import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="relative w-full z-10">
      <div className="flex flex-row bg-gray-800 h-16 justify-center items-center">
        <div className="px-48">
          <div className="flex w-12 h-9 bg-slate-50 rounded-l-lg">
            <span className="pl-1 pt-1">
              <CiSearch size={28} className="cursor-pointer" />
            </span>
            <input
              type="text"
              className=" pl-1 pr-1 outline-none rounded-r-lg"
            />
          </div>
        </div>
        <div className="flex justify-between gap-6 pl-8 text-sm text-[#cccccce7]">
          <div className="pl-14">
            <p className="cursor-pointer">Categories</p>
          </div>
          <div className="pl-10">
            <p className="cursor-pointer">Website Builders</p>
          </div>
          <div className="pl-20">
            <p className="cursor-pointer">Today's deals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
