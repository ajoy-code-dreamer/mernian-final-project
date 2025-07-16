import React from "react";
import PostCardProfilePicture from "./PostCardProfilePicture";
import PostCardProfileName from "./PostCardProfileName";
import ThumbsUpIcon from "../../icons/ThumbsUpIcon";
import CommentIcon from "../../icons/CommentIcon";
import ShareIcon from "../../icons/ShareIcon";

const PostCommentShow = () => {
  return (
    <div className="w-full px-[26px] py-[13px] duration-300 ">
      <div>
        <div className="flex items-center gap-3">
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
            <span className="text-[#3E3F5E] font-normal text-xs">
              It’s a always pleasure to do this streams with you. If we have at
              least half half the fun than last time it will be an incredible
              success!
            </span>
          </div>
        </div>
        <div className="w-full pt-[23px] flex items-center justify-between pb-5 pl-[56px] pr-[41px] font-bold text-xs text-[#D9D9D9] ">
          <span className="cursor-pointer">React!</span>
          <span className="cursor-pointer">Reply</span>
          <span className="cursor-pointer">15 minutes ago</span>
          <span className="cursor-pointer">...</span>
        </div>
      </div>
      <div className="pl-[18px]">
        <div className="flex items-center gap-3">
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
            <span className="text-[#3E3F5E] font-normal text-xs">
              It’s great oppurtunity
            </span>
          </div>
        </div>
        <div className="w-full pt-[23px] flex items-center gap-8 pb-5 pl-[56px] pr-[41px] font-bold text-xs text-[#D9D9D9] ">
          <span className="cursor-pointer">React!</span>
          <span className="cursor-pointer">Reply</span>
          <span className="cursor-pointer">15 minutes ago</span>
          <span className="cursor-pointer">...</span>
        </div>
      </div>
    </div>
  );
};

export default PostCommentShow;
