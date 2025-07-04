import React from 'react'
import VideoItem from './commonComponents/VideoItem'
import { FaPlay } from 'react-icons/fa'

const VideosCard = () => {
  return (
    <div className="max-w-[283px] px-[29px] pb-[29px] pt-[19px] bg-white rounded-[15px] ">
      <div className="flex items-center justify-between mb-[17px] font-bold text-black text-xs">
        <h3>Videos <span className="text-[#23D2E2]">7</span></h3>
        <span className='cursor-pointer'>...</span>
      </div>
      <div className="flex gap-[15px] flex-wrap">
        <VideoItem   >
            <div className='flex items-center justify-center h-full w-full'>
            <span className='text-white text-xs w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#181828] border-2 border-[#41EFFF]'><FaPlay /></span> 
            </div>
        </VideoItem >
        <VideoItem   bgColor='#24234B' >
            <div className='flex items-center justify-center h-full w-full'>
            <span className='text-white text-xs w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#181828] border-2 border-[#41EFFF]'><FaPlay /></span> 
            </div>
        </VideoItem >
        <VideoItem   >
            <div className='flex items-center justify-center h-full w-full'>
            <span className='text-white text-xs w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#181828] border-2 border-[#41EFFF]'><FaPlay /></span> 
            </div>
        </VideoItem >
      </div>
    </div>
  )
}

export default VideosCard