import React, { Children } from "react";

const PhotoItem = ({ children , bg='#615DFA' }) => {
  return (
    <div style={{background:bg}} className={`w-[105px] h-[100px] rounded-[15px] `}>
      {children}
    </div>
  );
};

export default PhotoItem;
