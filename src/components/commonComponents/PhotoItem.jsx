import React, { Children } from "react";

const PhotoItem = ({ Children }) => {
  return (
    <div className="w-[105px] h-[100px] bg-[#615DFA] rounded-[15px]">
      {Children}
    </div>
  );
};

export default PhotoItem;
