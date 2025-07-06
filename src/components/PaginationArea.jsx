import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PaginationArea = () => {
  return (
    <div className="py-4 px-5 bg-white rounded-[15px] w-[347px] ml-auto mb-[30px]">
      <ul className="flex items-center justify-around font-[Poppins] text-sm font-medium text-[#3E3F5E] cursor-pointer">
        <li className="text-[#AFB0C0] hover:text-[#23d2e2] duration-300">
          <FaChevronLeft />
        </li>
        <li className="text-[#23D2E2]">01</li>
        <li className=" hover:text-[#23d2e2] duration-300">02</li>
        <li className=" hover:text-[#23d2e2] duration-300">03</li>
        <li className=" hover:text-[#23d2e2] duration-300">04</li>
        <li className=" hover:text-[#23d2e2] duration-300">05</li>
        <li className=" hover:text-[#23d2e2] duration-300">06</li>
        <li className="text-[#AFB0C0] hover:text-[#23d2e2] duration-300">
          <FaChevronRight />
        </li>
      </ul>
    </div>
  );
};

export default PaginationArea;
