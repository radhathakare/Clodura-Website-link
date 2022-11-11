import React, { Fragment, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { ResetCSS } from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/SaasModern/sassModern.style';
import Navbar from 'containers/SaasModern/Navbar';
import Banner from 'containers/AgencyDigital/Banner';
import BlogsLandingPaginated from 'containers/Custom/Blogs/BlogsLandingPaginated';
import BlogsLandingPageCounter from 'containers/Custom/Blogs/BlogsLandingPageCounter';
import Footer from 'containers/AgencyModern/Footer';
import Seo from 'components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';


const Blogs = () => {
  const [page, setPage] = useState(1);

  const BlogsData = useStaticQuery(graphql`
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
  }
  `);


  const allBlogsData = BlogsData.allStrapiBlog.nodes;

  // Sorts blogs by date descending
  allBlogsData.sort((a, b) => { return new Date(b.date).getTime() - new Date(a.date).getTime() });

  const bannerBlogData = allBlogsData[0];

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo title="Clodura: The B2B Lead Generation Platform You Need" 
        description="Find out about the latest trends in the sales automation arena through Clodura’s blog page. Clodura is a leading B2B sales platform, redefining sales processes." robots="index, follow" canonical="https://www.clodura.ai/blog/" />
        <ResetCSS />
        
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          
          <Banner {...bannerBlogData} blogDetail={false} />
          
          
          <BlogsLandingPaginated blogs={allBlogsData.slice(((page - 1) * 18 + 1), ((page - 1) * 18 + 19))} />
          <BlogsLandingPageCounter page={page} setPage={setPage} totalPages={Math.ceil((allBlogsData.length - 1) / 18)} />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Blogs;
