import styled from 'styled-components';

const VideoSectionWrapper = styled.section`
  padding: 20px 60px 45px 60px;

  .video-container-wrapper {
    background-color: #fff;
    box-shadow: 0 0 10px 0 lightgray;
    padding: 0;
    border-radius: 20px;
    text-align: center;
  }

  .video-container {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%;
    }

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
        box-shadow: 0 0 10px 0 lightgray;
    }

`;

export default VideoSectionWrapper;
