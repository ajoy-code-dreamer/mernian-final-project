import React from "react";
import PhotoItem from "./commonComponents/PhotoItem";

const PhotosCard = () => {
  return (
    <div className="max-w-[283px] px-[29px] pb-[29px] pt-[19px] bg-white rounded-[15px] ">
      <div className="flex items-center justify-between mb-[17px] font-bold text-black text-xs">
        <h3>Photos <span className="text-[#23D2E2]">37</span></h3>
        <span>...</span>
      </div>
      <div className="flex gap-[15px] flex-wrap">
        <PhotoItem />
        <PhotoItem />
        <PhotoItem />
        <PhotoItem />
        <PhotoItem />
        <PhotoItem>
            <span className="text-white">32+</span>
        </PhotoItem>
      </div>
    </div>
  );
};

export default PhotosCard;
