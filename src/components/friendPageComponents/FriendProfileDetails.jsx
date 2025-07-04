import React from 'react'
import FriendIdName from './FriendProfileName'
import FriendIdWebLInk from './FriendProfileWebLInk'

const FriendProfileDetails = () => {
  return (
    <div className="text-center font-['Poppins'] ">
      <FriendIdName text='AJOY SAHA'/>
      <FriendIdWebLInk to='https://www.zipcyber.com' text='www.zipcyber.com'/>
    </div>
  )
}

export default FriendProfileDetails