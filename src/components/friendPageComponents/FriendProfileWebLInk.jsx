import React from 'react'
import { Link } from 'react-router-dom'

const FriendIdWebLInk = ({to='/',text}) => {
  return (
    <Link 
    className="font-medium text-[#AFB0C0] text-xs"
    to={to}
    target="blank"
    >
    {text}
    </Link>
  )
}

export default FriendIdWebLInk