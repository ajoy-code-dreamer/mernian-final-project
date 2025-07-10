import React from 'react'
import ProfileBanner from '../components/publicProfilePageComponents/ProfileBanner'
import Container from '../components/commonComponents/Container'
import AboutMe from '../components/publicProfilePageComponents/AboutMe'
import PersonalInfo from '../components/aboutPageComponents/PersonalInfo'
import AboutDetailsOne from '../components/aboutPageComponents/AboutDetailsOne'
import AboutDetailsTwo from '../components/aboutPageComponents/AboutDetailsTwo'

const AboutPage = () => {
  return (
    <Container>
      <ProfileBanner/>
      <div className='flex gap-[18px] mt-[33px]'>
        <div className='w-[22%] flex flex-col gap-4'>
        <AboutMe/>
        <PersonalInfo/>
        </div>
        <div className='flex flex-col gap-4 w-[48%]'>
          <AboutDetailsOne/>
          <AboutDetailsTwo/>
        </div>
      </div>
    </Container>
  )
}

export default AboutPage
