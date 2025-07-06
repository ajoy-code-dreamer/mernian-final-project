import React from "react";
import {
  FaAlgolia,
  FaGopuram,
  FaLayerGroup,
  FaNewspaper,
  FaSignOutAlt,
  FaUserFriends,
} from "react-icons/fa";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FriendProfileDetails from "../friendPageComponents/FriendProfileDetails";
import ProfileSummery from "../publicProfilePageComponents/ProfileSummery";
import { IoStorefront } from "react-icons/io5";


const LeftProfileBar = () => {
  return (
    <div className="w-[20%] bg-white !min-h-full">
      <div className="w-full h-[75px] bg-[#45437F]">
          {/* <img src="" alt="image" /> */}
        </div>
        <div className="w-30 h-30 rounded-full bg-[#615DFA] mx-auto mt-[-60px] border-4 border-solid border-white">
          {/* <img src="" alt="images" /> */}
        </div>
        <div className="mt-3">
          <FriendProfileDetails/>
        </div>
        <div className="mt-[42px] ">
          <ProfileSummery/>
        </div>
        <div className="mt-16 pr-2 pl-4">
          <ul className="font-['Poppins'] text-sm font-semibold flex flex-col gap-1">
            <li className="w-full pt-[15px] pb-[14px] text-[#AFB0C0] px-5 hover:bg-[#23D2E2] hover:text-white duration-300 active:text-white active:bg-[#23D2E2] rounded-[10px] cursor-pointer ">
              <Link className="flex items-center gap-7" to="/">
                <span className="text-xl">
                  <FaNewspaper />
                </span>
                Newsfeed
              </Link>
            </li>
            <li className="w-full pt-[15px] pb-[14px] text-[#AFB0C0] px-5 hover:bg-[#23D2E2] hover:text-white duration-300 active:text-white active:bg-[#23D2E2] rounded-[10px] cursor-pointer ">
              <Link className="flex items-center gap-7" to="/">
                <span className="text-xl">
                  <FaGopuram />
                </span>
                Profile
              </Link>
            </li>
            <li className="w-full pt-[15px] pb-[14px] text-[#AFB0C0] px-5 hover:bg-[#23D2E2] hover:text-white duration-300 active:text-white active:bg-[#23D2E2] rounded-[10px] cursor-pointer ">
              <Link className="flex items-center gap-7" to="/">
                <span className="text-xl">
                  <FaLayerGroup />
                </span>
                Groups
              </Link>
            </li>
            <li className="w-full pt-[15px] pb-[14px] text-[#AFB0C0] px-5 hover:bg-[#23D2E2] hover:text-white duration-300 active:text-white active:bg-[#23D2E2] rounded-[10px] cursor-pointer ">
              <Link className="flex items-center gap-7" to="/store">
                <span className="text-xl">
                  <IoStorefront />
                </span>
                Store
              </Link>
            </li>
            <li className="w-full pt-[15px] pb-[14px] text-[#AFB0C0] px-5 hover:bg-[#23D2E2] hover:text-white duration-300 active:text-white active:bg-[#23D2E2] rounded-[10px] cursor-pointer ">
              <Link className="flex items-center gap-7" to="/">
                <span className="text-xl">
                  <FaAlgolia />
                </span>
                Photos
              </Link>
            </li>
            <li className="w-full pt-[15px] pb-[14px] text-[#AFB0C0] px-5 hover:bg-[#23D2E2] hover:text-white duration-300 active:text-white active:bg-[#23D2E2] rounded-[10px] cursor-pointer ">
              <Link className="flex items-center gap-7" to="/friend">
                <span className="text-xl">
                  <FaUserFriends />
                </span>
                Friends
              </Link>
            </li>
            <li className="w-full pt-[15px] pb-[14px] text-[#AFB0C0] px-5 hover:bg-[#23D2E2] hover:text-white duration-300 active:text-white active:bg-[#23D2E2] rounded-[10px] cursor-pointer ">
              <Link className="flex items-center gap-7" to="/">
                <span className="text-xl">
                  <FaHandsAslInterpreting />
                </span>
                Friends Request
              </Link>
            </li>
            <li className="w-full pt-[15px] pb-[14px] text-[#AFB0C0] px-5 hover:bg-[#23D2E2] hover:text-white duration-300 active:text-white active:bg-[#23D2E2] rounded-[10px] cursor-pointer ">
              <Link className="flex items-center gap-7" to="/">
                <span className="text-xl">
                  <FaSignOutAlt />
                </span>
                Logout
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default LeftProfileBar;
