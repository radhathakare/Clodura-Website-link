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
                    <Heading as="h5" content="hghgcdr" />
                </div>
                <div className="ceo-quote-media">
                    
                    <Heading as="h3" content="hvbg" />
                    <Text content="gdf" />
                </div>
            </div>
        </CEOQuoteWrapper>
    );
};

export default CEOQuote;


