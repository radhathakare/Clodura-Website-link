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

const GDPR = () => {
    const gdprData = useStaticQuery(graphql`
    {
        allStrapiGdpr {
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

    const { markdown } = gdprData.allStrapiGdpr.nodes[0];
    const html = markdown.data.childMarkdownRemark.html;

    return (
        <ThemeProvider theme={saasModernTheme}>
            <Fragment>
                <Seo title="GDPR - Clodura.AI - Lead Generation Platform" description="GDPR - This notice is to inform you of the collection, processing, and sale of certain personal information or personal data about you." robots="index, follow" canonical="https://www.clodura.ai/gdpr/" />
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
export default GDPR;
