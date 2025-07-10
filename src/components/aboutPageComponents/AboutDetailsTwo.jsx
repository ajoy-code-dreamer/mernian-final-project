import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const AboutDetailsTwo = () => {
  let [isCardEditOpen, setIsCardEditOpen] = useState(false)
  let cardEditRef = useRef()

useEffect(()=>{
  
  let clickOutSide = (e)=>{
    if(cardEditRef.current && !cardEditRef.current.contains(e.target)){
      setIsCardEditOpen(false)
    }
  }
  
  
  document.addEventListener("click", clickOutSide)
  
},[]);

  let handleCardEdit =()=>{
    setIsCardEditOpen(!isCardEditOpen)
  }

  return (
    <div className='w-full pl-[30px] pr-[41px] pt-[14px] pb-[26px] bg-white rounded-[15px] font-"Poppins"'>
      <div className="flex items-center justify-between mb-[21px] font-bold text-[#3E3F5E] text-sm">
        <h3>Jobs & Education</h3>
        <span ref={cardEditRef} onClick={handleCardEdit} className="relative cursor-pointer">...
          {isCardEditOpen && (
            <div className="w-[140px] bg-white text-black rounded-lg shadow-lg p-4 z-10 absolute top-12 right-0 duration-300">
              <ul className="font-['Poppins'] text-xs font-normal">
                <li className="px-2 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>Edit Post</Link>
                </li>
                <li className="px-2 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>Delete Post</Link>
                </li>
                <li className="px-2 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>Report Post</Link>
                </li>
                <li className="px-2 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>Report Author</Link>
                </li>
              </ul>
            </div>
          )}
        </span>
      </div>
      <>
        <div className='font-["Poppins"] text-xs mb-[15px]'>
            <h4 className='text-black font-medium mb-[6px]'>Lead custom designer</h4>
            <p className='text-[#181828]] font-normal'>Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.</p>
        </div>
        <div className='font-["Poppins"] text-xs mb-[15px]'>
            <h4 className='text-black font-medium mb-[6px]'>Mernstack developer</h4>
            <p className='text-[#181828]] font-normal'>Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.</p>
        </div>
        <div className='font-["Poppins"] text-xs mb-[15px]'>
            <h4 className='text-black font-medium mb-[6px]'>fronend developer</h4>
            <p className='text-[#181828]] font-normal'>Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.</p>
        </div>
        <div className='font-["Poppins"] text-xs mb-[15px]'>
            <h4 className='text-black font-medium mb-[6px]'>AWS</h4>
            <p className='text-[#181828]] font-normal'>Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.</p>
        </div>
        
      </>
    </div>
  )
}

export default AboutDetailsTwo