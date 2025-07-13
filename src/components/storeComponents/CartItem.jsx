import React from "react";
import { MdDelete } from "react-icons/md";
import PhotoItem from "../postCardComponents/PhotoItem";

const CartItem = () => {
  return (
    <div className="flex items-center bg-white px-7 py-5 rounded-[15px]">
      <div className="mr-[23px]">
        <PhotoItem width="94px" height="60px" rounded="15px">
          {/* <img src="" alt="image" /> */}
        </PhotoItem>
      </div>
      <div className="font-['Poppins'] mr-[123px]">
        <h3 className="text-[#45437F] text-sm font-medium">
          Twitch stream ui pack
        </h3>
        <h4 className="text-[13px] text-black font-medium mb-[1px]">
          Stream packs
        </h4>
        <p className="text-[#AFB0C0] text-xs font-normal">ABM shawon</p>
      </div>
      <div>
        <input
          placeholder="1"
          className="font-[Poppins] font-medium text-[#3E3F5E] text-[17px] pr-[11px] pl-[44px] py-[11px] w-[96px] h-[48px] rounded-[15px] border border-[#D9D9D9] mr-[111px]"
          type="number"
        />
      </div>
      <div className="mr-[138px]">
        <p className="font-[Poppins] text-[#3E3F5E] text-[17px] font-medium">
          <span className="text-[#23D2E2] mr-1">$</span>12.00
        </p>
      </div>
      <button className="bg-[#EA5050] w-[29px] h-[29px] rounded-full text-white text-[18px] flex items-center justify-center">
        <MdDelete />
      </button>
    </div>
  );
};

export default CartItem;
