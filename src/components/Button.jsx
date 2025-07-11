import React from 'react'

const Button = ({text='Send Massage',bgColor='#615DFA',color='white',paddingX='52px',paddingY='15px',fontName='Poppins',fontSize='sm',fontWeight='600', rounded='7px'}) => {
  return (
    <button 
    style={{backgroundColor:bgColor,padding:`${paddingY} ${paddingX}`, fontSize:fontSize,fontWeight:fontWeight}}
    className={`text-${color} font-[${fontName}] text-[${fontSize}] font-[${fontWeight}] rounded-[${rounded}] cursor-pointer`}>{text}</button>
  )
}

export default Button