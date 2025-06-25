import React from "react";
import { FaBars } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center pt-4 pb-[14px] pl-6 pr-7 bg-[#615DFA] font-['Poppins']">
      <div className="w-24 h-10 mr-[174px]">
        <img src="images/logo.png" alt="logo" />
      </div>
      <div className=" flex items-center pr-[73px] text-white font-bold text-sm gap-12">
        <div className="w-5 h-5">
          <FaBars />
        </div>
        <Link to="/">Careers</Link>
        <Link to="/">Store</Link>
        <Link to="/">FAQ</Link>
        <Link to="/">...</Link>
      </div>
      <div className="relative w-[415px] mr-20">
        <input
          className="focus:outline-none w-full bg-[#4E4AC8] focus:bg-white duration-300 text-[#6965E0] font-['Poppins'] text-sm font-normal pt-[15px] pb-[14px] px-4 rounded-[11px]"
          type="search"
          placeholder="Search here ...."
        />
        <span className="absolute top-1/2 right-[18px] translate-y-[-50%] text-[#6965E0]">
          <IoSearchSharp />
        </span>
      </div>
      <div className="">icons</div>
    </nav>
  );
};

export default Navbar;
