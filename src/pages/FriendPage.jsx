import React from "react";
import Container from "../components/commonComponents/Container";
import SearchIcon from "../icons/SearchIcon";
import ProfileBanner from "../components/ProfileBanner";
import AddFriendCard from "../components/friendPageComponents/AddFriendCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FriendPage = () => {
  return (
    <Container>
      <div>
        <ProfileBanner />
      </div>
      <div className="font-[Poppins] mt-[62px] mb-[39px]">
        <h6 className=" text-[#AFB0C0] text-sm font-normal mb-1">
          BROWSE ABM SHAWON
        </h6>
        <h4 className="text-[#24234B] text-xl font-normal">Friends 82</h4>
      </div>
      <div className="w-full bg-white rounded-[10px] px-[25px] pt-[22px] pb-[15px] mb-[31px]">
        <div className="w-[717px] relative">
          <input
            type="text"
            placeholder="Search Friends"
            className="w-full border border-[#D9D9D9] rounded-[13px] pl-[15px] py-3 font-[Poppins] text-[15px] font-normal text-black placeholder:text-[#d9d9d9] focus:outline-[#23D2E2]"
          />
          <span className="absolute right-0 top-0 w-[84px] h-full bg-[#23D2E2] rounded-[10px] py-3 px-[30px] text-white text-base cursor-pointer">
            <SearchIcon />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-5">
        <AddFriendCard />
        <AddFriendCard />
        <AddFriendCard />
        <AddFriendCard />
        <AddFriendCard />
        <AddFriendCard />
        <AddFriendCard />
        <AddFriendCard />
      </div>
      <div className="py-4 px-5 bg-white rounded-[15px] w-[347px] ml-auto mb-[30px]">
        <ul className="flex items-center justify-around font-[Poppins] text-sm font-medium text-[#3E3F5E] cursor-pointer">
          <li className="text-[#AFB0C0] hover:text-[#23d2e2] duration-300">
            <FaChevronLeft />
          </li>
          <li className="text-[#23D2E2]">01</li>
          <li className=" hover:text-[#23d2e2] duration-300">02</li>
          <li className=" hover:text-[#23d2e2] duration-300">03</li>
          <li className=" hover:text-[#23d2e2] duration-300">04</li>
          <li className=" hover:text-[#23d2e2] duration-300">05</li>
          <li className=" hover:text-[#23d2e2] duration-300">06</li>
          <li className="text-[#AFB0C0] hover:text-[#23d2e2] duration-300">
            <FaChevronRight />

          </li>
        </ul>
      </div>
    </Container>
  );
};

export default FriendPage;
