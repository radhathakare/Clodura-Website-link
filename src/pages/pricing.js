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
import Plans from 'containers/Custom/Pricing/Plans';
import Advertisement from 'containers/Custom/Pricing/Advertisment';
import Footer from 'containers/AgencyModern/Footer';
import FaqSection from 'containers/Hosting/Faq';
import Seo from 'components/seo';
import { Helmet } from 'react-helmet';
import TwoPart from 'containers/Custom/Pricing/TwoPart';

const Pricing = () => {
  const data = useStaticQuery(graphql`
  {
    allStrapiPricingBanner {
      nodes {
          title
          description
      }
    }
  }
  `);

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo title="Start Your Free Trial For The Best Sales Prospecting Software" description="Free Sales Prospecting Software for Online B2B Lead Generation Sign up Now and Use It Free for 7 Days" robots="index, follow" canonical="https://www.clodura.ai/pricing/" />
        <ResetCSS />
        
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner {...data.allStrapiPricingBanner.nodes[0]} />
          {/* <TwoPart/> */}
          <Plans />
          <Advertisement />
          <FaqSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export default Pricing;
