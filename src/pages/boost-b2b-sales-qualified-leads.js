import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { ResetCSS } from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper, } from 'containers/SaasModern/sassModern.style';
import Navbar from 'containers/SaasModern/Navbar';
import BannerSection from 'containers/Boostb2b/Banner';
import Footer from 'containers/AgencyModern/Footer';
import WorkSection from 'containers/Charity/WorkSection';
import Features from 'containers/Charity/Features';
import PartnerSection from 'containers/SaasModern/Partner';
import Seo from 'components/seo';
import Videos from 'containers/Boostb2b/Videos';
import { Helmet } from 'react-helmet';


const Boostb2b = () => {
  const OurDataPageData = useStaticQuery(graphql`
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
    allStrapiBoostb2B {
    nodes {
      id
      Title
      description1
      description2 {
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


  const clientLogosData = OurDataPageData.allStrapiHomeClientLogo.nodes[0];
  const boostb2bData = OurDataPageData.allStrapiBoostb2B.nodes[0];


  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo title="Boost B2B Sales Qualified Leads With Clodura.AI - Book A Demo" description="Boost the sales qualified leads with Clodura.AI; the qualified sales leader which not only helps you increase b2b lead generation..." robots="noindex, follow" canonical="https://www.clodura.ai/boost-b2b-sales-qualified-leads/" />
        <ResetCSS />
        
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection bannerTitle={boostb2bData.Title}
            bannerDescription={boostb2bData.description1} bannerDescription2={boostb2bData.description2.data.childMarkdownRemark.html} />
          <Features />
          <WorkSection />
          <PartnerSection {...clientLogosData} />
          <Videos />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Boostb2b;
