import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import GatsbyImage from 'common/components/GatsbyImage';
import { graphql, useStaticQuery } from 'gatsby';

import FormWrapper, {
} from './formimage.style';

const FormImage = ({ imageArea}) => {
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
        <FormWrapper>
            <Box className="image-box" {...imageArea}>
                <GatsbyImage
                    src={
                        (data.illustration !== null) | undefined
                            ? data.illustration.childImageSharp.gatsbyImageData
                            : {}
                    }
                    alt="Domain Image"
                />
            </Box>
        </FormWrapper>
    );
};

FormImage.propTypes = {
    imageArea: PropTypes.object,
    button: PropTypes.object,
    formGroup: PropTypes.object,
};

FormImage.defaultProps = {
    imageArea: {
        width: ['50%', '50%', '40%', '40%', '40%'],
        mb: ['40px', '40px', '20px', '0', '0'],
    },
    formGroup: {
        width: ['50%', '50%', '40%', '40%', '40%'],
    },
    button: {
        type: 'button',
        fontSize: '13px',
        fontWeight: '700',
        borderRadius: '4px',
        pl: '15px',
        pr: '15px',
        colors: 'tertiaryWithBg',
        minHeight: 'auto',
        height: '40px',
        width: 'fit-content',
    },
};

export default FormImage;
