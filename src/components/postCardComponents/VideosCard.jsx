import React, { useEffect, useRef, useState } from "react";
import VideoItem from "./VideoItem";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const VideosCard = () => {
  let [isCardEditOpen, setIsCardEditOpen] = useState(false);

  let cardEditRef = useRef();

  useEffect(() => {

    let clickOutSide = (event) => {
      if (cardEditRef.current && !cardEditRef.current.contains(event.target)) {
        setIsCardEditOpen(false);
      }
    };
    document.addEventListener("click", clickOutSide);


  }, []);

  let handleCardEdit = () => {
    setIsCardEditOpen(!isCardEditOpen);
  };

  return (
    <div className="w-full px-[29px] pb-[29px] pt-[19px] bg-white rounded-[15px] ">
      <div className="flex items-center justify-between mb-[17px] font-bold text-black text-xs">
        <h3>
          Videos <span className="text-[#23D2E2]">7</span>
        </h3>
        <span
          ref={cardEditRef}
          onClick={handleCardEdit}
          className="cursor-pointer relative"
        >
          ...
          {isCardEditOpen && (
            <div className="w-[140px] bg-white text-black rounded-lg shadow-lg p-4 z-10 absolute top-12 right-0 duration-300">
              <ul className="font-['Poppins'] text-xs font-normal">
                <li className="px-2 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>Edit Video</Link>
                </li>
                <li className="px-2 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>Delete Video</Link>
                </li>
                <li className="px-2 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>Report Video</Link>
                </li>
                <li className="px-2 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>Something went wrong</Link>
                </li>
              </ul>
            </div>
          )}
        </span>
      </div>
      <div className="flex gap-[15px] flex-wrap">
        <VideoItem />
        <VideoItem bgColor="#24234B" />
        <VideoItem />
      </div>
    </div>
  );
};

export default VideosCard;
