import React from "react";
import Button from "../components/Button";

const RedeemPromo = () => {
  return (
    <div className="flex items-center bg-white px-7 py-5 rounded-[15px]">
      <p className="font-[Poppins] text-[#AFB0C0] font-medium text-[17px] mr-[49px] w-[435px]">
        If you have promotional or a discount code, please enter it right here
        to redeem it.
      </p>
      <input className="mr-[13px] w-[217px] font-[Poppins] font-medium text-[#3E3F5E] text-[13px] px-[13px] py-[14px] h-[48px] rounded-[15px] border border-[#D9D9D9] " type="text" placeholder="Promo code" />
      <Button
        text="Redeem code"
        paddingX="15px"
        paddingY="15px"
        fontSize="12px"
        fontWeight="500"
      />
    </div>
  );
};

export default RedeemPromo;
