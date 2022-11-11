import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import BlockWrapper, {
  ContentWrapper,
} from '../Integration-LR/promotionBlock.style';

const IntegrationBlockRL = ({ row, col, html, image }) => {
  return (
    <BlockWrapper id="ourCommunity">
      <Box className="row" {...row}>
        <Box className="col coldown" {...col}>
          <ContentWrapper>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </ContentWrapper>
        </Box>
        <Box className="col colup" {...col}>
          <img
            src={image}
            alt="Tool Usage"
          />
        </Box>
      </Box>
    </BlockWrapper>
  );
};

IntegrationBlockRL.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  button: PropTypes.object,
};

IntegrationBlockRL.defaultProps = {
  row: {
    flexBox: true,
    ml: '-15px',
    mr: '-15px',
  },
  col: {
    width: ['100%', '100%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'tertiaryWithBg',
    minHeight: 'auto',
    height: '40px',
  },
};

export default IntegrationBlockRL;
