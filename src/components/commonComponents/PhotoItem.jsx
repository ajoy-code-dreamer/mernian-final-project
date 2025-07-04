import React, { Children } from "react";

const PhotoItem = ({ children , bgColor='#615DFA' }) => {
  return (
    <div className={`bg-[${bgColor}] w-[105px] h-[100px] rounded-[15px] `}>
      {children}
    </div>
  );
};

export default PhotoItem;
