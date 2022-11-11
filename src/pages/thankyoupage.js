import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { ResetCSS } from 'common/assets/css/style';
import {GlobalStyle,ContentWrapper,} from 'containers/SaasModern/sassModern.style';
import Navbar from 'containers/SaasModern/Navbar';
import BannerSection from 'containers/Custom/Thankyoupage/Banner';
import Footer from 'containers/AgencyModern/Footer';
import Seo from 'components/seo';
import BlogsLandingPaginated from 'containers/Custom/Thankyoupage/Blogs';
import ResourceLandingWrapper from '../containers/Custom/Thankyoupage/Resources';




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

  const bannerBlogData = allBlogsData[0];
  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo title="Clodura.AI | Online B2B Lead Generation Software For Sales Prospecting Platform" />
       
        <Helmet>
          <meta name="robots" content="noindex, follow" />
          
        </Helmet>

        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection  />
          <ResourceLandingWrapper resources={allResourcesData.slice(((page - 1) * 10), ((page - 1) * 10 + 10))} />
          <BlogsLandingPaginated blogs={allBlogsData.slice(((page - 1) * 18 + 1), ((page - 1) * 18 + 19))} />
          
          
          
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Thankyoupage;
