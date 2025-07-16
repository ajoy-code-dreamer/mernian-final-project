import React from "react";
import { FaPlay } from 'react-icons/fa'
import PlayIcon from "../../icons/PlayIcon";

const VideoItem = ({
  children,
  bgColor = "#615DFA",
  width = "100%",
  height = "100px",
  rounded = "15px",
  playCircleSize='40px'
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: width,
        height: height,
        borderRadius: rounded,
      }}
      className={` w-[${width}] h-[${height}] rounded-[${rounded}] cursor-pointer relative`}
    >
      {children}
        <PlayIcon/>
    </div>
  );
};

export default VideoItem;
