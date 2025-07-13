import React from "react";
import Container from "../components/commonComponents/Container";
import ProfileBanner from "../components/publicProfilePageComponents/ProfileBanner";
import AboutMe from "../components/publicProfilePageComponents/AboutMe";
import PhotosCard from "../components/postCardComponents/PhotosCard";
import VideosCard from "../components/postCardComponents/VideosCard";
import PostCard from "../components/postCardComponents/PostCard";
import VideoItem from "../components/postCardComponents/VideoItem";
import PhotoItem from "../components/postCardComponents/PhotoItem";
import PlayIcon from "../icons/PlayIcon";

const NewsFeedPage = () => {
  return (
    <Container>
      <div>
        <ProfileBanner />
      </div>
      <div className="flex mt-[33px] gap-[15px]">
        <div className="flex gap-[15px] flex-col w-[24%]">
          <AboutMe />
          <PhotosCard />
          <VideosCard />
        </div>
        <div className="flex gap-[15px] flex-col w-[48%]">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard>
            <VideoItem height="349px" bgColor="#7A77FD" rounded="0">
              <div className="flex items-center justify-center h-full w-full">
                <PlayIcon circle="100px" borderWidht="4px" textSize="20px" />
              </div>
            </VideoItem>
          </PostCard>
          <PostCard>
            <PhotoItem
              width="100%"
              rounded="0"
              height="349px"
              bgColor="#7A77FD"
            ></PhotoItem>
          </PostCard>
          <PostCard>
            <div className="flex flex-wrap gap-[13px]">
              <PhotoItem width="48%"  height="207px"/>
              <PhotoItem width="48%"  height="207px"/>
              <PhotoItem width="48%"  height="207px"/>
              <PhotoItem width="48%" height="207px" bgColor="#41EFFF">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white text-[36px] font-bold font-[Poppins]">10+</span>
                </div>
              </PhotoItem>
            </div>
          </PostCard>
        </div>
      </div>
    </Container>
  );
};

export default NewsFeedPage;
