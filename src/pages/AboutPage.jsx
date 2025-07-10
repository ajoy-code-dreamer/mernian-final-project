import React from 'react'
import ProfileBanner from '../components/publicProfilePageComponents/ProfileBanner'
import Container from '../components/commonComponents/Container'
import AboutMe from '../components/publicProfilePageComponents/AboutMe'
import PersonalInfo from '../components/aboutPageComponents/PersonalInfo'

const AboutPage = () => {
  return (
    <Container>
      <ProfileBanner/>
      <div className='flex gap-[18px] mt-[33px]'>
        <div className='w-[24%] flex flex-col gap-4'>
        <AboutMe/>
        <PersonalInfo/>
        </div>
      </div>
    </Container>
  )
}

export default AboutPage
