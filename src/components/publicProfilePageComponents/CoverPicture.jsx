import React, { Children } from 'react'

const CoverPicture = ({Children, height='300px', marginT='32px',rounded='10px 10px 0 0'}) => {
  return (
    <div style={{height:height, marginTop:marginT,borderRadius:rounded}} className={`mt-[${marginT}] w-full h-[${height}] bg-[#45437F] rounded-t-[${rounded}]`}>
        {Children}
    </div>
  )
}

export default CoverPicture