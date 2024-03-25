import React from 'react';

import { Container } from './styles';

function Video() {
  return (
    <Container>
      <iframe
        className="video-container"
        src="https://www.youtube.com/embed/uHwf-wRWAm4?si=nW3DbQcl2qJYDf6g"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </Container>
  );
}

export default Video;
