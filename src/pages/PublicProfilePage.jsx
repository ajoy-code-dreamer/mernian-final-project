import React from 'react'
import Container from '../components/commonComponents/Container'
import AboutMe from '../components/publicProfilePageComponents/AboutMe'
import PhotosCard from '../components/postCardComponents/PhotosCard'
import PostCard from '../components/postCardComponents/PostCard'
import VideosCard from '../components/postCardComponents/VideosCard'
import ProfileBanner from '../components/publicProfilePageComponents/ProfileBanner'

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
