import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Sticky from 'react-stickynode';
import Navbar from 'containers/SaasModern/Navbar';
import Seo from 'components/seo';
import Footer from 'containers/AgencyModern/Footer';
import iconday from 'images/Group 198.jpg';
import Card from 'common/components/Card';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import { saasModernTheme } from 'common/theme/saasModern';
import {
    GlobalStyle,
    ContentWrapper,
} from 'containers/SaasModern/sassModern.style';
import VideosDetailWrapper from './videosTemplate.style';
import '../reset.css';
import Socialicon from '../../containers/Custom/Social';

const VideoTemplate = ({ data }) => {
    const salesvideoData = data.strapiSalesvideo;

    const { slug, markdown, title, date, link } = salesvideoData;

    const { html } = markdown.data.childMarkdownRemark;

    return (
        <ThemeProvider theme={saasModernTheme}>
            <Fragment>
                <Seo title={`Clodura.AI | ${slug}`} />

                <GlobalStyle />

                <ContentWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar />
                        </DrawerProvider>
                    </Sticky>
                    <Socialicon/>
                    <VideosDetailWrapper>
                        <Heading content={title} />
                        <Card>
                            <div className='icons'>
                                <Heading as="h5" content="CLODURA.AI" />
                                <Image
                                    src={iconday}
                                    alt="Icon"
                                    width="25px"
                                    height="25px"
                                />
                                <Text className="texttime" content={new Date(date).toDateString().substring(3)} />
                            </div>
                        </Card>
                        <iframe className="blog-post-video"width="560" height="315" src={link} allowfullscreen></iframe>
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                        
                    </VideosDetailWrapper>
                    <Footer />
                </ContentWrapper>
            </Fragment>
        </ThemeProvider>
    );
};

export const pageQuery = graphql`
    query ($slug: String) {
        strapiSalesvideo(slug: {eq: $slug}) {
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
`

export default VideoTemplate;
