import React, { Fragment } from 'react';
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
import Banner from 'containers/SaasCreative/Banner';
import Statistics from '../containers/Custom/About/Statistics';
import MainContent from '../containers/Custom/About/MainContent';
import Team from '../containers/Custom/Common/Team';
import Footer from 'containers/AgencyModern/Footer';
import Seo from 'components/seo';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo title="Clodura.AI | About Us" />

        <ResetCSS />
        
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <MainContent />
          <Statistics />
          <Team />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default About;
