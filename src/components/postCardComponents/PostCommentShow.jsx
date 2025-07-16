import React from "react";
import PostCardProfilePicture from "./PostCardProfilePicture";
import PostCardProfileName from "./PostCardProfileName";
import ThumbsUpIcon from "../../icons/ThumbsUpIcon";
import CommentIcon from "../../icons/CommentIcon";
import ShareIcon from "../../icons/ShareIcon";

const PostCommentShow = () => {
  return (
    <>
      <div className="w-full px-[26px] border-t border-[#D9D9D9]">
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
        <div className="pl-[18px] py-4">
          <div className="flex items-center gap-x-3 pb-4">
            <PostCardProfilePicture
              width="38px"
              height="38px"
              borderWidth="2px"
            />
            <div>
              <PostCardProfileName
                color="#3E3F5E"
                fontWeight="500"
                text="Noyon"
                textSize="12px"
              />
              <span className="text-[#3E3F5E] font-normal text-xs pl-2">
                It’s great oppurtunity
              </span>
            </div>
          </div>
          <div className="w-full flex items-center gap-x-6 pl-[59px] font-['Poppins'] font-medium text-xs text-[#AFB0C0] ">
            <span className="cursor-pointer">React!</span>
            <span className="cursor-pointer">Reply</span>
            <span className="cursor-pointer">15 minutes ago</span>
            <span className="cursor-pointer text-[30px] text-black font-normal pb-4 leading-0">
              ...
            </span>
          </div>
        </div>
      </div>
      <div className="py-4 px[-46px] cursor-pointer border-t border-b border-[#D9D9D9]">
        <p className="text-center font-['Poppins'] font-normal text-xs text-[#3E3F5E]">
          Load more comments<span className="pl-1 text-[#01C7D9]">9+</span>
        </p>
      </div>
      <div className="flex items-center gap-x-[19px] py-[18px] pl-[25px] pr-[27px]">
        <PostCardProfilePicture width="38px" height="38px" borderWidth="2px"/>
        <input className="w-full font-['Poppins'] text-sm font-semibold placeholder:text-[#D9D9D9] py-[15px] px-[15px] border border-[#D9D9D9] rounded-[13px]" type="text" placeholder="Your reply "/>

      </div>
    </>
  );
};

export default PostCommentShow;
