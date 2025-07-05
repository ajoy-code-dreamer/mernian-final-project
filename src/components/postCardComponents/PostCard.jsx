import React from "react";
import ThumbsUpIcon from "../../icons/ThumbsUpIcon";
import ShareIcon from "../../icons/ShareIcon";
import CommentIcon from "../../icons/CommentIcon";

const PostCard = () => {
  return (
    <div className='w-[585px] rounded-[15px] bg-white font-["Poppins"]'>
      <div className="py-[15px] pl-5 pr-[41px] ">
        <div className="flex items-center justify-between mb-[23px]">
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px] rounded-full bg-[#615DFA] border-[3px] border-[#D9D9D9]">
              {/* <img src="" alt="image" /> */}
            </div>
            <div>
              <h5 className="text-black font-bold text-sm">
                A B M Shawon Islam
              </h5>
              <p className="text-[#AFB0C0] font-medium text-xs">
                29 minutes ago
              </p>
            </div>
          </div>
          <span className="font-normal text-[30px] text-black cursor-pointer">...</span>
        </div>
        <p className="text-black text-xs font-normal border-b border-[#D9D9D9] pb-[29px]">
          I have great news to share with you all! I’ve been officially made a
          game streaming verified partner by Streamy http://lyt.ly/snej25. What
          does this mean? I’ll be uploading new content every day, improving the
          quality and I’m gonna have access to games a month before the official
          release. This is a dream come true, thanks to all for the support!!!
        </p>
        <div className="flex items-center justify-between mt-[15px] text-xs font-bold text-black">
            <div className="flex items-center gap-[13px]">
                <div>
                    <img src="/images/emoji.png" alt="emoji" />
                </div>
                <span>12</span>
            </div>
            <span>13 Comments</span>
            <span>2 Shares</span>
        </div>
      </div>
      <div className="w-full pt-[23px] border-t border-[#D9D9D9] flex items-center justify-between pb-5 pl-5 pr-[41px] font-bold text-xs text-[#D9D9D9] ">
        <div className="flex items-center gap-4 cursor-pointer">
          <div><ThumbsUpIcon/></div>
          <span>Like</span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <div><CommentIcon/></div>
          <span>Comment</span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <div><ShareIcon/></div>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
