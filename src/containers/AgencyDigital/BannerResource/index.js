import React from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import { ContentWrapper, BannerPart1, BannerPart2 } from './bannerResource.style';
import Image from 'common/components/Image';
import PropTypes from 'prop-types';

const BannerResource = ({
  title,
  media,
  metaDescription,
  blogDetail,
  html
}) => {
  return (
    <ContentWrapper>
      <BannerPart1>
        <Heading as="h1" content={title} />
        {blogDetail === false && <Text className="banner-caption" content={metaDescription} />}
        <div
          className="resource-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </BannerPart1>
      <BannerPart2>
        <Image className="objectWrapper" src={media[0].localFile.publicURL} alt="blog" />
      </BannerPart2>
    </ContentWrapper>

  );
};

BannerResource.propTypes = {
  button: PropTypes.object,
};

BannerResource.defaultProps = {
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
  }
};

export default BannerResource;