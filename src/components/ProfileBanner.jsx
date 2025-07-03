import React from "react";
import Container from "./commonComponents/Container";
import ProfileSummery from "./commonComponents/ProfileSummery";
import ProfileName from "./commonComponents/ProfileName";
import SocialIcon from "./commonComponents/SocialIcon";
import Button from "./Button";

const ProfileBanner = () => {
  return (
    <div className="w-full bg-white pb-[18px] relative rounded-[10px]">
      <div
        className="mt-8 w-full h-[300px] bg-[#45437F] rounded-t-[10px]">
        {/* <img src="" alt="image" /> */}
      </div>
      <div className="mx-auto w-[152px] h-[152px] bg-[#615DFA] rounded-full border-[11px] border-white -mt-[76px]">
        {/* <img src="" alt="image" /> */}
      </div>
      <div className="flex justify-end gap-4 absolute top-[275px] right-[27px]">
        <Button text='Add Friend'/>
        <Button bg='#23D2E2' paddingX='38px' text='Send Message'/>
      </div>
      <div className="flex items-center justify-between pl-[65px] pr-[90px] pt-[18px]">
        <ProfileSummery/>
        <ProfileName/>
        <SocialIcon/>
      </div>

    </div>
  );
};

export default ProfileBanner;
