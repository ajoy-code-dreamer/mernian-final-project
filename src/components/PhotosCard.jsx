import React from "react";
import PhotoItem from "./commonComponents/PhotoItem";

const PhotosCard = () => {
  return (
    <div className="max-w-[283px] px-[29px] pb-[29px] pt-[19px] bg-white rounded-[15px] ">
      <div className="flex items-center justify-between mb-[17px] font-bold text-black text-xs">
        <h3>Photos <span className="text-[#23D2E2]">37</span></h3>
        <span className="cursor-pointer">...</span>
      </div>
      <div className="flex gap-[15px] flex-wrap">
        <PhotoItem />
        <PhotoItem bg='#24234B' />
        <PhotoItem />
        <PhotoItem bg='#24234B' />
        <PhotoItem />
        <PhotoItem bg='#41EFFF'>
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">32+</span>
          </div>
        </PhotoItem>
      </div>
    </div>
  );
};

export default PhotosCard;
