import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'common/components/UI/ContainerTwo';
import GatsbyImage from 'common/components/GatsbyImage';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Button from 'common/components/Button';

import SectionWrapper, { 
  Section,
  Content,
  Illustration,
  Subscribe,
  SponsoredBy
} from './customer.style';

const Customer = () => {
  const Data = useStaticQuery(graphql`
    query {
      illustration: file(
        relativePath: { eq: "image/agencyModern/customer.png" }
      ) {
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
    <SectionWrapper>
      <Container>
        <Section>
          <Illustration>
            <GatsbyImage
              src={
                (Data.illustration !== null) | undefined
                  ? Data.illustration.childImageSharp.gatsbyImageData
                  : {}
              }
              alt="Illustration"
            />
          </Illustration>
          <Content>
          <SponsoredBy>
          <Text className="sponsoredBy" content="OUR TEAM" />
          </SponsoredBy>
            <Heading
              as="h2"
              content="Kapil Khangoankar"
            />
            <Text content="Board of Director" />
            <Subscribe>
              <Button title="View Details" type="submit" />
            </Subscribe>
            
          </Content>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Customer;
