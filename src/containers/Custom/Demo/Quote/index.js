import React from 'react';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import QuoteWrapper from './quote.style';

const Quote = ({ quoteTitle, quoteDescription, media, name, title }) => {
    return (
        <QuoteWrapper>
            <Heading as="h2" content={quoteTitle} />
            <Text content={quoteDescription} />
            <img src={`${media.localFile.publicURL}`} alt="Logo" />
            <Heading as="h4" content={name} />
            <Text content={title} />
        </QuoteWrapper>
    );
};

export default Quote;
