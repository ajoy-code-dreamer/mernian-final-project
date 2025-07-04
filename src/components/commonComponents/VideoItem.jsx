import React from "react";

const VideoItem = ({children,bgColor='#615DFA'}) => {
  return (
    <div
    style={{backgroundColor:bgColor}}
      className={` w-full h-[100px] rounded-[15px] cursor-pointer `}
    >
      {children}
    </div>
  );
};

export default VideoItem;
