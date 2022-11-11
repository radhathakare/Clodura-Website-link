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

import HomeBannerSection from 'containers/Custom/Home/HomeBannerSection';
import Navbar from 'containers/SaasModern/Navbar';
import PartnerSection from 'containers/SaasModern/Partner';
import ScrollingVideo from 'containers/Custom/Common/ScrollingVideo';
import Subbanner from 'containers/AppMinimal/CallToAction';
import TwoPart from 'containers/Custom/Home/TwoPart';
import ScrollingImages from '../containers/Custom/Common/ScrollingImages';
import CEOQuote from 'containers/Custom/Common/CEOQuote';
import HomeSignUp from 'containers/Custom/Home/HomeSignUp';
import HomeFooter from 'containers/AgencyModern/HomeFooter';
import { Helmet } from 'react-helmet';
import Seo from 'components/seo';

const HomePage = () => {
  const HomePageData = useStaticQuery(graphql`
  {
    allStrapiHomeMainBanner {
      nodes {
          titlePart1,
          titlePart2,
          titlePart3,
          bannerDescription,
      }
    }
    allStrapiHomeSubbanner {
      nodes {
        part {
          title
          description
        }
      }
    }
    allStrapiHomeCeoQuote {
      nodes {
        part {
          name
          designation
          quote
          media {
            localFile {
              childImageSharp {
                gatsbyImageData( 
                  layout: FULL_WIDTH
                  aspectRatio: 1
                  placeholder: BLURRED,
                  formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
    }
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
    allStrapiHomeScrollingImage {
      nodes {
        part {
          title
          description
          media {
            localFile {
              publicURL
            }
          }
        }
      }
    }
    allStrapiHomeScrollingVideo {
      nodes {
          part {
            title
            description
            duration
          }
      }
    }
  }
  `);

  const mainBannerData = HomePageData.allStrapiHomeMainBanner.nodes[0];
  const clientLogosData = HomePageData.allStrapiHomeClientLogo.nodes[0];
  const subbannerData = HomePageData.allStrapiHomeSubbanner.nodes[0];
  const ceoQuoteData = HomePageData.allStrapiHomeCeoQuote.nodes[0].part;
  const scrollingImagesData = HomePageData.allStrapiHomeScrollingImage.nodes[0].part;
  const scrollingVideoData = HomePageData.allStrapiHomeScrollingVideo.nodes[0].part;

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo title="Clodura - AI Powered Lead Generation Platform" description="Clodura is an AI-Powered Sales Prospecting Platform for Online B2B Lead Generation, Actionable Sales Intelligence, and Automated Sales Sequences." robots="index, follow" canonical="https://www.clodura.ai/" />
        <Helmet>
          <script type="text/javascript" >
            {`var w = window; var p = w.location.protocol; if (p.indexOf("http") < 0) { p = "http" + ":"; } var d = document; var f = d.getElementsByTagName('script')[0], s = d.createElement('script'); s.type = 'text/javascript'; s.async = false; if (s.readyState) { s.onreadystatechange = function () { if (s.readyState == "loaded" || s.readyState == "complete") { s.onreadystatechange = null; try { loadwaprops('3ze41a8b11104434641b2af4119398d79e', '3z7095ec222050260309a35b46a5329e0e', '3za55c04fdf9cb34df731fa4b8afcfe35aca2ea2710a2e5843a0d34e51984bde7a', '3z9f5af3d4e245de73fc0ef1d57762b9be', 0.0); } catch (e) { } } }; } else { s.onload = function () { try { loadwaprops('3ze41a8b11104434641b2af4119398d79e', '3z7095ec222050260309a35b46a5329e0e', '3za55c04fdf9cb34df731fa4b8afcfe35aca2ea2710a2e5843a0d34e51984bde7a', '3z9f5af3d4e245de73fc0ef1d57762b9be', 0.0); } catch (e) { } }; }; s.src = p + '//ma.zoho.com/hub/js/WebsiteAutomation.js'; f.parentNode.insertBefore(s, f);`}
          </script>
          
        </Helmet>
        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <HomeBannerSection {...mainBannerData} />
          <PartnerSection {...clientLogosData} />
          <Subbanner {...subbannerData.part[0]} />
          <ScrollingVideo data={scrollingVideoData} />
          <Subbanner {...subbannerData.part[1]} />
          <TwoPart />
          <Subbanner {...subbannerData.part[2]} />
          <ScrollingImages data={scrollingImagesData} />
          <CEOQuote {...ceoQuoteData} />
          <HomeSignUp />
          <HomeFooter />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default HomePage;
