/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';

import Video from '../../assets/video_logo.mp4';

function ExeVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => {
      video.currentTime = 0;
      video.play();
    };

    const handleClick = () => {
      video.play();
    };

    video.addEventListener('ended', handleEnded);

    // Adiciona um ouvinte para o primeiro clique na página
    document.addEventListener('click', handleClick);

    return () => {
      video.removeEventListener('ended', handleEnded);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        style={{
          position: 'fixed',
          height: '100%',
          width: '50%',
          zIndex: -2,
          left: 0,
          objectFit: 'cover'
        }}
        controls={false}
      >
        <source src={Video} type="video/mp4" />
      </video>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: -1
        }}
      />
    </div>
  );
}

export default ExeVideo;
