import React from 'react'

const Button = ({text='Send Massage',bgColor='#615DFA',color='white',paddingX='52px',paddingY='15px',fontName='Poppins',fontSize='sm',fontWeight='600', rounded='7px',width,borderColor='transparent'}) => {
  return (
    <button 
    style={{width:width,backgroundColor:bgColor,padding:`${paddingY} ${paddingX}`, fontSize:fontSize,fontWeight:fontWeight,color:color}}
    className={`text-${color} font-[${fontName}] text-[${fontSize}] font-[${fontWeight}] rounded-[${rounded}] cursor-pointer border border-[${borderColor}]`}>{text}</button>
  )
}

export default Button