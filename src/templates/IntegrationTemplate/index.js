import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { graphql } from 'gatsby';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { ResetCSS } from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/SaasModern/sassModern.style';
import Navbar from 'containers/SaasModern/Navbar';
import Banner from 'containers/Custom/Features/FeatureBanner';
import BannerButtons from 'containers/Custom/Integrations/BannerButtons';
import IntegrationBlockRL from 'containers/Custom/Integrations/Integration-RL';
import IntegrationBlockLR from 'containers/Custom/Integrations/Integration-LR';
import Subbanner from 'containers/Custom/Integrations/Subbanner';
import Footer from 'containers/AgencyModern/Footer';
import Seo from 'components/seo';

const IntegrationPage = ({ data }) => {
  const { slug, metaTitle, metaDescription } = data.strapiIntegration;
  const { banner } = data.strapiIntegration;
  const { secondaryBanner: subbanner } = data.strapiIntegration;
  const { twopart } = data.strapiIntegration;

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo title={metaTitle} description={metaDescription} robots="index, follow" canonical={`https://www.clodura.ai/integrations/${slug}/`} />

        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner bannerTitle={banner.title} bannerDescription={banner.description} />
          <BannerButtons buttonTitles={banner.titles} />
          <Subbanner html={subbanner.markdown.data.childMarkdownRemark.html} link={subbanner.link} />
          {
            twopart.map((p, index) =>
              <>
                {(index % 2 === 0) && <IntegrationBlockLR html={p.markdown.data.childMarkdownRemark.html} image={p.media.localFile.publicURL} />}
                {(index % 2 === 1) && <IntegrationBlockRL html={p.markdown.data.childMarkdownRemark.html} image={p.media.localFile.publicURL} />}
              </>
            )
          }
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export const pageQuery = graphql`
  query ($slug: String) {
    strapiIntegration(slug: { eq: $slug }) {
      slug
      metaTitle
      metaDescription
      banner {
        title
        description
        titles {
          title
        }
      }
      twopart {
        markdown {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        media {
          localFile {
            publicURL
          }
        }
      }
      secondaryBanner {
        markdown {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        link
      }
      card {
        title
        media {
          localFile {
            publicURL
          }
        }
      }
    }
}
`

export default IntegrationPage;
