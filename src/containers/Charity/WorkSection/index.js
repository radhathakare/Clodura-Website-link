import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Heading from 'common/components/Heading';
import BlogPost from '../BlogPost';
import Box from 'common/components/Box';
import Button from 'common/components/Button';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import Link from 'common/components/Link';
import { Icon } from 'react-icons-kit';
import Container from 'common/components/UI/Container';
import PropTypes from 'prop-types'
import SectionWrapper, {
  SectionHeader,
  FeatureWrapper,
} from './workSection.style';

const WorkSection = ({buttonWrapper,
  fillButton,
  emailShown,
  buttonHidden}) => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        competitors {
          title
          slogan
          features {
            id
            icon {
              publicURL
            }
            title
            description
            path
          }
        }
      }
    }
  `);

  const {  features } = data.charityJson.competitors ;
  return (
    <SectionWrapper id="work">
      <Container width="1260px">
        <SectionHeader>
          <Heading as="h2" content="How are we Different from our Competitors?" />
        </SectionHeader>
        <div>
        <FeatureWrapper>
          {features.map((item) => (   
            <BlogPost 
            
              key={`feature_key${item.id}`}
              thumbUrl={item.icon.publicURL}
              title={item.title}
              excerpt={item.description}
              link={
                <Link href={item.path}>
                  Learn More <Icon icon={chevronRight} />
                </Link>}
            />
        ))}
        </FeatureWrapper>
        
        </div>
        <Box {...buttonWrapper} className="email-signup">
            {emailShown && <input type="text" placeholder="Business Email" className='fill-input'></input>}
            {!buttonHidden && <a href="https://clodura.ai/request-demo/">
              <Button {...fillButton} title="Book A Demo" />
            </a>}
          </Box>
      </Container>
    </SectionWrapper>
  );
};




WorkSection.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageArea: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  logoStyle: PropTypes.object,
  fillButton: PropTypes.object,
};

WorkSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: ['100%', '100%', '100%', '100%', '100%'],
    mb: '40px',
  },
  imageWrapper: {
    width: ['100%', '100%', '100%', '100%', '100%'],
    flexBox: true,
    justifyContent: 'center',
  },
  imageArea: {
    width: ['90%', '70%', '70%', '70%', '70%'],
    flexBox: true,
    justifyContent: 'center',
    mb: '30px'
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'black',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#00865b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span',
  },
  logoStyle: {
    maxWidth: ['70px !important', '100px !important'],
  },
  fillButton: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'tertiaryWithBg',
    minWidth: ['auto', '120px'],
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
  fillInput: {
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    minWidth: ['auto', '200px'],
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '25px',
  },
  button: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
};
export default WorkSection;