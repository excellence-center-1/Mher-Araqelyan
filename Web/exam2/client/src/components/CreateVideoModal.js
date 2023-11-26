import React, { useState } from "react";
import "./styles/CreateVideoModal.css";
import { createVideo } from "../http/videoAPI";
import { convertToEmbedUrl } from "../utils/youtubeUtils";

const ModalCreate = ({ closeModal }) => {
  const [newVideo, setNewVideo] = useState({
    title: "",
    category: "Rock",
    url: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVideo({ ...newVideo, [name]: value });
  };
  const handlePostVideo = () => {
    if (newVideo.title.trim() !== "" && newVideo.url.trim() !== "") {
      try {
      newVideo.url = convertToEmbedUrl(newVideo.url)
      createVideo(newVideo).then((data) => {
        closeModal();
      });
    }
    catch (error) {
        window.alert(error.message);
    }
    } else {
      window.alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Post Video</h2>
        <form>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newVideo.title}
            onChange={handleInputChange}
          />
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={newVideo.category}
            onChange={handleInputChange}
          >
            <option value="Rock">Rock</option>
            <option value="Sport">Sport</option>
            <option value="Programming">Programming</option>
          </select>
          <label htmlFor="url">URL:</label>
          <input
            type="text"
            id="url"
            name="url"
            value={newVideo.url}
            onChange={handleInputChange}
          />
          <button className="modal-save-button" type="button" onClick={handlePostVideo}  >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalCreate;
