import React from 'react';
import Heading from 'common/components/Heading';

import MainDisplayWrapper, { IntegrationCard, IntegrationCardContainer } from './mainDisplay.style';

import gmail from 'common/assets/image/Integrations/gmail.jpg';
import outlook from 'common/assets/image/Integrations/outlook.jpg';

const MainDisplay = ({ pages }) => {

    return (
        <MainDisplayWrapper>
            <h5>CRM</h5>
            <IntegrationCardContainer>
                {
                    pages.slice(0, 3).map(page => (
                        <>
                            <IntegrationCard>
                                <div className="top">
                                    <img src={page.card.media.localFile.publicURL} alt="Integration" />
                                </div>
                                <div className="bottom">
                                    <a href={`/integrations/${page.slug}/`}><Heading as="h5" content={page.card.title} /></a>
                                </div>
                            </IntegrationCard>
                        </>
                    ))
                }
            </IntegrationCardContainer>
            <IntegrationCardContainer>
                {
                    pages.slice(3).map(page => (
                        <>
                            <IntegrationCard>
                                <div className="top">
                                    <img src={page.card.media.localFile.publicURL} alt="Integration" />
                                </div>
                                <div className="bottom">
                                    <a href={`/integrations/${page.slug}/`}><Heading as="h5" content={page.card.title} /></a>
                                </div>
                            </IntegrationCard>
                        </>
                    ))
                }
            </IntegrationCardContainer>
            <h5>EMAIL</h5>
            <IntegrationCardContainer>
                <IntegrationCard>
                    <div className="top">
                        <img src={gmail} alt="Integration" />
                    </div>
                    <div className="bottom">
                        <Heading as="h5" content="Gmail" />
                    </div>
                </IntegrationCard>
                <IntegrationCard>
                    <div className="top">
                        <img src={outlook} alt="Integration" />
                    </div>
                    <div className="bottom">
                        <Heading as="h5" content="Outlook" />
                    </div>
                </IntegrationCard>
            </IntegrationCardContainer>
        </MainDisplayWrapper>
    );
};

export default MainDisplay;
