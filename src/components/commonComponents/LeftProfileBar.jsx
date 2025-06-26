import React from "react";
import { FaLayerGroup, FaNewspaper, FaUserFriends } from "react-icons/fa";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import { Link } from "react-router-dom";
const LeftProfileBar = () => {
  return (
    <div className="w-1/5 bg-white h-screen">
      <div className="">
        <div className="w-full h-[75px] bg-[#45437F]">
          {/* <img src="" alt="image" /> */}
        </div>
        <div className="w-30 h-30 rounded-full bg-[#615DFA] mx-auto mt-[-60px] border-4 border-solid border-white">
          {/* <img src="" alt="images" /> */}
        </div>
        <div className="text-center mt-3 font-['Poppins'] ">
          <h2 className="font-bold text-black text-base">AJOY SAHA</h2>
          <Link
            className="font-medium text-[#AFB0C0] text-xs"
            to="https://www.zipcyber.com"
            target="blank"
          >
            www.zipcyber.com
          </Link>
        </div>
        <div className="flex justify-center items-center gap-12 text-center text-['Poppins'] mt-[42px] relative after:content-[''] after:absolute after:top-1/2 after:right-[151px] after:translate-y-[-50%] after:bg-[#AFB0C0] after:h-[25px] after:w-px before:content-[''] before:absolute before:top-1/2 before:left-[145px] before:translate-y-[-50%] before:bg-[#AFB0C0] before:h-[25px] before:w-px">
          <div>
            <h3 className="font-bold text-sm text-black">930</h3>
            <p className="font-medium text-xs text-[#AFB0C0]">Friends</p>
          </div>
          <div>
            <h3 className="font-bold text-sm text-black">87</h3>
            <p className="font-medium text-xs text-[#AFB0C0]">Posts</p>
          </div>
          <div>
            <h3 className="font-bold text-sm text-black">1k</h3>
            <p className="font-medium text-xs text-[#AFB0C0]">Followers</p>
          </div>
        </div>
        <div className="mt-16 pr-2 pl-4">
          <ul className="font-['Poppins'] text-sm font-semibold flex flex-col gap-1">
            <li className="w-full pt-[15px] pb-[14px] text-[#AFB0C0] px-5 hover:bg-[#23D2E2] hover:text-white duration-300 rounded-[10px] cursor-pointer ">
              <Link className="flex items-center gap-7" to="/">
                <span className="text-xl">
                  <FaNewspaper />
                </span>
                Newsfeed
              </Link>
            </li>
            <li className="w-full pt-[15px] pb-[14px] text-[#AFB0C0] px-5 hover:bg-[#23D2E2] hover:text-white duration-300 rounded-[10px] cursor-pointer ">
              <Link className="flex items-center gap-7" to="/">
                <span className="text-xl">
                  <FaLayerGroup />
                </span>
                Videos
              </Link>
            </li>
            <li className="w-full pt-[15px] pb-[14px] text-[#AFB0C0] px-5 hover:bg-[#23D2E2] hover:text-white duration-300 rounded-[10px] cursor-pointer ">
              <Link className="flex items-center gap-7" to="/">
                <span className="text-xl">
                  <FaLayerGroup />
                </span>
                Groups
              </Link>
            </li>
            <li className="w-full pt-[15px] pb-[14px] text-[#AFB0C0] px-5 hover:bg-[#23D2E2] hover:text-white duration-300 rounded-[10px] cursor-pointer ">
              <Link className="flex items-center gap-7" to="/">
                <span className="text-xl">
                  <FaLayerGroup />
                </span>
                Photos
              </Link>
            </li>
            <li className="w-full pt-[15px] pb-[14px] text-[#AFB0C0] px-5 hover:bg-[#23D2E2] hover:text-white duration-300 rounded-[10px] cursor-pointer ">
              <Link className="flex items-center gap-7" to="/">
                <span className="text-xl">
                  <FaUserFriends />
                </span>
                Friends
              </Link>
            </li>
            <li className="w-full pt-[15px] pb-[14px] text-[#AFB0C0] px-5 hover:bg-[#23D2E2] hover:text-white duration-300 rounded-[10px] cursor-pointer ">
              <Link className="flex items-center gap-7" to="/">
                <span className="text-xl">
                  <FaHandsAslInterpreting />
                </span>
                Friends Request
              </Link>
            </li>
            <li className="w-full pt-[15px] pb-[14px] text-[#AFB0C0] px-5 hover:bg-[#23D2E2] hover:text-white duration-300 rounded-[10px] cursor-pointer ">
              <Link className="flex items-center gap-7" to="/">
                <span className="text-xl">
                  <FaLayerGroup />
                </span>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftProfileBar;
