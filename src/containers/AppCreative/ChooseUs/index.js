import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import FeatureBlock from 'common/components/FeatureBlock';
import SectionWrapper, { ThumbWrapper, TextWrapper } from './chooseUs.style';

const ChooseUs = () => {
  const data = useStaticQuery(graphql`
    query {
      appCreativeJson {
        chooseUs {
          title
          thumb {
            childImageSharp {
              gatsbyImageData(
                width: 630
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          features {
            id
            title
            description
          }
        }
      }
    }
  `);

  const { thumb, title, features } = data.appCreativeJson.chooseUs;
  return (
    <SectionWrapper>
      <Container>
        <ThumbWrapper>
        <FeatureBlock 
              title={<Heading content="Independence Day Special" />}
            />
        </ThumbWrapper>
        <TextWrapper>
          <Heading content="Unlimited access to verified contacts from over 15M+ Companies" />
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ChooseUs;
