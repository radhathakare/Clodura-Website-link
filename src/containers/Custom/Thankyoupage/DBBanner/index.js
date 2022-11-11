import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';

import { BannerWrapper } from './banner.style';

const BannerSection = ({
  row,
  contentWrapper,
  media
}) => {
  let animationContainer = useRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: media
    });
    return () => anim.destroy();
  }, [media]);

  return (
    <BannerWrapper id="banner_section">
      <Box {...row}>
        <Box {...contentWrapper}>
          <Heading
            as="h5"
            className="secondheading-container"
            content="Thank you for requesting free database"
          />
          <Heading
            as="h6"
            className="secondheading-container"
            content="Your email address will soon receive the desired database link."
	  />
        </Box>
      </Box>
    </BannerWrapper >
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageArea: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  logoStyle: PropTypes.object,
  fillButton: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: ['100%', '100%', '100%', '100%', '100%'],
    mb: '40px',
  },
  imageWrapper: {
    width: ['100%', '100%', '100%', '100%', '100%'],
    flexBox: true,
    justifyContent: 'center',
  },
  imageArea: {
    width: ['90%', '70%', '70%', '70%', '70%'],
    flexBox: true,
    justifyContent: 'center',
    mb: '30px'
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'black',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  description2: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'black',
    lineHeight: '3.00',
    mb: '0',
    textAlign: 'center',
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#00865b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span',
  },
  logoStyle: {
    maxWidth: ['70px !important', '100px !important'],
  },
  fillButton: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'tertiaryWithBg',
    minWidth: ['auto', '120px'],
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
  fillInput: {
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    minWidth: ['auto', '200px'],
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '25px',
  },
  button: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
};

export default BannerSection;
