import React from 'react';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';

import SmallSubbannerWrapper from './smallSubbanner.style';

const SmallSubbanner = ({ title, description }) => {
    return (
        <SmallSubbannerWrapper id={title}>
            <Heading content={title} />
            <Text content={description} />
        </SmallSubbannerWrapper>
    );
};

export default SmallSubbanner;
