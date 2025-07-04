import React from 'react'
import CoverPicture from './CoverPicture'
import ProfilePicture from './ProfilePicture'
import SocialIcon from '../commonComponents/SocialIcon'
import Button from '../Button'
import FriendProfileName from './FriendProfileName'
import FriendProfileWebLInk from './FriendProfileWebLInk'
import ProfileSummery from '../commonComponents/ProfileSummery'

const AddFriendCard = ({}) => {
  return (
    <div className='min-w-[284px] rounder-[15px] bg-white'>
        <CoverPicture height='83px' marginT='0'/>
        <ProfilePicture width='90px' height='90px' marginT='-45px' borderWidth='7px'/>
        <FriendProfileName text='ABM Shawon Islam' textSize='15px' fontWeight='medium'/>
        <FriendProfileWebLInk text='abm@gmail.com' fontWeight='normal' textSize='17px'/>
        <ProfileSummery marginT='22px'/>
        <SocialIcon marginT='26px' marginB='30px'/>
        <div className='flex justify-between'>
            <button className='w-full px-5 py-3 bg-[#615DFA] font-[Poppins] text-white font-semibold text-[13px] rounded-bl-[15px]'>Add Friend</button>
            <button className='w-full px-5 py-3 bg-[#23D2E2] font-[Poppins] text-white font-semibold text-[13px] rounded-br-[15px]'>Send Message</button>
        </div>
    </div>
  )
}

export default AddFriendCard