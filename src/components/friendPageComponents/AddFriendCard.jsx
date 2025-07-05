import React from 'react'
import Button from '../Button'
import FriendProfileName from './FriendProfileName'
import FriendProfileWebLInk from './FriendProfileWebLInk'
import ProfilePicture from '../publicProfilePageComponents/ProfilePicture'
import CoverPicture from '../publicProfilePageComponents/CoverPicture'
import SocialIcon from '../publicProfilePageComponents/SocialIcon'
import ProfileSummery from '../publicProfilePageComponents/ProfileSummery'
import CardButton from '../CardButton'


const AddFriendCard = ({}) => {
  return (
    <div className='min-w-[284px] rounder-[15px] bg-white overflow-hidden'>
        <CoverPicture height='83px' marginT='0' rounded='15px 15px 0 0' />
        <ProfilePicture width='90px' height='90px' marginT='-45px' borderWidth='7px'/>
        <FriendProfileName text='ABM Shawon Islam' textSize='15px' fontWeight='medium'/>
        <FriendProfileWebLInk text='abm@gmail.com' fontWeight='normal' textSize='17px'/>
        <ProfileSummery marginT='22px'/>
        <SocialIcon marginT='26px' marginB='30px'/>
        <div className='flex justify-between'>
            <CardButton text='Add Friend'/>
            <CardButton text='Send Message' rounded='0 0 15px 0' bgColor='#23D2E2'/>
        </div>
    </div>
  )
}

export default AddFriendCard