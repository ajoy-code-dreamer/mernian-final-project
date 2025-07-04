import React from 'react'
import FriendProfileWebLInk from './FriendProfileWebLInk'
import FriendProfileName from './FriendProfileName'

const FriendProfileDetails = () => {
  return (
    <div className="text-center font-['Poppins'] ">
      <FriendProfileName text='AJOY SAHA'/>
      <FriendProfileWebLInk to='https://www.zipcyber.com' text='www.zipcyber.com'/>
    </div>
  )
}

export default FriendProfileDetails