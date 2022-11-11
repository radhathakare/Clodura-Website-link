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
import BannerSection from 'containers/SaasModern/Banner';
import ContentHeader from 'containers/Custom/Platform/ContentHeader';
import SmallSubbanner from 'containers/Custom/Common/SmallSubbanner';
import ScrollingImages from 'containers/Custom/Common/ScrollingImages';
import Subbanner from 'containers/AppMinimal/CallToAction';
import CEOQuote from 'containers/Custom/Common/CEOQuote';
import Footer from 'containers/AgencyModern/Footer';
import Seo from 'components/seo';
import { Helmet } from 'react-helmet';

const Platform = () => {
  const PlatformPageData = useStaticQuery(graphql`
  {
    allStrapiPlatformMainBanner {
      nodes {
        part {
          title,
          description,
          media {
            internal {
              content
            }
          }
        }
      }
    }
    allStrapiPlatformFirstSubbanner {
        nodes {
            part {
              title,
              description,
            }
        }
    }
    allStrapiPlatformScrollingImage {
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
    allStrapiPlatformSmallSubbanner {
      nodes {
        part {
          title
          description
        }
      }
    }
    allStrapiPlatformCeoQuote {
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
  }
  `);

  const mainBannerData = PlatformPageData.allStrapiPlatformMainBanner.nodes[0].part;
  const subbannerData = PlatformPageData.allStrapiPlatformFirstSubbanner.nodes[0].part;
  const industryLeaderData = PlatformPageData.allStrapiPlatformCeoQuote.nodes[0];
  const scrollingImageData = PlatformPageData.allStrapiPlatformScrollingImage;
  const smallSubbannerData = PlatformPageData.allStrapiPlatformSmallSubbanner.nodes[0];

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo title="Our Product - An AI-powered B2B Lead Generation Software to Unlock Sales" description="Our Product is an AI Powered Sales Prospecting Platform for sales management software, sales intelligence platforms and sales automation platform" robots="index, follow" canonical="https://www.clodura.ai/sales-prospecting-platform/" />
        <ResetCSS />
        
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection bannerTitle={mainBannerData.title} bannerDescription={mainBannerData.description} media={JSON.parse(mainBannerData.media.internal.content)} buttonHidden={false} />
          <Subbanner {...subbannerData} />
          <ContentHeader />
          <ScrollingImages data={scrollingImageData.nodes[0].part} />
          <SmallSubbanner {...smallSubbannerData.part[0]} />
          <ScrollingImages data={scrollingImageData.nodes[1].part} />
          <SmallSubbanner {...smallSubbannerData.part[1]} />
          <ScrollingImages data={scrollingImageData.nodes[2].part} />
          <CEOQuote {...industryLeaderData.part[0]} />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Platform;
