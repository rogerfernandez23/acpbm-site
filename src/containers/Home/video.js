import React from 'react';

function Video() {
  return (
    <iframe
      width="854"
      height="480"
      src="https://www.youtube.com/embed/uHwf-wRWAm4?si=nW3DbQcl2qJYDf6g"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  );
}

export default Video;
