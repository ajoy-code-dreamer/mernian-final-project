import React from 'react'

const PostCardProfilePicture = ({imgSrc='', width='50px',height='50px',bgColor='#615DFA',borderWidth='3px'}) => {
  return (
    <div style={{backgroundColor:bgColor, width:width, height:height,borderWidth:borderWidth}} className={`shrink-0 w-[${width}] h-[${height}] rounded-full border-[${borderWidth}] border-[#D9D9D9] cursor-pointer`}>
        {/* <img src={`${imgSrc}`} alt="image" /> */}
    </div>
  )
}

export default PostCardProfilePicture