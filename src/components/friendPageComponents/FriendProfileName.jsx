import React from "react";

const FriendProfileName = ({ text='unknown', color = "black",textSize='base',fontWeight='bold' }) => {
  return <h2 className={`font-${fontWeight} text-${color} text-${textSize}px text-center`}>{text}</h2>;
};

export default FriendProfileName;
