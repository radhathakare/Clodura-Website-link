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
import ProductTutorialsLanding from '../containers/Custom/ProductTutorials';
import { Helmet } from 'react-helmet';

const ProductTutorials = () => {
  const ProductTutorialsData = useStaticQuery(graphql`
  {
    allStrapiProductTutorial {
        nodes {
            title 
            media {
                localFile {
                    publicURL
                }   
            }
            link
      }
    }
  }
  `);

  const allProductTutorialsData = ProductTutorialsData.allStrapiProductTutorial.nodes;

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo title="Videos of Our Product Tutorials @Clodura.AL" description="Here we have mentioned how to use new software product tutorials | Clodura AI - sales prospecting software" robots="index, follow" canonical="https://www.clodura.ai/clodura-ai-product-tutorials/" />
        <ResetCSS />
        
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ProductTutorialsLanding productTutorials={allProductTutorialsData} />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default ProductTutorials;
