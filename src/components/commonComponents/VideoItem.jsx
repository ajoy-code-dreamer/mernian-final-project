import React from "react";

const VideoItem = ({children,background="#615DFA"}) => {
  return (
    <div
      style={{ backgroundColor:background }}
      className="w-full h-[100px] rounded-[15px] cursor-pointer"
    >
      {children}
    </div>
  );
};

export default VideoItem;
