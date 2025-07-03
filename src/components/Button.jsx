import React from 'react'

const Button = ({text,bg='#615DFA',color='white',paddingX='52px',paddingY='15px',fontName='Poppins',fontSize='xs',fontWeight='semibold', rounded='7px'}) => {
  return (
    <button className={`bg-[${bg}] text-${color} font-[${fontName}] text-[${fontSize}] font-${fontWeight} px-[${paddingX}] py-[${paddingY}] rounded-[${rounded}] cursor-pointer`}>{text}</button>
  )
}

export default Button