import React from "react";
import SearchIcon from "../icons/SearchIcon";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "../components/commonComponents/Container";
import ProfileBanner from "../components/publicProfilePageComponents/ProfileBanner";
import AddFriendCard from "../components/friendPageComponents/AddFriendCard";
import PaginationArea from "../components/PaginationArea";


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
      <PaginationArea/>
    </Container>
  );
};

export default FriendPage;
