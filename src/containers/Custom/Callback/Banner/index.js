import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import GatsbyImage from 'common/components/GatsbyImage';
import { graphql, useStaticQuery } from 'gatsby';

import BannerWrapper from './banner.style';

const Banner = ({ imageArea }) => {
  const data = useStaticQuery(graphql`
  query {
    illustration: file(relativePath: { eq: "image/saasModern/dash-2.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`);

  return (
    <BannerWrapper>
      <Heading as="h1" content="Request A Call Back" />
      <Text content="Agency provides a full service range including technical skills, design, business understanding" />
      <Box className="image-box" {...imageArea}>
        <GatsbyImage
          src={
            (data.illustration !== null) | undefined
              ? data.illustration.childImageSharp.gatsbyImageData
              : {}
          }
          alt="Domain Image"
        />
      </Box>
    </BannerWrapper>
  );
};

Banner.propTypes = {
  imageArea: PropTypes.object,
};

Banner.defaultProps = {
  imageArea: {
    width: ['50%', '50%', '40%', '40%', '40%'],
    mb: ['40px', '40px', '20px', '0', '0'],
  }
};

export default Banner;
