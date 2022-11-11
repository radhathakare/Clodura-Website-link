import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Heading from 'common/components/Heading';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import Link from 'common/components/Link';
import Container from 'common/components/UI/Container';
import { Icon } from 'react-icons-kit';
import SectionWrapper, {
  SectionHeader,
  FeatureWrapper,
} from './workSection.style';
import BlogPost from '../BlogPost';

const Features = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        workData {
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

  const { features } = data.charityJson.workData;
  return (
    <SectionWrapper id="work">
      <Container width="1260px">
        <SectionHeader>
          <Heading as="h2" content="Features" />
        </SectionHeader>
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
                </Link>
              }
            />
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Features;
