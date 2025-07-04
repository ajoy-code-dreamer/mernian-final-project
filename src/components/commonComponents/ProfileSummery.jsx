import React from 'react'

const ProfileSummery = ({marginT='0'}) => {
  return (
    <div style={{marginTop:marginT}} className="flex justify-center items-center gap-12 text-center text-['Poppins']">
          <div>
            <h3 className="font-bold text-sm text-black">930</h3>
            <p className="font-medium text-xs text-[#AFB0C0]">Friends</p>
          </div>
          <div className="shrink-0 relative after:content-[''] after:absolute after:top-1/2 after:right-[-25px] after:translate-y-[-50%] after:bg-[#AFB0C0] after:h-[25px] after:w-px before:content-[''] before:absolute before:top-1/2 before:left-[-24px] before:translate-y-[-50%] before:bg-[#AFB0C0] before:h-[25px] before:w-px">
            <h3 className="font-bold text-sm text-black">87</h3>
            <p className="font-medium text-xs text-[#AFB0C0]">Posts</p>
          </div>
          <div>
            <h3 className="font-bold text-sm text-black">1k</h3>
            <p className="font-medium text-xs text-[#AFB0C0]">Followers</p>
          </div>
        </div>
  )
}

export default ProfileSummery