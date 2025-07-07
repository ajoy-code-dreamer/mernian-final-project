import React from "react";

const CardButton = ({
  text = "default",
  width = "100%",
  paddingY = "12px",
  paddingX = "20px",
  roundedBL = "15px",
  rounded = "0 0 0 15px",
  bgColor = "#615DFA",
}) => {
  return (
    <button
      style={{
        width: width,
        borderRadius: rounded,
        padding: `${paddingY} ${paddingY}`,
        backgroundColor: bgColor,
      }}
      className={`w-[${width}] px-[${paddingX}] py-[${paddingY}] bg-[${bgColor}] font-[Poppins] text-white font-semibold text-[13px] cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default CardButton;
