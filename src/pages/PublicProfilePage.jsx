import React from 'react'
import ProfileBanner from '../components/ProfileBanner'
import Container from '../components/commonComponents/Container'
import AboutMe from '../components/AboutMe'
import PhotosCard from '../components/PhotosCard'
import PostCard from '../components/commonComponents/PostCard'
import VideosCard from '../components/VideosCard'

const PublicProfilePage = () => {
  return (
    <Container>
      <div>
      <ProfileBanner/>
      </div>
      <div className='flex mt-[33px] gap-[15px]'>
        <div className='flex gap-[15px] flex-col'>
        <AboutMe/>
        <PhotosCard/>
        <VideosCard/>
        </div>
        <div className='flex gap-[15px] flex-col'>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        </div>
      </div>
    </Container>
  )
}

export default PublicProfilePage
