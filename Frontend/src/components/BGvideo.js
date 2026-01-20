import React from 'react';
import './BGVideo.css';
import BGVid2 from '../assets/BGVid2.mp4';
import BGVid1 from '../assets/BGVid1.mp4';

const BGVideo = () => {
  return (
    <div className="bg-video-container">
      <video
        className="bg-video"
        src={BGVid2}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default BGVideo;
