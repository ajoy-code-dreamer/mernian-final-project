import React from "react";

const ProductCategory = ({ text }) => {
  return (
    <h5 className='font-[Poppins] text-black text-sm font-light relative before:absolute before:content-[""] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#23D2E2] before:top-1/2 before:left-[0] before:-translate-y-1/2 pl-4 pt-[9px] pb-[13px]'>
      {text}
    </h5>
  );
};

export default ProductCategory;
