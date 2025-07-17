import React from 'react'
import PostCardProfileName from './PostCardProfileName'
import PostCardProfilePicture from './PostCardProfilePicture'

const SingleCommentItem = () => {
  return (
    <div className=" pt-[13px] pb-[16px] duration-300">
          <div className="flex items-center gap-x-3 mb-[15px]">
            <PostCardProfilePicture
              width="38px"
              height="38px"
              borderWidth="2px"
            />
            <div>
              <PostCardProfileName
                color="#3E3F5E"
                fontWeight="500"
                text="Sohel rana"
                textSize="12px"
              />
              <span className="text-[#3E3F5E] font-normal text-xs pl-2">
                It’s a always pleasure to do this streams with you. If we have
                at least half half the fun than last time it will be an
                incredible success!
              </span>
            </div>
          </div>
          <div className="w-full flex items-center gap-x-6 pl-[56px] font-['Poppins'] font-medium text-xs text-[#AFB0C0] ">
            <span className="cursor-pointer">React!</span>
            <span className="cursor-pointer">Reply</span>
            <span className="cursor-pointer">15 minutes ago</span>
            <span className="cursor-pointer text-[30px] text-black font-normal pb-4 leading-0">
              ...
            </span>
          </div>
        </div>
  )
}

export default SingleCommentItem