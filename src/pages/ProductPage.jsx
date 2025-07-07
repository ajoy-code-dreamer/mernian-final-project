import React from "react";
import Container from "../components/commonComponents/Container";
import ProductCard from "../components/storeComponents/ProductCard";
import CardButton from "../components/CardButton";
import PaginationArea from "../components/PaginationArea";

const ProductPage = () => {
  return (
    <Container>
      <div className="pt-[23px] pb-[24px] font-[Poppins]">
        <h5 className="text-[#AFB0C0] font-normal text-sm">BROWSE PRODUTS</h5>
        <h3 className="text-[#24234B] font-bold text-2xl">Digital Items</h3>
      </div>
      <div className="py-6 px-5 rounded-[7px] bg-white mb-5"></div>
      <div className="flex gap-[14px] mb-[30px]">
        <div className=" min-w-[284px] pt-[30px] px-[15px] rounded-[15px] bg-white font-[Poppins]">
          <h4 className="text-black text-sm font-bold mb-[13px]">Categories</h4>
          <ul className="flex flex-col gap-[10px] font-[Poppins] font-medium text-[#AFB0C0]">
            <li className="flex justify-between">
              All Categories <span className="text-[#23D2E2]">1207</span>
            </li>
            <li className="flex justify-between">
              Psd Templates <span className="text-[#23D2E2]">134</span>
            </li>
            <li className="flex justify-between">
              HTML Templates <span className="text-[#23D2E2]">134</span>
            </li>
            <li className="flex justify-between">
              WP Templates <span className="text-[#23D2E2]">134</span>
            </li>
            <li className="flex justify-between">
              Illustration <span className="text-[#23D2E2]">134</span>
            </li>
            <li className="flex justify-between">
              Logos and badges <span className="text-[#23D2E2]">134</span>
            </li>
          </ul>
          <h4 className="text-black text-sm font-bold mt-[29px] mb-[25px]">
            Price Range
          </h4>
          <div className="flex items-center gap-3 mb-[25px]">
            <input
              className="pl-5 pr-2 py-[14px] border border-[#D9D9D9] rounded-[15px] font-medium font-[Poppins] placeholder:text-[#D9D9D9] text-black text-sm w-20"
              type="number"
              placeholder="From"
            />
            <input
              className="pl-5 pr-2 py-[14px] border border-[#D9D9D9] rounded-[15px] font-medium font-[Poppins] placeholder:text-[#D9D9D9] text-black text-sm w-20"
              type="number"
              placeholder="To"
            />
          </div>
          <CardButton
            text="Apply Price Filter"
            rounded="11px"
            bgColor="#23D2E2"
          />
        </div>
        <div className="flex justify-between gap-5 flex-wrap">
          <ProductCard width="272px" />
          <ProductCard width="272px" />
          <ProductCard width="272px" />
          <ProductCard width="272px" />
          <ProductCard width="272px" />
          <ProductCard width="272px" />
          <ProductCard width="272px" />
          <ProductCard width="272px" />
          <ProductCard width="272px" />
        </div>
      </div>
      <PaginationArea />
    </Container>
  );
};

export default ProductPage;
