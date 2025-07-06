import React, { Children } from "react";

const PhotoItem = ({ children , bgColor='#615DFA',width='105px',height='100px',rounded='15px'}) => {
  return (
    <div style={{backgroundColor:bgColor,width:width,height:height,borderRadius:rounded }} className={`w-[${width}] h-[${height}] `}>
      {children}
    </div>
  );
};

export default PhotoItem;
