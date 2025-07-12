import React from "react";
import Container from "../components/commonComponents/Container";
import StoreBanner from "../components/storeComponents/StoreBanner";
import PageHeading from "../components/commonComponents/PageHeading";
import CartItem from "../components/storeComponents/CartItem";
import RedeemPromo from "./RedeemPromo";

const CartPage = () => {
  return (
    <Container>
      <StoreBanner />
      <PageHeading
        topHeading="BROWSE YOUR"
        bottomHeading="Shopping cart 3"
        marginT="23px"
        marginB="13px"
      />
      <div className="flex">
        <div>
          <div className="font-[Poppins] uppercase flex items-center text-[15px] font-medium text-black ml-7 mb-[10px]">
            <span className="pr-[362px]">ITEM</span>
            <span className="pr-[133px]">QUANTITY</span>
            <span>PRICE</span>
          </div>
          <div className="flex flex-col gap-[23px]">
            <CartItem />
            <CartItem />
            <CartItem />
            <RedeemPromo />
          </div>
        </div>
        <div>price</div>
      </div>
    </Container>
  );
};

export default CartPage;
