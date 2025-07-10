import React from "react";

const AboutDetails = ({ children }) => {
  return (
    <div className='w-full pl-[30px] pr-[41px] pt-[14px] pb-[26px] bg-white rounded-[15px] font-"Poppins"'>
      <div className="flex items-center justify-between mb-[21px] font-bold text-[#3E3F5E] text-sm">
        <h3>Interests</h3>
        <span className="cursor-pointer">...</span>
      </div>
      {children}
    </div>
  );
};

export default AboutDetails;
