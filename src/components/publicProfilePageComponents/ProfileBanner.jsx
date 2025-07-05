import React from "react";
import CoverPicture from "./CoverPicture";
import ProfilePicture from "./ProfilePicture";
import Button from "../Button";
import ProfileSummery from "./ProfileSummery";
import FriendProfileDetails from "../friendPageComponents/FriendProfileDetails";
import SocialIcon from "./SocialIcon";


const ProfileBanner = () => {
  return (
    <div className="w-full bg-white pb-[18px] relative rounded-[10px]">
      <CoverPicture
        >
        {/* <img src="" alt="image" /> */}
      </CoverPicture>
      <ProfilePicture >
        {/* <img src="" alt="image" /> */}
      </ProfilePicture>
      <div className="flex justify-end gap-4 absolute top-[275px] right-[27px]">
        <Button text='Add Friend'/>
        <Button bgColor='#23D2E2' paddingX='38px' text='Send Message'/>
      </div>
      <div className="flex items-center justify-between pl-[65px] pr-[90px] pt-[18px]">
        <ProfileSummery/>
        <FriendProfileDetails/>
        <SocialIcon/>
      </div>

    </div>
  );
};

export default ProfileBanner;
