import React from 'react'
import ProfileBanner from '../components/ProfileBanner'
import Container from '../components/commonComponents/Container'
import AboutMe from '../components/AboutMe'
import PhotosCard from '../components/PhotosCard'

const PublicProfilePage = () => {
  return (
    <Container>
      <div>
      <ProfileBanner/>
      </div>
      <div className='flex mt-[33px]'>
        <div>
        <AboutMe/>
        <PhotosCard/>
        </div>
        <div>

        </div>
      </div>
    </Container>
  )
}

export default PublicProfilePage
