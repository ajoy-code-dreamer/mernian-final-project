import React from "react";
import PhotoItem from "../postCardComponents/PhotoItem";
import ProductPrice from "./ProductPrice";
import ProductName from "./ProductName";
import ProductCategory from "./ProductCategory";
import { Link } from "react-router-dom";
import CardButton from "../CardButton";

const ProductCard = ({ width = "281px" }) => {
  return (
    <div style={{ width: width }} className="bg-white rounded-[15px]">
      <PhotoItem
        width="100%"
        height="180px"
        bgColor="#615DFA"
        rounded="15px 15px 0 0"
      />
      <div className="relative">
        <ProductPrice />
      </div>
      <div className="pt-[26px] px-[30px] pb-[26px]">
        <ProductName text="Intel Pentium G6400 10th Gen Special Deal PC" />
        <ProductCategory text="Laptop" />
        <Link
          className="font-[Poppins] text-[13px] font-light underline text-[#615DFA]"
          to="/"
        >
          Full Screen View
        </Link>
      </div>
      <div className="flex">
        <CardButton text="Add To Cart" rounded="0 0 0 15px" />
        <CardButton text="Wishlist" rounded="0 0 15px 0" bgColor="#23D2E2" />
      </div>
    </div>
  );
};

export default ProductCard;
