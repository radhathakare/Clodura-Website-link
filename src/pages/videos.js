import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { ResetCSS } from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/SaasModern/sassModern.style';
import Navbar from 'containers/SaasModern/Navbar';
import Footer from 'containers/AgencyModern/Footer';
import Seo from 'components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import VideosLanding from '../containers/Custom/Videos';
import { Helmet } from 'react-helmet';

const Videos = () => {
    const VideosData = useStaticQuery(graphql`
  {
    allStrapiVideo {
        nodes {
            id
            title
            slug
            date
            link
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

    const allVideosData = VideosData.allStrapiVideo.nodes;

    // Sorts videos by date descending
    allVideosData.sort((a, b) => { return new Date(b.date).getTime() - new Date(a.date).getTime() });

    return (
        <ThemeProvider theme={saasModernTheme}>
            <Fragment>
                <Seo title="Videos - Clodura - AI Lead Generation Software Company" description="Find out here our videos on online software - @Clodura - AI Powered Lead Generation Online Software Company" robots="index, follow" canonical="https://www.clodura.ai/videos/" />
                <ResetCSS />
                
                <GlobalStyle />
                <ContentWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar />
                        </DrawerProvider>
                    </Sticky>
                    <VideosLanding videos={allVideosData} />
                    <Footer />
                </ContentWrapper>
            </Fragment>
        </ThemeProvider>
    );
};
export default Videos;
