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
          <Heading as="h3" content={title} />
          {(description && description.length > 0) && <Text as="p" content={description} />}
        </Left>
      </Container>
    </CallToActionArea>
  );
};

export default CallToAction;
