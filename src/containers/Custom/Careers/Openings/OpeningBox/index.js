import React from 'react';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';

import OpeningBoxWrapper from './openingBox.style';

const OpeningBox = ({ title, content, link, icon }) => {
  return (
    <OpeningBoxWrapper>
      <div>
        <img src={icon.localFile.publicURL} alt=""/>
      </div>
      <Heading as="h3" content={title} />
      <Text content={content} />
      <button>
        <a href={`/career/${link}/`}>Apply Now</a>
      </button>
    </OpeningBoxWrapper>
  );
};

export default OpeningBox;
