import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { ResetCSS } from 'common/assets/css/style';
import { Helmet } from 'react-helmet';
import {
    GlobalStyle,
    ContentWrapper,
} from 'containers/SaasModern/sassModern.style';

import Navbar from 'containers/SaasModern/Navbar';
import Footer from 'containers/AgencyModern/Footer';
import Seo from 'components/seo';

import '../templates/policies.css';
import BannerSection from '../containers/Custom/TandC/Banner';

const TandC = () => {
    const tandcData = useStaticQuery(graphql`
    {
    allStrapiTandC {
        nodes {
          description {
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
   const { description } = tandcData.allStrapiTandC.nodes[0];
   const html = description.data.childMarkdownRemark.html;

    return (
        <ThemeProvider theme={saasModernTheme}>
            <Fragment>
                <Seo title="T&C - Clodura.AI - Lead Generation Platform" description="Terms and Conditions "robots="index, follow"  />
        <ResetCSS />
        
                <GlobalStyle />
                <ContentWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar />
                        </DrawerProvider>
                    </Sticky>
                    {/* <BannerSection/> */}
                    <div style={{ maxWidth: "70%", padding: "0", margin: "80px auto" }}
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                    
                    <Footer />
                </ContentWrapper>
            </Fragment>
        </ThemeProvider>
    );
};
export default TandC;
