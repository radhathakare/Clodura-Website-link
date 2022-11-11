import React from 'react';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import { ContentWrapper, BannerPart1, BannerPart2 } from './banner.style';
import Image from 'common/components/Image';
import iconday from 'images/Group 198.jpg';
import Card from 'common/components/Card';
import PropTypes from 'prop-types';

const Banner = ({
  title,
  date,
  slug,
  media,
  button,
  metaDescription,
  blogDetail
}) => {
  return (
    <ContentWrapper>
      <BannerPart1>
        <Heading as="h1" content={title} />
        {blogDetail === false && <Text className="banner-caption" content={metaDescription} />}

        <div className='iconcontainer'>
          <Card>
            <div className='icons'>
              <Image
                src={iconday}
                alt="Feature Image"
                width="25px"
                height="25px"
              />
              <Text className="texttime" content={new Date(date).toDateString().substring(3)} />
            </div>
          </Card>
        </div>

        {blogDetail === false && <a href={`/blog/${slug}/`} target="_blank" rel="noreferrer">
          <Button {...button} title="Read More" />
        </a>}
      </BannerPart1>

      <BannerPart2>
        {media && <Image className="objectWrapper" src={media[0].localFile.publicURL} alt="blog" />}
      </BannerPart2>
    </ContentWrapper>

  );
};

Banner.propTypes = {
  button: PropTypes.object,
};

Banner.defaultProps = {
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

export default Banner;