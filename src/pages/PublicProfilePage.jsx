import React from 'react'
import ProfileBanner from '../components/ProfileBanner'
import Container from '../components/commonComponents/Container'
import AboutMe from '../components/AboutMe'

const PublicProfilePage = () => {
  return (
    <Container>
      <div>
      <ProfileBanner/>
      </div>
      <div className='flex mt-[33px]'>
        <AboutMe/>
      </div>
    </Container>
  )
}

export default PublicProfilePage
