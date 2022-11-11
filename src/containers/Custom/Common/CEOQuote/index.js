import React from 'react';
import CEOQuoteWrapper from './ceoQuote.style';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import GatsbyImage from 'common/components/GatsbyImage';

const CEOQuote = ({ quote, designation, name, media }) => {
    return (
        <CEOQuoteWrapper>
            <div>
                <div className="ceo-quote-text">
                    <Heading as="h5" content={quote} />
                </div>
                <div className="ceo-quote-media">
                    <GatsbyImage
                        src={media.localFile.childImageSharp.gatsbyImageData}
                        alt="Domain Image"
                    />
                    <Heading as="h3" content={name} />
                    <Text content={designation} />
                </div>
            </div>
        </CEOQuoteWrapper>
    );
};

export default CEOQuote;


