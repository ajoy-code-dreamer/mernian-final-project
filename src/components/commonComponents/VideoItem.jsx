import React from "react";

const VideoItem = ({children,bg='#615DFA'}) => {
  return (
    <div
    style={{background:bg}} 
      className={`w-full h-[100px] rounded-[15px] cursor-pointer `}
    >
      {children}
    </div>
  );
};

export default VideoItem;
