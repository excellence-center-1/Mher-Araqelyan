import React, { useContext, useEffect, useState } from "react";
import CategoriesBar from "../components/CategoriesBar";
import "./styles/Gallery.css";
import VideoList from "../components/VideosList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchVideos } from "../http/videoAPI";
import { fetchCategories } from "../http/categoryAPI";
import NavBar from "../components/NavBar";
import ModalCreate from "../components/CreateVideoModal";

const Gallery = observer(() => {
  const { video } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchVideos(null).then((data) => video.setVideos(data));
    fetchCategories().then((data) => video.setCategories(data));
  }, []);

  useEffect(() => {
    fetchVideos(video.selectedCategory.name).then((data) => {
      video.setVideos(data);
    });
  }, [video.selectedCategory]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    fetchVideos(video.selectedCategory.name).then((data) => {
      video.setVideos(data);
    });
  };
  
  return (
    <div className="gallery-container">
      <NavBar />
      <CategoriesBar />
      <button onClick={openModal} className="open-modal-button" type="button">Create Video</button>
      {isModalOpen && <ModalCreate closeModal={closeModal} />}
      <VideoList />
    </div>
  );
});

export default Gallery;
