import React from 'react'

const ProfilePicture = ({children, width='152px', height='152px',bgColor='#615DFA',borderWidth='11px',marginT='-76px'}) => {
  return (
    <div style={{width:width, height:height, backgroundColor:bgColor, marginTop:marginT, borderWidth:borderWidth}} 
    className={`mx-auto w-[${width}] h-[${height}] bg-[${bgColor}] rounded-full border-[${borderWidth}] border-white mt-[${marginT}]`}
    >{children}</div>
  )
}

export default ProfilePicture