import React, { Children } from "react";

const PhotoItem = ({ children,background='#615DFA' }) => {
  return (
    <div style={{backgroundColor:background}} className="w-[105px] h-[100px] rounded-[15px]">
      {children}
    </div>
  );
};

export default PhotoItem;
