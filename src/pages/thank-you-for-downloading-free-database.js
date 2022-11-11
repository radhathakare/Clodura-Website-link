import React, { Fragment, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { ResetCSS } from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper, } from 'containers/SaasModern/sassModern.style';
import Navbar from 'containers/SaasModern/Navbar';
import BannerSection from 'containers/Custom/Thankyoupage/DBBanner';
import Footer from 'containers/AgencyModern/Footer';
import Seo from 'components/seo';
import BlogsLandingPaginated from 'containers/Custom/Thankyoupage/Blogs';
import ResourceLandingWrapper from '../containers/Custom/Thankyoupage/Resources';
import { Helmet } from 'react-helmet';

const Thankyoupage = () => {
  const [page, setPage] = useState(1);

  const ThankData = useStaticQuery(graphql`
  {
    allStrapiBlog {
      nodes {
        id
        title
        slug
        date
        metaDescription
        media {
          localFile {
            publicURL
          }
        }
        markdown {
          data {
              childMarkdownRemark {
                  html
              }
          }
        }
      }
    }
    allStrapiResource {
      nodes {
        id
        title
        slug
        metaDescription
        media {
          localFile {
            publicURL
          }
        }
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


  const allBlogsData = ThankData.allStrapiBlog.nodes;
  const allResourcesData = ThankData.allStrapiResource.nodes;


  allBlogsData.sort((a, b) => { return new Date(b.date).getTime() - new Date(a.date).getTime() });

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo title="Thank you for downloading a free database from our AI-Powered B2b Lead Generation Platform." 
        description="We appriciate your interest in our AI-powered B2B Lead Gen, B2B Contact Data and Sales Intelligence platform. 
        We recommend you to go through more of our free database and latest blogs" robots="noindex, follow" 
        canonical="https://www.clodura.ai/thank-you-for-downloading-free-database" />
        <ResetCSS />
        
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <ResourceLandingWrapper resources={allResourcesData.slice(((page - 1) * 10), ((page - 1) * 10 + 10))} />
          <BlogsLandingPaginated blogs={allBlogsData.slice(((page - 1) * 18 + 1), ((page - 1) * 18 + 19))} />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Thankyoupage;
