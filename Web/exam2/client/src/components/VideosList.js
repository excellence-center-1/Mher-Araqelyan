import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import VideoItem from "./VideoItem";
import "./styles/VideoList.css"
const VideoList = observer(() => {
  const { video } = useContext(Context);

  return (
    <div className="video-grid">
      {video.videos.map(video => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
});

export default VideoList;