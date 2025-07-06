import React from "react";

const ProductPrice = ({ text = "$12",position }) => {
  return (
    <span
      className=" absolute right-[14px] top-[-15px] py-[5px] px-6 rounded-[24px] font-[Poppins] text-sm font-bold text-[#615DFA] bg-white shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.10)"
    >
      {text}
    </span>
  );
};

export default ProductPrice;
