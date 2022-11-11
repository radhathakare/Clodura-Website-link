import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'common/components/Heading';
import Box from 'common/components/Box';

import PartnerSectionWrapper from './partner.style';

const PartnerSections = ({
  row,
  col,
  imageWrapper,
  title,
  logos,
}) => {
  return (
    <PartnerSectionWrapper>
      {title && <Heading as="h2" content={title} />}
      <Box {...row}>
        {
          logos.map(logo =>
            <Box {...col} {...imageWrapper} >
              <img src={`${logo.localFile.publicURL}`} alt="Logo"/>
            </Box>
          )
        }
      </Box>
    </PartnerSectionWrapper>
  );
};

PartnerSections.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  imageWrapper: PropTypes.object,
};

PartnerSections.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    width: ['12%', '12%', '16%', '16%', '16%'],
    mb: ['40px', '40px', '20px', '0', '0'],
  },
};

export default PartnerSections;
