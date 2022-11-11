import React from 'react';

import SingleVideoWrapper from './singleVideo.style';

const SingleVideo = () => {
  return (
    <SingleVideoWrapper>
      <div className="video-container">
        <iframe src="https://www.youtube.com/embed/sB_9E7U_jBY" title="YouTube Player" allowfullscreen controls autoplay muted></iframe>
      </div>
    </SingleVideoWrapper>
  );
};

export default SingleVideo;
