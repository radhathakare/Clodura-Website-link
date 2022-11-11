import React from 'react';
import PropTypes from 'prop-types';
import BlockWrapper from './promotionBlock.style';

const FeatureBlock = ({ html, button }) => {
  return (
    <BlockWrapper id="ourCommunity">
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </BlockWrapper>
  );
};

FeatureBlock.propTypes = {
  button: PropTypes.object,
};

FeatureBlock.defaultProps = {
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '10px',
    pl: '15px',
    pr: '15px',
    colors: 'tertiaryWithBg',
    minHeight: 'auto',
    height: '40px',
  },
};

export default FeatureBlock;
