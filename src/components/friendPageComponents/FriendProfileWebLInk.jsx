import React from 'react'
import { Link } from 'react-router-dom'

const FriendProfileWebLInk = ({to='/',text, textSize='12px' ,fontWeight='medium'}) => {
  return (
    <Link 
    className={`font-[${fontWeight}]] text-[#AFB0C0] text-[${textSize}] flex justify-center`}
    to={to}
    target="blank"
    >
    {text}
    </Link>
  )
}

export default FriendProfileWebLInk