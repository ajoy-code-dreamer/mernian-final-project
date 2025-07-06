import React from "react";
import { FaPlay } from "react-icons/fa";

const PlayIcon = ({circle='40px',textSize='10px', borderWidht='2px'}) => {
  return (
    <div style={{height:circle, width:circle,borderWidth:borderWidht,fontSize:textSize}} className={`text-white text-[${textSize}] w-[${circle}] h-[${circle}] rounded-full flex items-center justify-center bg-[#181828] border-[${borderWidht}] border-[#41EFFF]`}>
          <FaPlay />
    </div>
  );
};

export default PlayIcon;
