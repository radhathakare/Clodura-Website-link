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
import Banner from 'containers/Custom/Pricing/Banner';
import ClientLogos from 'containers/Custom/Customers/ClientLogos';
import Videos from 'containers/Custom/Customers/Videos';
import Ratings from 'containers/Custom/Common/Ratings';
import Footer from 'containers/AgencyModern/Footer';
import Seo from 'components/seo';
import { Helmet } from 'react-helmet';

const Customers = () => {
    const CustomersData = useStaticQuery(graphql`
    {
        allStrapiCustomer {
            nodes {
                banner {
                    title
                    description
                }
                logos {
                    height
                    width
                    localFile {
                        publicURL
                    }
                }
            }
        }
    }
  `);

    const data = CustomersData.allStrapiCustomer.nodes;

    return (
        <ThemeProvider theme={saasModernTheme}>
            <Fragment>
                <Seo title="What Clients Say - Clodura - B2B Sales Intelligence Platform" description="Find out here our happy customers at Clodura AI Online B2B Lead Generation Software For Sales Prospecting" robots="index, follow" canonical="https://www.clodura.ai/our-happy-customers-clodura-ai/" />
                <ResetCSS />
                
                <GlobalStyle />
                <ContentWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar />
                        </DrawerProvider>
                    </Sticky>
                    <Banner {...data[0].banner} />
                    <ClientLogos logos={data[0].logos} />
                    <Videos />
                    <Ratings />
                    <Footer />
                </ContentWrapper>
            </Fragment>
        </ThemeProvider>
    );
};

export default Customers;
