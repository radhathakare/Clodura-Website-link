import React from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';

import BannerWrapper from './banner.style';

const Banner = ({ heading, text, link, z }) => {
  return (
    <BannerWrapper z={z}>
      <Heading as="h1" content={heading}  />
      <Text content={text} style={{ display: "inline" }} />
      {link && <a href="mailto:careers@clodura.ai">&nbsp; {link}</a>}
    </BannerWrapper>
  );
};

export default Banner;
