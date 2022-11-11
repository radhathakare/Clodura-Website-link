import React from 'react';
import PropTypes from 'prop-types';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import VideoSectionWrapper from './videoSectionCustom.style';

const VideoSection = ({
  sectionTitle,
  sectionSubTitle,
}) => {

  return (
    <VideoSectionWrapper id="videoSection">
      <Container className="video-container" width="100%">
        <Text content="Get Started With Clodura" {...sectionSubTitle} />
        <Heading content="Your free account never expires. No credit card required." {...sectionTitle} />
        <a href="https://app.clodura.ai/#/auth/register">
          <Button title="Free Sign Up" className="video-button" />
        </a>
      </Container>
    </VideoSectionWrapper>
  );
};

// VideoSection style props
VideoSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  memberName: PropTypes.object,
  designation: PropTypes.object,
  imageWrapper: PropTypes.object,
};

// VideoSection default style
VideoSection.defaultProps = {
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: ['30px', '36px'],
    fontWeight: '600',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '10px',
  },
  // button default design
  buttonStyle: {
    variant: 'textButton',
    p: 0,
    color: '#ec4444',
    fontSize: '71px',
  },
  imageWrapper: {
    display: ' block',
  },
};

export default VideoSection;
