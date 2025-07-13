import React from "react";
import Container from "../components/commonComponents/Container";
import StoreBanner from "../components/storeComponents/StoreBanner";
import PageHeading from "../components/commonComponents/PageHeading";
import CartItem from "../components/storeComponents/CartItem";
import RedeemPromo from "./RedeemPromo";
import Button from "../components/Button";
import { Link } from "react-router-dom";

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
      <div className="font-[Poppins] uppercase flex items-center text-[15px] font-medium text-black ml-7 mb-[10px]">
        <span className="pr-[362px]">ITEM</span>
        <span className="pr-[133px]">QUANTITY</span>
        <span>PRICE</span>
      </div>
      <div className="flex gap-[15px]">
        <div className="flex flex-col gap-[23px]">
          <CartItem />
          <CartItem />
          <CartItem />
          <RedeemPromo />
        </div>
        <div className="py-[29px] px-[26px] bg-white rounded-[15px] font-[Poppins]">
          <h5 className="text-black text-[17px] font-medium mb-[15px]">Order totals</h5>
          <h3 className="text-black text-[49px] font-medium mb-[49px] text-center"><span className="text-[#23D2E2]">$</span>39.00</h3>
          <ul className="font-[Poppins] font-medium mb-[53px] flex flex-col gap-[11px]">
            <li className="flex items-center justify-between text-xs">
              <p className="text-[#AFB0C0]">Cart(3)</p>
            <p className="text-black"><span className="text-[#23D2E2]">$</span>44.00</p>
            </li>
            <li className="flex items-center justify-between text-xs">
              <p className="text-[#AFB0C0]">Code</p>
            <p className="text-black">-<span className="text-[#23D2E2]">$</span>15.00</p>
            </li>
            <li className="flex items-center justify-between text-xs">
              <p className="text-[#AFB0C0]">Total</p>
            <p className="text-black"><span className="text-[#23D2E2]">$</span>39.00</p>
            </li>
          </ul>
          <div className="flex flex-col justify-center items-center gap-[10px] mx-1 w-full">
            <Button bgColor="#23D2E2" width='100%' text=""  rounded="15px"  >
              <Link to='/checkout' target="">Proccecd to checkout</Link>
              </Button>
            <Button color="#AFB0C0" bgColor="transparent" width='100%' text="Update cart" rounded="15px" borderColor='#D9D9D9' />
              
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
