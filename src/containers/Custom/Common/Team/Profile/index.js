import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Heading from 'common/components/Heading';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import GatsbyImage from 'common/components/GatsbyImage';
import Section from './profile.style';

const Profile = ({ imageArea, name, designation }) => {
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
        <Section>
            <Box {...imageArea}>
                <GatsbyImage
                    src={
                        (data.illustration !== null) | undefined
                            ? data.illustration.childImageSharp.gatsbyImageData
                            : {}
                    }
                    alt="Domain Image"
                />
            </Box>
            <Heading as="h3" content={name} />
            <Text content={designation} />
        </Section>
    );
};

Profile.propTypes = {
    imageArea: PropTypes.object,
    name: PropTypes.string,
    designation: PropTypes.string,
}

Profile.defaultProps = {
    imageArea: {
        width: ["50%", "50%", "50%", "100%", "100%"],
    }
}

export default Profile;
