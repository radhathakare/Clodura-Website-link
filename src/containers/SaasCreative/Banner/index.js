import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import GatsbyImage from 'common/components/GatsbyImage';
import Section, {
  BannerContentWrapper,
  BannerContent,
  Figure,
} from './banner.style';

const Banner = () => {
  const illustrations = useStaticQuery(graphql`
    query {
      dashboard: file(
        relativePath: { eq: "image/saasCreative/dashboard.png" }
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
    <Section id="home">
      <Container width="1400px">
        <BannerContentWrapper>
          <BannerContent>
            <Fade up>
              <Heading content="A place for every team's best thinking" />
            </Fade>
            <Fade up delay={100}>
              <Text
                content="Join 30,000+ businesses that use Segment's software and APIs to
              collect, clean, and control their customer data."
              />
            </Fade>
          </BannerContent>
          <Fade up delay={200}>
            <Figure>
              <GatsbyImage
                src={
                  (illustrations.dashboard !== null) | undefined
                    ? illustrations.dashboard.childImageSharp.gatsbyImageData
                    : {}
                }
                objectFit="contain"
                alt="Banner"
              />
            </Figure>
          </Fade>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
