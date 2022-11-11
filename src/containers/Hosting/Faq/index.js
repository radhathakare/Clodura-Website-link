import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/components/Accordion';
import { TrustedWrapper } from './faq.style';
import Container from 'common/components/UI/Container';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';

const FaqSection = ({
  sectionWrapper,
  row,
  col,
  secTitleWrapper,
  secHeading,
  secText,
  title,
  description,
  buttonWrapper,
  bannerquestion,
  banneranswer,
  button,
}) => {
  const ZoominfoPageData = useStaticQuery(graphql`
  {
    allStrapiFaq {
    nodes {
      id
      question
      answer
    }
  } 
  }
  `);

const FaqLogosData = ZoominfoPageData.allStrapiFaq.nodes;

  return (
    <TrustedWrapper >
    <Box {...sectionWrapper}>
      <Container>
        <Box {...secTitleWrapper}>
          <Heading {...secHeading} className="Faqheading" content="FAQs" />
        </Box>
        <Box {...row}>
          <Box {...col}>
            <Accordion>
              <div className='boxcard'>
                {FaqLogosData.map((accordionItem, index) => (
                  <AccordionItem
                    className="accordion_item"
                    key={`accordion-${index}`}
                    expanded={accordionItem.expend}
                  >
                    <>
                      <AccordionTitle className="accordion_title">
                        <>
                          <Heading {...title} className="question" content={accordionItem.question} />
                          
                        </>
                      </AccordionTitle>
                      <AccordionBody className="accordion_body">
                        <Text
                          {...description}
                          content={accordionItem.answer}
                        />
                      </AccordionBody>
                    </>
                  </AccordionItem>
                ))}
              </div>
            </Accordion>
            
          </Box>
        </Box>
      </Container>
    </Box>
    </TrustedWrapper>
  );
};

FaqSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
};

FaqSection.defaultProps = {
  sectionWrapper: {
    id: 'faq_section',
    as: 'section',
    pt: ['0'],
    pb: ['0'],
   
  },
  secTitleWrapper: {
    mb: ['55px', '75px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: `${2}`,
    letterSpacing: '0.15em',
    fontWeight: `${6}`,
    color: 'primary',
    mb: `${3}`,
  },
  secHeading: {
    textAlign: 'center',
    fontSize: [`${8}`, `${9}`],
    fontWeight: '600',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: `${0}`,
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: -`${4}`,
    mr: -`${4}`,
  },
  col: {
    width: [1],
    pr: `${4}`,
    pl: `${4}`,
    mb: `${7}`,
  },
  title: {
    fontSize: ['16px', '19px'],
    fontWeight: `${3}`,
    color: 'headingColor',
    letterSpacing: '-0.025em',
    lineHeight: '2.75',
    mb: `${0}`,
  },
  description: {
    fontSize: ['15px','17px'],
    color: 'textColor',
    lineHeight: '2.75',
    mb: `${0}`,
  },
  buttonWrapper: {
    mt: `${11}`,
    flexBox: true,
    justifyContent: 'center',
  },
  button: {
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primary',
    height: `${4}`,
  },
};

export default FaqSection;
