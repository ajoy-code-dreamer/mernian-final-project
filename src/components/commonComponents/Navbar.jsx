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
      <div className="flex items-center justify-end w-full">
        <div className=" flex items-center text-white font-bold text-sm gap-12 mr-[73px]">
          <Link className="w-5 h-5" to="/">
            <FaBars />
          </Link>
          <Link to="/">Careers</Link>
          <Link to="/">Store</Link>
          <Link to="/">FAQ</Link>
          <Link to="/">...</Link>
        </div>
        <div className="relative w-[415px] mr-[80px]">
          <input
            className="focus:outline-none w-full bg-[#4E4AC8] focus:bg-white duration-300 text-[#6965E0] font-['Poppins'] text-sm font-normal pt-[15px] pb-[14px] px-4 rounded-[11px]"
            type="search"
            placeholder="Search here ...."
          />
          <span className="absolute top-1/2 right-[18px] translate-y-[-50%] text-[#6965E0]">
            <IoSearchSharp />
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[111px]">
            <div className="text-xs font-['Poppins'] font-normal text-white flex justify-between items-center pb-[3px]">
              <span>Next</span>
              <span>35 EXP</span>
            </div>
            <div className="w-full h-[3px] rounded-[7px] bg-[#4E4AC8] relative after:absolute after:content-[''] after:top-0 after:left-0 after:bg-[#41EFFF] after:w-[83px] after:h-full"></div>
          </div>
          <div className="w-[111px]">icon</div>
          <div className="w-[111px] justify-self-end">settings</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
