import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import media from 'common/assets/videos/home/HomeAnim.json';

import { BannerWrapper } from './banner.style';

const HomeBannerSection = ({
  row,
  contentWrapper,
  description,
  imageWrapper,
  imageArea,
  buttonWrapper,
  fillButton,
  titlePart1,
  titlePart2,
  titlePart3,
  bannerDescription
}) => {
  const [email, setEmail] = useState();
  const [buttonActive, setButtonActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { data: { email } };

    const response = await fetch("https://api.corp.clodura.com/api/clodura-signups/", {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Authorization': `bearer ${process.env.STRAPI_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      localStorage.setItem('email', email);
      window.location.href = "/request-demo/"
    }
    else
      window.alert("Invalid/Registered email, please try again");
  }

  let animationContainer = useRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: media,
      rendererSettings: {
        viewBoxSize: '150 150 1250 700'
      }
    });
    return () => anim.destroy();
  }, []);

  useEffect(() => {
    if (email && email.length > 0) setButtonActive(true);
    else setButtonActive(false);
  }, [email])


  return (
    <BannerWrapper id="banner_section">
      <Box {...row}>
        <Box {...contentWrapper}>
          <h2 className="headings-container">
            {titlePart1}
            <mark class="green">{titlePart2}</mark>
            {titlePart3}
          </h2>
          <Text
            {...description}
            content={bannerDescription}
          />
          <Box {...buttonWrapper} className="email-signup">
            <input type="text" placeholder="Business Email" className='fill-input' onChange={(e) => { setEmail(e.target.value) }}></input>
            <Button {...fillButton} title="Book A Demo" onClick={handleSubmit} style={{ backgroundColor: buttonActive ? null : "gray" }} disabled={buttonActive ? false : true} />
          </Box>
        </Box>
      </Box>
      <Box {...imageWrapper}>
        <Box {...imageArea}>
          <Fade bottom>
            <div>
              <div ref={animationContainer} className="anim_container"></div>
            </div>
          </Fade>
        </Box>
      </Box>
    </BannerWrapper >
  );
};

HomeBannerSection.propTypes = {
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

HomeBannerSection.defaultProps = {
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
    width: '100%',
    flexBox: true,
    justifyContent: 'center',
    mb: '60px'
  },
  description: {
    fontSize: ['12px', '12px', '12px', '14px', '14px'],
    color: 'black',
    lineHeight: '1.75',
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
    mt: '35px',
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

export default HomeBannerSection;
