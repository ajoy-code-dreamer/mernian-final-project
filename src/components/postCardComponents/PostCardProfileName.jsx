import React from 'react'

const PostCardProfileName = ({color='black',fontWeight='bold',textSize='14px',text='A B M Shawon Islam'}) => {
  return (
    <h5 style={{color:color, fontWeight:fontWeight,fontSize:textSize}} className={`inline font-["Poppins"] text-[${color}] font-[${fontWeight}] text-[${textSize}] cursor-pointer`}>
        {text}
    </h5>
  )
}

export default PostCardProfileName