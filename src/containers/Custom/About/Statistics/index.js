import React from 'react';
import Section from './statistics.style';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';

const Statistics = ({ firstTitle, firstDescription, secondTitle, secondDescription, thirdTitle, thirdDescription }) => {
    return (
            <Section>
                <div>
                    <Heading as="h1" content={firstTitle} />
                    <Text content={firstDescription} />
                </div>
                <div className="colored">
                    <Heading as="h1" content={secondTitle} />
                    <Text content={secondDescription} />
                </div>
                <div>
                    <Heading as="h1" content={thirdTitle} />
                    <Text content={thirdDescription} />
                </div>
            </Section>
    );
};

export default Statistics;
