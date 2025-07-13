import React from "react";
import Container from "../components/commonComponents/Container";
import PageHeading from "../components/commonComponents/PageHeading";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import StoreBanner from "../components/storeComponents/StoreBanner";

const CheckoutPage = () => {
  return (
    <Container>
      <StoreBanner />
      <PageHeading
        topHeading="YOUR ORDER"
        bottomHeading="Checkout"
        marginT="23px"
        marginB="25px"
      />
      <div className="flex gap-[15px]">
        <div className="w-[784px] h-dvh shrink-0 p-8 bg-white rounded-[15px]">
          <form action="" className="">
            <h4 className="font-[Poppins] font-medium text-black text-lg mb-8 ">
              Billing Details
            </h4>
            <div className=" flex flex-col gap-[22px]">
              <div className="flex justify-between items-center gap-3">
                <input
                  className="w-1/2 font-[Poppins] font-medium text-sm placeholder:text-[#AFB0C0] px-[22px] pt-[14px] pb-[13px] border border-[#AFB0C0] rounded-[15px]"
                  type="text"
                  placeholder="First name"
                />
                <input
                  className="w-1/2 font-[Poppins] font-medium text-sm placeholder:text-[#AFB0C0] px-[22px] pt-[14px] pb-[13px] border border-[#AFB0C0] rounded-[15px]"
                  type="text"
                  placeholder="Last name"
                />
              </div>
              <div className="flex justify-between items-center gap-3">
                <input
                  className="w-1/2 font-[Poppins] font-medium text-sm placeholder:text-[#AFB0C0] px-[22px] pt-[14px] pb-[13px] border border-[#AFB0C0] rounded-[15px]"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="w-1/2 font-[Poppins] font-medium text-sm placeholder:text-[#AFB0C0] px-[22px] pt-[14px] pb-[13px] border border-[#AFB0C0] rounded-[15px]"
                  type="number"
                  placeholder="Phone number"
                />
              </div>
              <div>
                <input
                  className="w-full font-[Poppins] font-medium text-sm placeholder:text-[#AFB0C0] px-[22px] pt-[14px] pb-[13px] border border-[#AFB0C0] rounded-[15px]"
                  type="text"
                  placeholder="Full address"
                />
              </div>
              <div className="flex justify-between items-center gap-3">
                <input
                  className="w-1/2 font-[Poppins] font-medium text-sm placeholder:text-[#AFB0C0] px-[22px] pt-[14px] pb-[13px] border border-[#AFB0C0] rounded-[15px]"
                  type="text"
                  placeholder="New York"
                />
                <input
                  className="w-1/2 font-[Poppins] font-medium text-sm placeholder:text-[#AFB0C0] px-[22px] pt-[14px] pb-[13px] border border-[#AFB0C0] rounded-[15px]"
                  type="number"
                  placeholder="ZIP Code"
                />
              </div>
              <div>
                <textarea
                  className="h-[160px] w-full font-[Poppins] font-medium text-sm placeholder:text-[#AFB0C0] px-[22px] pt-[14px] pb-[13px] border border-[#AFB0C0] rounded-[15px] resize-none"
                  name=""
                  id=""
                  placeholder="Write any additional details here..."
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div className="pt-[27px] px-[26px] pb-8 bg-white rounded-[15px] font-[Poppins]">
          <h5 className="text-[#181828] text-[17px] font-medium mb-[15px]">
            Order Summery
          </h5>
          <div className="pb-[33px] border-b border-[#AFB0C0]">
            <ul className="font-[Poppins] font-medium flex flex-col gap-5">
              <li className="flex items-center justify-between text-xs">
                <p className="text-[#45437F]">Twitch stream ui pack</p>
                <p className="text-black">
                  <span className="text-[#23D2E2]">$</span>44.00
                </p>
              </li>
              <li className="flex items-center justify-between text-xs">
                <p className="text-[#45437F]">Twitch stream ui pack</p>
                <p className="text-black">
                  <span className="text-[#23D2E2]">$</span>44.00
                </p>
              </li>
              <li className="flex items-center justify-between text-xs">
                <p className="text-[#45437F]">Twitch stream ui pack</p>
                <p className="text-black">
                  <span className="text-[#23D2E2]">$</span>44.00
                </p>
              </li>
              <li className="flex items-center justify-between text-xs">
                <p className="text-[#45437F]">Twitch stream ui pack</p>
                <p className="text-black">
                  <span className="text-[#23D2E2]">$</span>44.00
                </p>
              </li>
            </ul>
          </div>
          <div className="my-[21px]">
            <ul className="font-[Poppins] font-medium flex flex-col gap-[11px]">
              <li className="flex items-center justify-between text-xs">
                <p className="text-[#AFB0C0]">Cart(3)</p>
                <p className="text-black">
                  <span className="text-[#23D2E2]">$</span>44.00
                </p>
              </li>
              <li className="flex items-center justify-between text-xs">
                <p className="text-[#AFB0C0]">Code</p>
                <p className="text-black">
                  -<span className="text-[#23D2E2]">$</span>15.00
                </p>
              </li>
              <li className="flex items-center justify-between text-xs">
                <p className="text-[#AFB0C0]">Total</p>
                <p className="text-black">
                  <span className="text-[#23D2E2]">$</span>39.00
                </p>
              </li>
            </ul>
          </div>
          <h3 className="text-black text-[49px] font-medium mb-[21px] text-center py-[11px] border-t border-b border-[#AFB0C0]">
            <span className="text-[#23D2E2]">$</span>39.00
          </h3>
          <form action="" method="">
            <h4 className="text-[#181828] text-[17px] font-medium font-[Poppins] mb-[19px]">
              Payment Method
            </h4>
            <div className="flex items-center mb-[10px]">
              <input className="w-[14px] h-[14px] rounded-full border border-[#AFB0C0] focus:border-transparent mr-[6px] dark:bg-transparent focus:bg-[#23D2E2] appearance-none" id="paypal" type="radio" name="payMethod" />
              <label className="font-[Poppins] text-xs font-semibold text-[#181828]" htmlFor="paypal">Paypal</label>
            </div>
              <p className="font-[Poppins] font-medium text-[#AFB0C0] text-[11px] mb-[11px]">
                Pay with your paypal balance or connected bank account it’s
                quick and really secure.
              </p>
            <div className="flex items-center mb-[33px]">
              <input className="w-[14px] h-[14px] rounded-full border  border-[#AFB0C0] focus:border-transparent mr-[6px] dark:bg-transparent focus:bg-[#23D2E2] appearance-none" id="card" type="radio" name="payMethod" />
              <label className="font-[Poppins] text-xs font-semibold text-[#181828]" htmlFor="card">Credit or Debit card</label>
            </div>
              <div className="flex justify-center">
                <Button bgColor="#23D2E2" rounded="15px" text="" paddingX="62px">
                <Link to="/" target="">
                  Complete order !
                </Link>
              </Button>
              </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutPage;
