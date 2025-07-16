import React, { useEffect, useRef, useState } from "react";
import ThumbsUpIcon from "../../icons/ThumbsUpIcon";
import ShareIcon from "../../icons/ShareIcon";
import CommentIcon from "../../icons/CommentIcon";
import { Link } from "react-router-dom";
import PostCardProfilePicture from "./PostCardProfilePicture";
import PostCardProfileName from "./PostCardProfileName";
import PostCommentShow from "./PostCommentShow";

const PostCard = ({ children }) => {
  const [editPostOpen, setEditPostOpen] = useState(false);
  let editPostRef = useRef();

  useEffect(() => {
    let clickOutSide = (event) => {
      if (editPostRef.current && !editPostRef.current.contains(event.target)) {
        setEditPostOpen(false);
      }
    };
    document.addEventListener("click", clickOutSide);
  }, []);

  let handleEditPost = () => {
    setEditPostOpen(!editPostOpen);
  };

  // ======= comment show operation ======
  let [isCommentShow, setIsCommentShow] = useState(false);

  let handelCommentShow = () => {
    setIsCommentShow(!isCommentShow);
  };

  // ======= comment show operation ======

  return (
    <div className='w-full rounded-[15px] bg-white font-["Poppins"]'>
      <div className="py-[15px] pl-5 pr-[41px] ">
        <div className="flex items-center justify-between mb-[23px]">
          <div className="flex items-center gap-3">
            <PostCardProfilePicture />
            <div>
              <PostCardProfileName />
              <p className="text-[#AFB0C0] font-medium text-xs">
                29 minutes ago
              </p>
            </div>
          </div>
          <div ref={editPostRef} className="relative">
            <button
              className="font-normal text-[30px] text-black cursor-pointer"
              onClick={handleEditPost}
            >
              ...
            </button>
            {editPostOpen && (
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
          </div>
        </div>
        <p className="text-black text-xs font-normal">
          I have great news to share with you all! I’ve been officially made a
          game streaming verified partner by Streamy http://lyt.ly/snej25. What
          does this mean? I’ll be uploading new content every day, improving the
          quality and I’m gonna have access to games a month before the official
          release. This is a dream come true, thanks to all for the support!!!
        </p>
      </div>
      <div>{children}</div>
      <div className="flex items-center justify-between mt-[15px] text-xs font-bold text-black border-t border-[#D9D9D9] pt-[15px] ml-5 mr-[41px] mb-[23px]">
        <div className="flex items-center gap-[13px]">
          <div>
            <img src="/images/emoji.png" alt="emoji" />
          </div>
          <span>12</span>
        </div>
        <span>13 Comments</span>
        <span>2 Shares</span>
      </div>
      <div className="w-full pt-[23px] border-t border-[#D9D9D9] flex items-center justify-between pb-5 pl-5 pr-[41px] font-bold text-xs text-[#D9D9D9] ">
        <div className="flex items-center gap-4 cursor-pointer">
          <div>
            <ThumbsUpIcon />
          </div>
          <span>Like</span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <div>
            <CommentIcon />
          </div>
          <span onClick={handelCommentShow} className="duration-300">
            Comment
          </span>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <div>
            <ShareIcon />
          </div>
          <span>Share</span>
        </div>
      </div>
      <div className="duration-300">{isCommentShow && <PostCommentShow />}</div>
    </div>
  );
};

export default PostCard;
