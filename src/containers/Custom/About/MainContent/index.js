import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Box from 'common/components/Box';
import GatsbyImage from 'common/components/GatsbyImage';

import MainContentWrapper, { ImagesSection } from './maincontent.style';

const MainContent = ({ imageAreaLarge, imageAreaSmall }) => {
    const data = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "image/saasModern/dash-2.png" }) {
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
        <Container>
            <MainContentWrapper>
                <Text content="ABOUT" />
                <div className="main-content">
                    <Heading as="h1" content="An Experience Product Company" />
                    <div>
                        <Text content="We help sales teams find future Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolores." />
                        <br />
                        <Text content="Clodura is an integrated sales prospecting and sales engagement platform. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolore assumenda tenetur fugiat rem consequatur. Quia totam earum voluptate delectus!" />
                    </div>
                </div>
                <ImagesSection>
                    <Box {...imageAreaLarge}>
                        <GatsbyImage
                            src={
                                (data.illustration !== null) | undefined
                                    ? data.illustration.childImageSharp.gatsbyImageData
                                    : {}
                            }
                            alt="Domain Image"
                        />
                    </Box>
                    <Box {...imageAreaSmall} className="image-row">
                        <GatsbyImage
                            src={
                                (data.illustration !== null) | undefined
                                    ? data.illustration.childImageSharp.gatsbyImageData
                                    : {}
                            }
                            alt="Domain Image"
                        />
                        <GatsbyImage
                            src={
                                (data.illustration !== null) | undefined
                                    ? data.illustration.childImageSharp.gatsbyImageData
                                    : {}
                            }
                            alt="Domain Image"
                        />
                    </Box>
                    <Box {...imageAreaSmall} className="image-row">
                        <GatsbyImage
                            src={
                                (data.illustration !== null) | undefined
                                    ? data.illustration.childImageSharp.gatsbyImageData
                                    : {}
                            }
                            alt="Domain Image"
                        />
                        <GatsbyImage
                            src={
                                (data.illustration !== null) | undefined
                                    ? data.illustration.childImageSharp.gatsbyImageData
                                    : {}
                            }
                            alt="Domain Image"
                        />
                    </Box>
                </ImagesSection>
            </MainContentWrapper>
        </Container>
    );
};

MainContent.propTypes = {
    imageAreaLarge: PropTypes.object,
    imageAreaSmall: PropTypes.object,
}

MainContent.defaultProps = {
    imageAreaLarge: {
        width: ["100%", "100%", "50%", "50%", "50%"],
        mr: ["0", "0", "40px", "40px", "40px"],
        mb: ["40px", "40px", "0", "0", "0"],
    },
    imageAreaSmall: {
        width: ["100%", "100%", "23%", "23%", "23%"],
        mr: ["0", "0", "40px", "40px", "40px"],
        mb: ["40px", "40px", "0", "0", "0"],
    }
}

export default MainContent;
