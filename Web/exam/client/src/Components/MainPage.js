import React, { useState, useEffect } from 'react';
import './MainPage.css';

const VideoGallery = () => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newVideo, setNewVideo] = useState({
    title: '',
    category: '',
    url: ''
  });

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await fetch(`http://localhost:3001/getvideos?userId=${userId}`);
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    console.log(newVideo);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVideo((prevVideo) => ({
      ...prevVideo,
      [name]: value
    }));
  };

  const handlePostVideo = async () => {

    try {
        const userId = localStorage.getItem('userId');
        const response = await fetch(`http://localhost:3001/newvideo?userId=${userId}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newVideo),
        });

        if (response.ok) {
            // Handle success
            console.log('Video added successfully');
            setVideos((prevVideos) => [...prevVideos, newVideo]);
        } else {
            // Handle error
            console.log('Error occurred posting video');
        }
    } catch (error) {
        console.log('Error:', error);
    }
      
   
    setNewVideo({
      id: '',
      title: '',
      category: '',
      url: ''
    });
    setIsModalOpen(false);
  };

  const filteredVideos = currentCategory === 'all'
    ? videos
    : videos.filter((video) => video.category === currentCategory);

  return (
    <div>
      <div>
        <button onClick={() => handleCategoryChange('all')}>All</button>
        <button onClick={() => handleCategoryChange('Rock Music')}>Rock Music</button>
        <button onClick={() => handleCategoryChange('Sport')}>Sport</button>
        <button onClick={() => handleCategoryChange('Programming')}>Programming</button>
        <button onClick={handleModalOpen}>Post Video</button>

      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>&times;</span>
            <h2>Post Video</h2>
            <form>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" value={newVideo.title} onChange={handleInputChange} />
              <label htmlFor="category">Category:</label>
              <input type="text" id="category" name="category" value={newVideo.category} onChange={handleInputChange} />
              <label htmlFor="url">URL:</label>
              <input type="text" id="url" name="url" value={newVideo.url} onChange={handleInputChange} />
              <button type="button" onClick={handlePostVideo}>Save</button>
            </form>
          </div>
        </div>
      )}

      <div className="video-grid">
        {filteredVideos.map((video) => (
          <div key={video.id} className="video-item">
            <h3>{video.title}</h3>
            <iframe
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default VideoGallery;
