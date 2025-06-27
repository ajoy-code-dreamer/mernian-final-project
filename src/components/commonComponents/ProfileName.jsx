import React from "react";
import { Link } from "react-router-dom";

const ProfileName = () => {
  return (
    <div className="text-center font-['Poppins'] ">
      <h2 className="font-bold text-black text-base">AJOY SAHA</h2>
      <Link
        className="font-medium text-[#AFB0C0] text-xs"
        to="https://www.zipcyber.com"
        target="blank"
      >
        www.zipcyber.com
      </Link>
    </div>
  );
};

export default ProfileName;
