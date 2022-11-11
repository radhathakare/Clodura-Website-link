import React from 'react';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import BannerWrapper from './banner.style';

const Banner = ({ title, description }) => {
  return (
    <BannerWrapper>
      <Heading as="h1" content={title} />
      <Text content={description} />
    </BannerWrapper>
  );
};

export default Banner;
