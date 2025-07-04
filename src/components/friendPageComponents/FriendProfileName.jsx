import React from "react";

const FriendIdName = ({ text, color = "black",textSize='base',fontWeight='bold' }) => {
  return <h2 className={`font-${fontWeight} text-${color} text-${textSize}px`}>{text}</h2>;
};

export default FriendIdName;
