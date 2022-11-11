import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Box from 'common/components/Box';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import { TrustedWrapper, FeatureSection } from './trustedProof.style';
import AppButton from 'common/assets/image/crypto/app.svg';
import PlayButton from 'common/assets/image/crypto/playstore.svg';

const TrustedHistory = ({
  row,
  col,
  title,
  description,
  sectionSubTitle,
  cardArea,
  featureTitleStyle,
  featureDescriptionStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      cryptoJson {
        PROOFS_FEATURE {
          title
          des
          image {
            publicURL
          }
        }
      }
    }
  `);

  return (
    <TrustedWrapper id="trusted">
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: 'column' }}>
            <Text content="Fast, Cheap, Zero Fraud" {...sectionSubTitle} />
            <FeatureBlock
              title={
                <Heading
                  content="A Trusted Proof of Investment Vehicle"
                  {...title}
                />
              }
              description={
                <Text
                  content="Easily buy, sell or exchange over 30 different cryptocurrencies. Now euro deposits and withdrawn available."
                  {...description}
                />
              }
            />
            <Fade up>
              <div className="TrustedImageBtn">
                <a href="https://apps.apple.com/us/app/apple-store/id375380948">
                  <Image
                    src={AppButton}
                    className="app_image_area"
                    alt="App Image"
                  />
                </a>
                <a href="https://play.google.com/store/apps">
                  <Image
                    src={PlayButton}
                    className="play_image_area"
                    alt="GooglePlay Image"
                  />
                </a>
               
              </div>
            </Fade>
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            <FeatureSection>
              {Data.cryptoJson.PROOFS_FEATURE.map((item, index) => (
                <div key={`feature-${index}`} className="featureWrapper">
                  <Image src={item.image.publicURL} alt={item.title} />
                  <Box className="contextPortion">
                    <Heading
                      as="h3"
                      content={item.title}
                      {...featureTitleStyle}
                    />
                    <Text content={item.des} {...featureDescriptionStyle} />
                  </Box>
                </div>
              ))}
            </FeatureSection>
          </Box>
        </Box>
      </Container>
    </TrustedWrapper>
  );
};

// Transactions style props
TrustedHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  featureDescriptionStyle: PropTypes.object,
};

// Trusted default style
TrustedHistory.defaultProps = {
  // Trusted section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Trusted section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },

  // Trusted section title default style
  title: {
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '415px'],
  },
  // Trusted section description default style
  description: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px'],
  },
  sectionSubTitle: {
    as: 'span',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f',
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  featureTitleStyle: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['1', '1', '1', '1', '1'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
  },
  // Trusted section description default style
  featureDescriptionStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '27px',
  },
};

export default TrustedHistory;
