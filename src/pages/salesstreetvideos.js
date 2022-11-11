import React, { Fragment ,useState} from 'react';
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
import VideosLanding from '../containers/Custom/Salesvideos';
import SalesVideoCounter from '../containers/Custom/Salesvideos/SalesVideoCounter';
import { Helmet } from 'react-helmet';

const SalesVideos = () => {
  const [page, setPage] = useState(1);
    const SalesVideosData = useStaticQuery(graphql`
  {
    allStrapiSalesvideo {
    nodes {
      id
      title
      slug
      link
      date
      metaDescription
      metaTitle
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

    const allSalesVideosData = SalesVideosData.allStrapiSalesvideo.nodes;

    // Sorts videos by date descending
    allSalesVideosData.sort((a, b) => { return new Date(b.date).getTime() - new Date(a.date).getTime() });

    return (
        <ThemeProvider theme={saasModernTheme}>
            <Fragment>
                <Seo title="Clodura.AI | Resources" />
                <ResetCSS />
                
                <GlobalStyle />
                <ContentWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar />
                        </DrawerProvider>
                    </Sticky>
                    <VideosLanding salesvideos={allSalesVideosData} />
                    {/* <SalesVideoCounter page={page} setPage={setPage} totalPages={Math.ceil((allSalesVideosData.length - 1) / 18)} /> */}
                    
                    <Footer />
                </ContentWrapper>
            </Fragment>
        </ThemeProvider>
    );
};
export default SalesVideos;
