import React from 'react'

const PageHeading = ({topHeading='BROWSE ABM SHAWON',bottomHeading='Friends 82',marginT='62px',marginB='39px'}) => {
  return (
    <div style={{marginBottom:marginB, marginTop:marginT}} className={`font-[Poppins] mt-[${marginT}] mb-[${marginB}]`}>
        <h6 className=" text-[#AFB0C0] text-sm font-normal mb-1">
          {topHeading}
        </h6>
        <h4 className="text-[#24234B] text-2xl font-medium">{bottomHeading}</h4>        
    </div>
  )
}

export default PageHeading