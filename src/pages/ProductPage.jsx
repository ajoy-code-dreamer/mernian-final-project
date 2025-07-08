import React from "react";
import Container from "../components/commonComponents/Container";
import ProductCard from "../components/storeComponents/ProductCard";
import CardButton from "../components/CardButton";
import Button from "../components/Button";
import PaginationArea from "../components/PaginationArea";
import { FaChevronDown, FaStar } from "react-icons/fa";
import SearchIcon from "../icons/SearchIcon";
import ArrowDown from "../icons/ArrowDown";
import StoreBanner from "../components/storeComponents/StoreBanner";

const ProductPage = () => {
  return (
    
    <Container>
      <div className='mt-9'>
        <StoreBanner/>
      </div>
      <div className="pt-[23px] pb-[24px] font-[Poppins]">
        <h5 className="text-[#AFB0C0] font-normal text-sm">BROWSE PRODUCTS</h5>
        <h3 className="text-[#24234B] font-bold text-2xl">Digital Items</h3>
      </div>
      <div className="py-6 px-5 rounded-[7px] bg-white mb-5 font-[Poppins] flex items-center">
        <input
          className="font-medium text-[17px] px-[15px] py-[10px] w-[300px] border border-[#D9D9D9] focus:outline-[#D9D9D9] rounded-[15px] mr-3"
          type="text"
          placeholder="Search items"
        />
        <button
          type="search"
          className="px-5 py-3 bg-[#23D2E2] rounded-[15px] mr-[19px] text-black"
        >
          <SearchIcon />
        </button>

        
        <div className="relative">
          <select
            className="relative z-10 appearance-none px-5 py-[10px] w-[300px] border border-[#D9D9D9] rounded-[15px] text-black text-[17px] font-medium focus:outline-none mr-[19px]"
            name=""
            id=""
          >
            <option className=" text-black text-[17px] font-medium" value="">
              Date Published 
            </option>
            <option className=" text-black text-[17px] font-medium" value="">
              01-01-2025
            </option>
            <option className=" text-black text-[17px] font-medium" value="">
              05-05-2025
            </option>
            <option className=" text-black text-[17px] font-medium" value="">
              11-12-2025
            </option>
            <option className=" text-black text-[17px] font-medium" value="">
              12-05-2025
            </option>
          </select>
          <div className="absolute top-1/2 right-[39px] -translate-y-1/2 ">
            <ArrowDown/>
          </div>
        </div>
        <div className="relative">
          <select
            className="relative z-10 appearance-none px-5 py-[10px] w-[300px] border border-[#D9D9D9] rounded-[15px] text-black text-[17px] font-medium focus:outline-none mr-[19px]"
            name=""
            id=""
          >
            <option className=" text-black text-[17px] font-medium" value="">
              Descending
            </option>
            <option className=" text-black text-[17px] font-medium" value="">
              01-01-2025
            </option>
            <option className=" text-black text-[17px] font-medium" value="">
              05-05-2025
            </option>
            <option className=" text-black text-[17px] font-medium" value="">
              11-12-2025
            </option>
            <option className=" text-black text-[17px] font-medium" value="">
              12-05-2025
            </option>
          </select>
          <div className="absolute top-1/2 right-[39px] -translate-y-1/2 ">
            <ArrowDown/>
          </div>
        </div>
        <Button
          text="Apply Filters"
          paddingX="16px"
          paddingY="11px"
          fontWeight="500"
        />
      </div>
      <div className="flex gap-[14px] mb-[30px]">
        <div className="h-max pb-[26px] min-w-[284px] pt-[30px] px-[15px] rounded-[15px] bg-white font-[Poppins]">
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
          <h4 className="text-black text-sm font-bold mt-[39px] mb-[22px]">
            Reviews
          </h4>
          <div className="pr-[22px] font-[Poppins] text-sm flex flex-col gap-[10px]">
            <div className="flex justify-between items-center">
              <span className="text-[#45437F] font-bold">All reviews</span>
              <span className="text-[#23D2E2] font-normal">1207</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="flex gap-[3px] text-[#FCE730]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="text-[#3E3F5E] pl-[11px] font-bold">4+</span>
              </div>
              <span className="text-[#23D2E2] font-normal">1207</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="flex gap-[3px] text-[#FCE730]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="text-[#3E3F5E] pl-[11px] font-bold">4+</span>
              </div>
              <span className="text-[#23D2E2] font-normal">1207</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="flex gap-[3px] text-[#FCE730]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="text-[#3E3F5E] pl-[11px] font-bold">4+</span>
              </div>
              <span className="text-[#23D2E2] font-normal">1207</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="flex gap-[3px] text-[#FCE730]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="text-[#3E3F5E] pl-[11px] font-bold">4+</span>
              </div>
              <span className="text-[#23D2E2] font-normal">1207</span>
            </div>
          </div>
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
