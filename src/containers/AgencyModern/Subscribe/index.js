import React from 'react';

import Container from 'common/components/UI/ContainerTwo';
import Heading from 'common/components/Heading';
import Box from 'common/components/Box';
import Button from 'common/components/Button';
import Text from 'common/components/Text';

import SectionWrapper, {
  FooterInner,
  Content,
} from './subscribe.style';

const Subscribe = ({ buttonStyles }) => {
  return (
    <SectionWrapper>
      <Container>
        <FooterInner>
          <Content>
            <Heading as="h3" content="The Work OS that lets you shape workflows, your way" />
          </Content>
          <Box>
            <Text content="Boost your team's alignment, efficiency, and productivity by customizing any workflow to fit your needs" />
            <Button title="Get Started" type="submit" {...buttonStyles} />
          </Box>
        </FooterInner>
      </Container>
    </SectionWrapper>
  );
};

Subscribe.defaultProps = {
  buttonStyles: {
    backgroundColor: "#6C6CFF",
    color: "white",
    borderRadius: "25px"
  }
}

export default Subscribe;
