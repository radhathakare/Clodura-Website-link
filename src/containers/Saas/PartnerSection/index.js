import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';

import PartnerSectionWrapper from './partner.style';

const PartnerSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  textArea1,
  imageArea,
}) => {
  const data = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "image/bannerzoom.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <PartnerSectionWrapper>
      <Container>
        <Box {...row}>
          <Box {...col} {...textArea}>
            <Heading
              as="h1"
              {...title}
              content="Not just the best ZoomInfo alternative!"
            />
            <Text
              {...description}
              content="Looking for a ZoomInfo alternative?"
            />
            <Text
              {...description}
              content="Enroll for the Free Sign up with Clodura.AI today. 
              Clodura.AI provides superior B2B data at better value for sales teams. Driving hypergrowth for 500+ of happy customers."
            />
            <Box>
              <a href="/request-demo/" className="navbar_drawer_button">
                <Button {...button} title="Book A Demo" />
              </a>

            </Box>
          </Box>
          <Box {...col} {...imageArea}>
            <GatsbyImage
              src={
                (data.illustration !== null) | undefined
                  ? data.illustration.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="Domain Image"
            />
          </Box>

        </Box>
        <Box {...textArea1} className="mt-9">
          <Heading as="h3"
            {...title}
            content="Clodura.AI - The Best Lead Generation Platform"
          />
        </Box>
      </Container>
    </PartnerSectionWrapper>
  );
};

PartnerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
};

PartnerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%'],
  },
  textArea1: {

    mt: '45px',

  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '58%'],
    mb: ['40px', '40px', '0', '0', '0'],
  },
  title: {
    fontSize: ['26px', '30px', '30px', '48px', '48px'],
    fontWeight: '400',
    color: '#ffffff',
    letterSpacing: '-0.025em',
    mb: '15px',
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#ffffff',
    lineHeight: '1.75',
    mb: '33px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'tertiaryWithBg',
  },
};

export default PartnerSection;
