import React from 'react';
import Heading from 'common/components/Heading';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'common/components/GatsbyImage';

import PicturesWrapper from './pictures.style';

const Pictures = ({ button }) => {
    const data = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "image/saasModern/vertical.jpg" }) {
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
        <PicturesWrapper>
            <Heading as="h1" content="An Experience" />
            <Heading as="h1" content="To Work With The Company" />
            <div className="images-first-row">
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
            </div>
            <div className="images-second-row">
                <GatsbyImage
                    src={
                        (data.illustration !== null) | undefined
                            ? data.illustration.childImageSharp.gatsbyImageData
                            : {}
                    }
                    alt="Domain Image"
                    className="second-first"
                />
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
                    className="second-last"
                />
            </div>
        </PicturesWrapper>
    );
};

export default Pictures;
