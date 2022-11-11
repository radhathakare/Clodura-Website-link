import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import CounterArea from './counter.style';

const Counter = () => {
  const Data = useStaticQuery(graphql`
    query {
      appMinimalJson {
        CounterData {
          blockTitle {
            title
            tagline
          }
          countBox {
            number
            text
            button {
              link
              label
            }
          }
        }
      }
    }
  `);
  const { blockTitle} = Data.appMinimalJson.CounterData;
  const { tagline } = blockTitle;
  return (
    <CounterArea>
      <Container className="Container">
        <Box className="topTitle">
          <Text as="p" content={tagline} />
        </Box>
        
      </Container>
    </CounterArea>
  );
};

export default Counter;
