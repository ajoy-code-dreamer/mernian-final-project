import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaSms, FaTools } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartIcon from "../../icons/CartIcon";
import BellIcon from "../../icons/BellIcon";

const Navbar = () => {

  // dropdown one operation
  let [isDropdownOneOpen, setIsDropdownOneOpen] = useState(false);

  let dropDownOneRef = useRef();

  useEffect(() => {
    let clickOutSide = (event) => {
      if (
        dropDownOneRef.current &&
        !dropDownOneRef.current.contains(event.target)
      ) {
        setIsDropdownOneOpen(false);
      }
    };
    document.addEventListener("click", clickOutSide);
  }, []);

  let handleDropDownOne = () => {
    setIsDropdownOneOpen(!isDropdownOneOpen);
  };

  // dropdown one operation

  // dropdown two operation
  let [isDropdownTwoOpen, setIsDropdownTwoOpen] = useState(false);

  let dropDownTwoRef = useRef();

  useEffect(() => {
    let clickOutSide = (event) => {
      if (
        dropDownTwoRef.current &&
        !dropDownTwoRef.current.contains(event.target)
      ) {
        setIsDropdownTwoOpen(false);
      }
    };
    document.addEventListener("click", clickOutSide);
  }, []);

  let handleDropDownTwo = () => {
    setIsDropdownTwoOpen(!isDropdownTwoOpen);
  };
  // dropdown two operation

  return (
    <nav className="flex items-center pt-4 pb-[14px] pl-6 pr-7 bg-[#615DFA] font-['Poppins']">
      <div className="w-24 h-10 mr-[174px]">
        <img src="images/logo.png" alt="logo" />
      </div>
      <ul className=" flex items-center text-white font-bold text-sm gap-12 mr-[73px]">
        <li ref={dropDownOneRef} className="relative">
          <button className="w-5 h-5 cursor-pointer" onClick={handleDropDownOne}>
            <FaBars />
          </button>
          {isDropdownOneOpen && (
            <div className="w-60 bg-white text-black rounded-lg shadow-lg p-4 z-10 absolute top-6 left-0 duration-300">
              <ul className="font-['Poppins'] text-sm font-medium">
                <li className="px-4 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>one</Link>
                </li>
                <li className="px-4 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>two</Link>
                </li>
                <li className="px-4 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>three</Link>
                </li>
              </ul>
            </div>
          )}

        </li>
        <li>
          <Link to="/">Careers</Link>
        </li>
        <li>
          <Link to="/">Store</Link>
        </li>
        <li>
          <Link to="/">FAQ</Link>
        </li>
        <li className="relative" ref={dropDownTwoRef}>
          <button className="cursor-pointer" onClick={handleDropDownTwo}>
            ...
          </button>
          {isDropdownTwoOpen && (
            <div className="w-60 bg-white text-black rounded-lg shadow-lg p-4 z-10 absolute top-6 left-0 duration-300">
              <ul className="font-['Poppins'] text-sm font-medium">
                <li className="px-4 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>one</Link>
                </li>
                <li className="px-4 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>two</Link>
                </li>
                <li className="px-4 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>three</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
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
      <div className="flex items-center gap-[63px] ml-auto">
        <div className="w-[111px]">
          <div className="text-xs font-['Poppins'] font-normal text-white flex justify-between items-center pb-[3px]">
            <span>Next</span>
            <span>35 EXP</span>
          </div>
          <div className="w-full h-[3px] rounded-[7px] bg-[#4E4AC8] relative after:absolute after:content-[''] after:top-0 after:left-0 after:bg-[#41EFFF] after:w-[83px] after:h-full"></div>
        </div>
        <div className="flex items-center gap-[30px] text-[#7A77FD] relative after:content-[''] after:absolute after:top-1/2 after:right-[-35px] after:translate-y-[-50%] after:bg-[#7A77FD] after:h-8 after:w-px before:content-[''] before:absolute before:top-1/2 before:left-[-32px] before:translate-y-[-50%] before:bg-[#7A77FD] before:h-8 before:w-px">
          <span className="cursor-pointer">
            <CartIcon />
          </span>
          <span className="cursor-pointer">
            <FaSms />
          </span>
          <span className="cursor-pointer">
            <BellIcon />
          </span>
        </div>
        <div className="text-[#7A77FD] cursor-pointer">
          <FaTools />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
