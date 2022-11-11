import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
//import GatsbyImage from 'common/components/GatsbyImage';
//import { SectionHeader } from '../appCreative.style';
import FeatureBlock from 'common/components/FeatureBlock';
import SectionHeading from '../SectionHeading';

import SectionWrapper, {
  ExperienceMainWrap,
  ExperienceWrapper,
  SponsoredBy,
} from './experience.style';


const Experiences = () => {
  const data = useStaticQuery(graphql`
    query {
      appCreativeJson {
        experiences {
          title
          slogan
          video_theme {
            childImageSharp {
              gatsbyImageData(
                width: 1230
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          features {
            id
            icon {
              publicURL
            } 
            
            title
            description
          }
          clients {
            id
            logo {
              publicURL
            }
            name
            link
          }
        }
      }
    }
  `);

  const {  features } =
    data.appCreativeJson.experiences;

  // modal handler
  
  return (
    <SectionWrapper id="experience">
      <Container>
      <SectionHeading
          title="Recent Resources"
        />
        <ExperienceMainWrap>
          <ExperienceWrapper>
            
            {features.map((item, index) => (
              <FeatureBlock
                key={`post_key-${index}`}
                id={`post_id-${item.id}`}
                className="experience__item"
                icon={
                  <Image
                    src={item.icon.publicURL}
                    alt={`Icon ${item.id}`}
                    objectFit="cover"
                    className="experience__image"
                  />
                }
                iconPosition="left"
                title={<SponsoredBy><Text className="sponsoredBy" content="SALES" /> </SponsoredBy>}
                title1={<Heading as="h4" content={item.title} />}
                description={<Text content={item.description} />}
              />
            ))}
          </ExperienceWrapper>
        </ExperienceMainWrap>
      </Container>
    </SectionWrapper>
  );
};

export default Experiences;
