import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { ResetCSS } from 'common/assets/css/style';
import {
    GlobalStyle,
    ContentWrapper,
} from 'containers/SaasModern/sassModern.style';

import Navbar from 'containers/SaasModern/Navbar';
import Banner from 'containers/Custom/Common/Banner';
import MainDisplay from 'containers/Custom/Integrations/MainDisplay';
import Footer from 'containers/AgencyModern/Footer';
import Seo from 'components/seo';
import { Helmet } from 'react-helmet';

const IntegrationHome = () => {
    const IntegrationHomeData = useStaticQuery(graphql`
    {
        allStrapiIntegration {
            nodes {
                slug
                card {
                    title
                    media {
                        localFile {
                            publicURL
                        }
                    }
                }
            }
        }
    }
  `);

    const integrationPages = IntegrationHomeData.allStrapiIntegration.nodes;

    return (
        <ThemeProvider theme={saasModernTheme}>
            <Fragment>
                <Seo title="Integrate Clodura for the Best B2B Lead Generation Services" description="Clodura's automated lead generation software can be integrated seamlessly with your sales and marketing technology stack Find out more now!" robots="index, follow" canonical="https://www.clodura.ai/integrations/" />
                <ResetCSS />
               
                <GlobalStyle />
                <ContentWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar />
                        </DrawerProvider>
                    </Sticky>

                    <Banner heading="CLODURA INTEGRATIONS" text="Seamless integration with your Sales & Marketing Technology Stack with Clodura’s API." z={1} />

                    <MainDisplay pages={integrationPages} />

                    <Footer />
                </ContentWrapper>
            </Fragment>
        </ThemeProvider>
    );
};

export default IntegrationHome;
