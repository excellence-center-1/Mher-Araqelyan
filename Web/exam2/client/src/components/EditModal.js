import React, { useState, useEffect, useContext } from "react";
import "./styles/EditModal.css";
import { editVideo, fetchVideos } from "../http/videoAPI";
import { Context } from "../index";
import { convertToEmbedUrl } from "../utils/youtubeUtils";

const EditModal = ({ handleClose, videoId }) => {
    const { video } = useContext(Context);
    const [newVideo, setNewVideo] = useState({
        id: videoId,
        title: "",
        category: "Rock",
        url: video.videos.find(video => video.id == videoId).url
    });
    const handleEdit = async () => {
        if (newVideo.title.trim() !== "" && newVideo.url.trim() !== "") {
            newVideo.url = convertToEmbedUrl(newVideo.url)
            await editVideo(newVideo);
            await fetchVideos(video.selectedCategory.name).then((data) => {
                video.setVideos(data);
            });
            handleClose();
        } else {
            window.alert("Please fill in all required fields.");
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewVideo({ ...newVideo, [name]: value });
    };
    const handleOverlayClick = () => {
        handleClose();
    };

    useEffect(() => {
        document.body.classList.add('edit-modal-open');
        return () => {
            document.body.classList.remove('edit-modal-open');
        };
    }, []);

    return (
        <>
            {(
                <div className="overlay" onClick={handleOverlayClick} >
                    <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <span className="close" onClick={handleClose}>&times;</span>
                        </div>
                        <div className="modal-body">
                            <p>Edit your video</p>
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
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-cancel" onClick={handleClose}>Cancel</button>
                            <button className="btn btn-save" onClick={handleEdit}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditModal;