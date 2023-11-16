import React, { useContext, useEffect } from "react";
import CategoriesBar from "../components/CategoriesBar";
import "./styles/Gallery.css";
import VideoList from "../components/VideosList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchVideos } from "../http/videoAPI";
const Gallery = observer(() => {
  const { video } = useContext(Context)
  useEffect(() => {
    fetchVideos(null).then(data => video.setVideos(data))
  }, [])
  useEffect(() => {
    fetchVideos(video.selectedCategory.name).then(data => {
      video.setVideos(data)
    })
  }, [video.selectedCategory])

  return (
    <div className="gallery-container">
      <CategoriesBar />
      <VideoList />
    </div>
  );
});

export default Gallery;
