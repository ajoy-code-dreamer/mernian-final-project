import React from 'react'

const PersonalInfo = () => {
  return (
    <div className='w-full pl-[27px] pr-[34px] py-[35px] bg-white rounded-[15px] font-"Poppins"'>
      <div className="flex items-center justify-between mb-[26px] font-bold text-[#3E3F5E] text-sm">
        <h3>Personal Info</h3>
        <span className="cursor-pointer">...</span>
      </div>
      <div className="font-bold text-[#AFB0C0] text-xs">
        <h5 className="mt-[15px]">
          Email:<span className="ml-[25px] font-normal">shawon.cit.bd@gmail.com</span>
        </h5>
        <h5 className="mt-[15px]">
          Birthday:<span className="ml-[25px] font-normal">28 April 1993</span>
        </h5>
        <h5 className="mt-[15px]">
          Occupation:<span className="ml-[25px] font-normal">MernStack Developer</span>
        </h5>
        <h5 className="mt-[15px]">
          Status:<span className="ml-[25px] font-normal">unmarried</span>
        </h5>
        <h5 className="mt-[15px]">
          Birthplace:<span className="ml-[25px] font-normal">Narayanganj</span>
        </h5>
      </div>
    </div>
  )
}

export default PersonalInfo