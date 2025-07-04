import React, { Children } from 'react'

const CoverPicture = ({Children, height='300px', marginT='32px',roundedT='10px'}) => {
  return (
    <div style={{height:height, marginTop:marginT}} className={`mt-[${marginT}] w-full h-[${height}] bg-[#45437F] rounded-t-[${roundedT}]`}>
        {Children}
    </div>
  )
}

export default CoverPicture