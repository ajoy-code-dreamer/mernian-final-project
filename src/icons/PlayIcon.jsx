import React from "react";
import { FaPlay } from "react-icons/fa";

const PlayIcon = ({circle='40px',textSize='10px', borderWidth='2px'}) => {
  return (
    <div style={{height:circle, width:circle,borderWidth:borderWidth,fontSize:textSize}} className={`text-white  rounded-full absolute top-1/2 left-1/2 flex justify-center items-center -translate-1/2 bg-[#181828] border-[${borderWidth}] border-[#41EFFF]`}>
          <FaPlay />
    </div>
  );
};

export default PlayIcon;
