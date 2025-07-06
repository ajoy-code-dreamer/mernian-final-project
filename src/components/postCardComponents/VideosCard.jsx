import React from 'react'
import VideoItem from './VideoItem'
import { FaPlay } from 'react-icons/fa'

const VideosCard = () => {
  return (
    <div className="max-w-[283px] px-[29px] pb-[29px] pt-[19px] bg-white rounded-[15px] ">
      <div className="flex items-center justify-between mb-[17px] font-bold text-black text-xs">
        <h3>Videos <span className="text-[#23D2E2]">7</span></h3>
        <span className='cursor-pointer'>...</span>
      </div>
      <div className="flex gap-[15px] flex-wrap">
        <VideoItem/>
        <VideoItem bgColor='#24234B'/>
        <VideoItem/>
      </div>
    </div>
  )
}

export default VideosCard