import React from 'react';
import PropTypes from 'prop-types';
//import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import { BannerSquareShape } from '../app.style';
import { Independancetitle,Independancecontent } from './banner.style';


const DomainSection = ({
  SectionWrapper,
  row,
  col,
  image,
  imageArea,
  
}) => {
  

  return (
    <Box {...SectionWrapper}>
      
      <BannerSquareShape />
     
     
      <Container>
        <Box {...row}>
          <Box {...col}>
            
            <Independancecontent>
            <FeatureBlock
              title={<Heading content="Unlimited access to verified contacts from over 15M+ Companies" />}
            />
            </Independancecontent> 
        
          </Box>
          <Box {...col} {...imageArea}>
            <Box {...image}>
            <Box>
              {/* <DiscountWrapper>
                
                <DiscountLabel>
                  <Time/>    
                </DiscountLabel>
              </DiscountWrapper> */}
            </Box>
            <Independancetitle>
            <FeatureBlock 
              title={<Heading content="Independence Day Special" />}
            />
            </Independancetitle>
            </Box>
          </Box>
        </Box>
      </Container>
      {/* <BannerSquareInde/> */}
      
    </Box>
  );
};

DomainSection.propTypes = {
  SectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyleTwo: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  textArea: PropTypes.object,
};

DomainSection.defaultProps = {
  SectionWrapper: {
    as: 'section',
    pt: '80px',
    pb: '80px',
    overflow: 'hidden',
  },
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
    width: ['100%', '100%', '50%', '44%', '44%'],
    mt: '-80px',
  },
  imageArea: {
    width: ['0%', '0%', '43%', '35%', '40%'],
    ml: 'auto',
  },
  title: {
    content: 'Essential Mobile  App Landing for  Workspaces',
    fontSize: ['26px', '30px', '30px', '48px', '60px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.01px',
    mb: '20px',
  },
  description: {
    content:
      'A mobile app landing page is important and  essential for right amount of information about your product. Start increasing your user base upon the launch of your product.',
    fontSize: '16px',
    color: '#343d48',
    lineHeight: '33px',
    mb: '10px',
  },
  button: {
    type: 'button',
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
  image: {
    ml: 'auto',
    mt: '70px',
  },
  btnStyleTwo: {
    minWidth: '156px',
    ml: '15px',
    bg: '#fff',
    color: 'rgb(26, 115, 232)',
  },
  textArea: {
    width: ['100%', '100%', '50%', '55%', '55%'],
  },
  discountAmount: {
    content: 'update',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    bg: 'rgb(26, 115, 232)',
  },
  discountText: {
    content: 'Version 2.5.0 has just released .',
    fontSize: '13px',
    fontWeight: '400',
    color: '#0f2137',
    mb: 0,
    as: 'span',
    ml: '10px',
  },
};

export default DomainSection;
