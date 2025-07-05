import React from "react";

const VideoItem = ({children,bgColor='#615DFA',width='100%',height='100px',rounded='15px'}) => {
  return (
    <div
    style={{backgroundColor:bgColor,width:width,height:height,borderRadius:rounded}}
      className={` w-[${width}] h-[${height}] rounded-[${rounded}] cursor-pointer `}
    >
      {children}
    </div>
  );
};

export default VideoItem;
