import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import BlockWrapper, {
  ContentWrapper,
  ImageWrapper,
} from './humanityBlock.style';

const HumanityBlock = ({ row, colSmall, colBig, head }) => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiDataTwoPart {
        nodes {
          title
          media {
            internal {
              content
            }
          }
        }
      }
    }
  `);

  const { title, media } = data.allStrapiDataTwoPart.nodes[0];

  let animationContainer = useRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: JSON.parse(media.internal.content)
    });
    return () => anim.destroy();
  }, [media]);

  return (
    <BlockWrapper id="socialFundraising">
        <Box className="row" {...row}>
          <Box className="col" {...colBig}>
            <ImageWrapper>
              <div ref={animationContainer}></div>
            </ImageWrapper>
          </Box>
          <Box className="col" {...colSmall}>
            <ContentWrapper>
              <Heading className="head" {...head} content={title} />
            </ContentWrapper>
          </Box>
        </Box>
    </BlockWrapper>
  );
};

// HumanityBlock style props
HumanityBlock.propTypes = {
  row: PropTypes.object,
  colSmall: PropTypes.object,
  colBig: PropTypes.object,
  head: PropTypes.object
};

// HumanityBlock default style
HumanityBlock.defaultProps = {
  // HumanityBlock row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // HumanityBlock col default style
  colSmall: {
    width: ['100%', '45%', '45%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  colBig: {
    width: ['100%', '5%', '55%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  head: {
    fontWeight: 700
  }
};

export default HumanityBlock;
