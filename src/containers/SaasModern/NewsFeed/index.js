import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { angleRight } from 'react-icons-kit/fa/angleRight';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import BlogPost from 'common/components/BlogPost';
import Link from 'common/components/Link';
import SectionWrapper, { ContentWrapper, BlockTitle } from './newsFeed.style';


const NewsFeed = () => {
  const data = useStaticQuery(graphql`
    query {
      hostingModernJson {
        newsFeed {
          id
          title
          excerpt
          link
          image {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <SectionWrapper id="news">
      <Container>
        <BlockTitle>
          <Heading as="h3" content="What our author post on Newsfeed" />
          <Text
            as="p"
            content="Build an incredible workplace and grow your business with Gusto"
          />
        </BlockTitle>
        <ContentWrapper>
          {data.hostingModernJson.newsFeed.map((news) => (
            <BlogPost
              key={news.id}
              thumbUrl={news.image.publicURL}
              title={news.title}
              excerpt={news.excerpt}
              link={
                <Link href={news.link} className="excerptLink">
                  Learn More
                  <Icon icon={angleRight} />
                </Link>
              }
            />
          ))}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default NewsFeed;
