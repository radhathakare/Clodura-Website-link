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
import BannerSection from 'containers/Custom/Common/Banner';
import ContainerSection from 'containers/Custom/Demo/ContainerSection';
import Footer from 'containers/AgencyModern/Footer';
import Seo from 'components/seo';
import { Helmet } from 'react-helmet';

const Demo = () => {
  const DemoPageData = useStaticQuery(graphql`
  {
    allStrapiDemoMainBanner {
      nodes {
        part {
          title,
          description,
          media {
            internal {
              content
            }
          }
        }
      }
    }
  }
  `);

  const mainBannerData = DemoPageData.allStrapiDemoMainBanner.nodes[0].part;

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo title="Request a Demo | Clodura.AI | B2B Sales Data Platform" description="Want the best online lead gen software for your organisation? Get in touch with us at Clodura.AI for best B2B Sales data. Request Demo." robots="index, follow" canonical="https://www.clodura.ai/request-demo/" />
        <ResetCSS />
       
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection heading={mainBannerData.title} description={mainBannerData.description} z={-1} />
          <ContainerSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Demo;
