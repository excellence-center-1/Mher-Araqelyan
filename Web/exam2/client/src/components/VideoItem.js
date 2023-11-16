import React from 'react';
import "./styles/VideoItem.css"
const VideoItem = ({ video }) => {
    return (
        <div key={video.id} className="video-item">
            <h4>{video.title}</h4>
            <iframe
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
            ></iframe>
        </div>
    );
};

export default VideoItem;