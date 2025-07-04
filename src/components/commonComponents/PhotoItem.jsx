import React, { Children } from "react";

const PhotoItem = ({ children , bgColor='#615DFA' }) => {
  return (
    <div style={{backgroundColor:bgColor, }} className={`w-[105px] h-[100px] rounded-[15px] `}>
      {children}
    </div>
  );
};

export default PhotoItem;
