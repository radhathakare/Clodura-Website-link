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
import WorkSection from 'containers/Charity/WorkSection';
import Features from 'containers/Charity/Features';
import Footer from 'containers/AgencyModern/Footer';
import Ratings from 'containers/Custom/Zoominfo/Ratings';
import PartnerSection from 'containers/Saas/PartnerSection';
import PartnerSections from 'containers/SaasModern/Partner';
import Navbar from 'containers/SaasModern/Navbar';
import FaqSection from 'containers/Hosting/Faq';
import Seo from 'components/seo';
import { Helmet } from 'react-helmet';


const Zoominfo = () => {
  const ZoominfoPageData = useStaticQuery(graphql`
  {
    allStrapiHomeClientLogo {
      nodes {
        title
        logos {
          localFile {
            publicURL
          }
        }
      }
    }
    
  }
  `);

  const clientLogosData = ZoominfoPageData.allStrapiHomeClientLogo.nodes[0];


  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo title="ZoomInfo Alternative: Clodura; Best Sales ZoomInfo Competitors" description="Are you looking for a ZoomInfo alternative? Clodura.AI; is not just the best ZoomInfo alternative but also the top ZoomInfo competitor. It provides superior B2B data at better value for sales teams." robots="index, follow" canonical="https://www.clodura.ai/zoominfo-alternative/" />
        <ResetCSS />
        
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <PartnerSection />
          <Ratings />
          <WorkSection />
          <PartnerSections {...clientLogosData} />
          <Features />
          <FaqSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Zoominfo;
