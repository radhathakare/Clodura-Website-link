import React from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';

import BannerWrapper  from './banner.style';

const Banner = () => {
  return (
   <BannerWrapper>
       <Heading as="h1" content="Contact" />
       <Text content="Agency provides a full service range including technical skills, design, business understanding" />
   </BannerWrapper> 
  );
};

export default Banner;
