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
import Subbanner from 'containers/AppMinimal/CallToAction';
import Statistics from 'containers/Custom/About/Statistics';
import ScrollingImages from '../containers/Custom/Common/ScrollingImages';
import HumanityBlock from 'containers/Charity/HumanityBlock';
import CEOQuote from 'containers/Custom/Common/CEOQuote';
import Footer from 'containers/AgencyModern/Footer';
import Seo from 'components/seo';
import { Helmet } from 'react-helmet';


const OurData = () => {
  const OurDataPageData = useStaticQuery(graphql`
  {
    allStrapiDataMainBanner {
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
    allStrapiDataSubbanner {
      nodes {
        part {
          title
          description
        }
      }
    }
    allStrapiDataStatistic {
      nodes {
        part {
          firstTitle
          firstDescription
          secondTitle
          secondDescription
          thirdTitle
          thirdDescription
        }
      }
    }
    allStrapiDataScrollingImage {
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
    allStrapiDataCeoQuote {
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

  const mainBannerData = OurDataPageData.allStrapiDataMainBanner.nodes[0].part;
  const subbannerData = OurDataPageData.allStrapiDataSubbanner.nodes[0];
  const statisticsData = OurDataPageData.allStrapiDataStatistic.nodes[0].part;
  const ceoQuoteData = OurDataPageData.allStrapiDataCeoQuote.nodes[0].part;
  const scrollingImagesData = OurDataPageData.allStrapiDataScrollingImage.nodes[0].part;

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo title="Our Data change the way of your leads score that drives business | Clodura.AI" description="Get access to our 95% accurate data with high email accuracy, zero-bounce from 15M+ companies with verified install base data of over 15,000 technology products." robots="index, follow" canonical="https://www.clodura.ai/our-data/" />
        <ResetCSS />
        
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection bannerTitle={mainBannerData.title} bannerDescription={mainBannerData.description}
            media={JSON.parse(mainBannerData.media.internal.content)} emailShown={false} />
          <Subbanner {...subbannerData.part[0]} />
          <Statistics {...statisticsData} />
          <Subbanner {...subbannerData.part[1]} />
          <ScrollingImages data={scrollingImagesData} />
          <HumanityBlock />
          <Subbanner {...subbannerData.part[2]} />
          <CEOQuote {...ceoQuoteData} />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default OurData;
