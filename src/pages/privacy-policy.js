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
import Footer from 'containers/AgencyModern/Footer';
import Seo from 'components/seo';

import '../templates/policies.css';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
    const privpolData = useStaticQuery(graphql`
    {
        allStrapiPrivacyPolicy {
            nodes {
                markdown {
                    data {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
    }
  `);

    const { markdown } = privpolData.allStrapiPrivacyPolicy.nodes[0];
    const html = markdown.data.childMarkdownRemark.html;

    return (
        <ThemeProvider theme={saasModernTheme}>
            <Fragment>
                <Seo title="Privacy Policy - Clodura - Lead Generation with the power of AI" description="Read out our mentioned Privacy Policy - Clodura.AI - A Powered Lead Generation Platform with the power of AI" robots="index, follow" canonical="https://www.clodura.ai/privacy-policy/" />
                <ResetCSS />
                
                <GlobalStyle />
                <ContentWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar />
                        </DrawerProvider>
                    </Sticky>
                    <div style={{ maxWidth: "70%", padding: "0", margin: "80px auto" }}
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                    <Footer />
                </ContentWrapper>
            </Fragment>
        </ThemeProvider>
    );
};
export default PrivacyPolicy;
