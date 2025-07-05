import React from "react";

const AboutMe = () => {
  return (
    <div className='max-w-[283px] pl-[27px] pr-[26px] py-[29px] bg-white rounded-[15px] font-"Poppins"'>
      <div className="flex items-center justify-between mb-[29px] font-bold text-[#3E3F5E] text-sm">
        <h3>About Me</h3>
        <span className="cursor-pointer">...</span>
      </div>
      <p className="text-sm text-[#AFB0C0] font-normal">
        Hi! My name is A B M Shawon Islam but some people may know me as
        GameHuntress! I have a Twitch channel where I stream, play and review
        all the newest games.
      </p>
      <div className="font-bold text-[#AFB0C0] text-xs">
        <h5 className="mt-[18px]">
          Joined:<span className="ml-[25px] font-normal">22 November 2008</span>
        </h5>
        <h5 className="mt-[18px]">
          City:<span className="ml-[25px] font-normal">Dhaka</span>
        </h5>
        <h5 className="mt-[18px]">
          City:<span className="ml-[25px] font-normal"> 18 years</span>
        </h5>
      </div>
    </div>
  );
};

export default AboutMe;
