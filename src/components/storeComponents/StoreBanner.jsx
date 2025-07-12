import React from 'react'

const StoreBanner = ({marginT='36px'}) => {
  return (
    <div style={{marginTop:marginT}} className={`flex items-center gap-9 bg-[#615DFA] rounded-[14px]`}>
        <div><img src="images/store.png" alt="image" /></div>
        <div className='font-[Poppins] text-white'>
            <h2 className='font-bold text-4xl'>MERNIAN Marketplace</h2>
            <p className='font-normal text-[15px]'>The best place for the community to buy and sell!</p>
        </div>
    </div>
  )
}

export default StoreBanner