import React, { useState, useContext } from "react";
import "./styles/VideoItem.css";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import EditModal from "./EditModal";
import { deleteVideo, editVideo, fetchVideos } from "../http/videoAPI";
import { Context } from "../index";


const VideoItem = ({ video_item }) => {
    const { video } = useContext(Context);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal,setShowEditModal]= useState(false);

    const handleShowDeleteModal = () => {
        setShowDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };
    const handleShowEditModal = () => {
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    const handleDelete = async () => {
        await deleteVideo(video_item.id)
        await fetchVideos(video.selectedCategory.name).then((data) => {
            video.setVideos(data);
        });
        setShowDeleteModal(false);
    };
    

    return (
        <div key={video_item.id} className="video-item">
            <div className="item-info-container" >
                <div className="dropdown" >
                    <button className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ...
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={handleShowDeleteModal} >Delete</a></li>
                        {!video_item.is_public && <li><a className="dropdown-item" href="#" onClick={handleShowEditModal} >Edit</a></li>}
                    </ul>
                </div>
                <h4>{video_item.title}</h4>
            </div>

            <iframe
                src={video_item.url}
                title={video_item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
            ></iframe>
            {showDeleteModal && <DeleteConfirmationModal
                handleClose={handleCloseDeleteModal}
                handleDelete={handleDelete}
            />}
            {showEditModal && <EditModal handleClose={handleCloseEditModal} videoId={video_item.id}/>}

        </div>
    );
};

export default VideoItem;
