import React from "react";

const VideoItem = ({children,bgColor='#615DFA'}) => {
  return (
    <div
      className={`bg-[${bgColor}] w-full h-[100px] rounded-[15px] cursor-pointer `}
    >
      {children}
    </div>
  );
};

export default VideoItem;
