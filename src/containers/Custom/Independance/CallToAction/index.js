import React from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import CallToActionArea, { Left } from './callToAction.style';
const CallToAction = ({ title, description }) => {
  return (
    <CallToActionArea>
      <Container className="Container">
        <Left>
          <Heading as="h2" content="We help sales teams find future customers, identify sales opportunities and 
        automate sales campaigns without burning a hole in their budget." />
          
        </Left>
      </Container>
    </CallToActionArea>
  );
};

export default CallToAction;
