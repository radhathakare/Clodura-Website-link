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
import BannerSection from 'containers/SaasModern/Banner';
import Team from 'containers/Custom/Executive/Team';
import Footer from 'containers/AgencyModern/Footer';
import Seo from 'components/seo';
import { Helmet } from 'react-helmet';

const Executive = () => {
  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo title="Team | Who Are We | Clodura.AI" description="Know More about the Experienced Team of Professionals Behind Clodura AI the AI Powered Sales Prospecting Software" robots="index, follow" canonical="https://www.clodura.ai/executives/" />
        <ResetCSS />
        
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection bannerTitle="Executive Team" bannerDescription="Coming from sales background ourselves we realize how daunting the entire process of sales is And that’s what gave birth to the idea of simplifying the lives of sales folks by developing Clodura. We believe in the magic of science and are passionate about spinning logic with exceptional research. We aspire to assist you, end-to-end in your sales function from the study of your data, monitoring them, providing customized templates of emails and much more." buttonHidden={true} />
          <Team />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Executive;
