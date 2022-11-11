import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import BlockWrapper, {
  ContentWrapper,
} from './promotionBlock.style';

const PromotionBlock = ({ row, col, title, description, image }) => {
  return (
    <BlockWrapper id="ourCommunity">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ContentWrapper>
              <Heading content={title} />
              <Text content={description} />
            </ContentWrapper>
          </Box>
          <Box className="col" {...col}>
            <img
              src={image}
              alt="Tool Usage"
            />
          </Box>
        </Box>
    </BlockWrapper>
  );
};

// PromotionBlock style props
PromotionBlock.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

// PromotionBlock default style
PromotionBlock.defaultProps = {
  // PromotionBlock row default style
  row: {
    flexBox: true,
    ml: '-15px',
    mr: '-15px',
  },
  // PromotionBlock col default style
  col: {
    width: ['100%', '100%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default PromotionBlock;
