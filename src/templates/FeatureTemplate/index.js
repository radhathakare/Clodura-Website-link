import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { ResetCSS } from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/SaasModern/sassModern.style';
import Navbar from 'containers/SaasModern/Navbar';
import Banner from 'containers/Custom/Features/FeatureBanner';
import FeatureBlock from 'containers/Custom/Features/FeatureBlock';
import FeatureBlockLR from 'containers/Custom/Features/Feature-LR';
import FeatureBlockRL from 'containers/Custom/Features/Feature-RL';
import Footer from 'containers/AgencyModern/Footer';
import Seo from 'components/seo';
import { graphql } from 'gatsby';

const FeaturePage = ({ data }) => {
  const { slug, metaTitle, metaDescription } = data.strapiFeaturePage;

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo title={metaTitle} description={metaDescription} robots="index, follow" canonical={`https://www.clodura.ai/${slug}/`} />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner bannerTitle={data.strapiFeaturePage.banner.title} bannerDescription={data.strapiFeaturePage.banner.description} />
          {data.strapiFeaturePage.introduction.data.childMarkdownRemark.html.length > 10 && <FeatureBlock html={data.strapiFeaturePage.introduction.data.childMarkdownRemark.html} />}
          {
            data.strapiFeaturePage.part.map((p, index) =>
              <>
                {(index % 2 === 0) && <FeatureBlockLR html={p.markdown.data.childMarkdownRemark.html} image={p.media.localFile.publicURL} />}
                {(index % 2 === 1) && <FeatureBlockRL html={p.markdown.data.childMarkdownRemark.html} image={p.media.localFile.publicURL} />}
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
    strapiFeaturePage(slug: { eq: $slug }) {
      slug
      metaTitle
      metaDescription
      banner {
        title
        description
      }
      introduction {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      part {
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
`

export default FeaturePage;
