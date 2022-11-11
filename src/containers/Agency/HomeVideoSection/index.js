import React from 'react';
import Container from 'common/components/UI/Container';
import VideoSectionWrapper from './HomeVideoSection.style';

const HomeVideoSection = () => {
  return (
    <VideoSectionWrapper id="videoSection">
      <Container className="video-container-wrapper" width="80%">
        <div className="video-container">
          <iframe src="https://www.youtube.com/embed/YWOOAv_e0cI" title="YouTube Player" allowfullscreen controls autoplay muted></iframe>
        </div>
      </Container>
    </VideoSectionWrapper>
  );
};

export default HomeVideoSection;
