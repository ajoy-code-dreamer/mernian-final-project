import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  let [isCardEditOpen, setIsCardEditOpen] = useState(false)
  let cardEditRef = useRef()

  useEffect(()=>{
    let clickOutSide = (e) =>{
      if(cardEditRef.current && !cardEditRef.current.contains(e.target)){
        setIsCardEditOpen(false)
      }

    }

    document.addEventListener("click", clickOutSide)
  })

  let handleCardEdit = ()=>{
    setIsCardEditOpen(!isCardEditOpen)
  }
  return (
    <div className='w-full pl-[27px] pr-[26px] py-[29px] bg-white rounded-[15px] font-"Poppins"'>
      <div className="flex items-center justify-between mb-[29px] font-bold text-[#3E3F5E] text-sm">
        <h3>About Me</h3>
        <span ref={cardEditRef} onClick={handleCardEdit} className="cursor-pointer relative">...
          {isCardEditOpen && (
            <div className="w-[140px] bg-white text-black rounded-lg shadow-lg p-4 z-10 absolute top-12 right-0 duration-300">
              <ul className="font-['Poppins'] text-xs font-normal">
                <li className="px-2 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>Edit About</Link>
                </li>
                <li className="px-2 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>Delete Info</Link>
                </li>
                <li className="px-2 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>Report</Link>
                </li>
                <li className="px-2 py-2 rounded-lg duration-300 hover:bg-[#F7F7FB]">
                  <Link>Something went wrong</Link>
                </li>
              </ul>
            </div>
          )}
        </span>
      </div>
      <p className="text-sm text-[#AFB0C0] font-normal">
        Hi! My name is A B M Shawon Islam but some people may know me as
        GameHuntress! I have a Twitch channel where I stream, play and review
        all the newest games.
      </p>
      <div className="font-bold text-[#AFB0C0] text-xs">
        <h5 className="mt-[18px]">
          Joined:<span className="ml-[25px] font-normal">22 November 2008</span>
        </h5>
        <h5 className="mt-[18px]">
          City:<span className="ml-[25px] font-normal">Dhaka</span>
        </h5>
        <h5 className="mt-[18px]">
          City:<span className="ml-[25px] font-normal"> 18 years</span>
        </h5>
      </div>
    </div>
  );
};

export default AboutMe;
