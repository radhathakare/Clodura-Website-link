import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Sticky from 'react-stickynode';
import Banner from 'containers/AgencyDigital/Banner';
import Navbar from 'containers/SaasModern/Navbar';
import BlogDetailWrapper from './blogtemplate.style.js';
import Seo from 'components/seo';
import Footer from 'containers/AgencyModern/Footer';
import { saasModernTheme } from 'common/theme/saasModern';
import {
    GlobalStyle,
    ContentWrapper,
} from 'containers/SaasModern/sassModern.style';
import '../reset.css';
import Socialicon from '../../containers/Custom/Social/index.js';

const BlogTemplate = ({ data }) => {
    const blogData = data.strapiBlog;

    const { slug, seoTitle, seoDescription, markdown } = blogData;

    const { html } = markdown.data.childMarkdownRemark;

    return (
        <ThemeProvider theme={saasModernTheme}>
            <Fragment>
                <Seo title={seoTitle} description={seoDescription} robots="index, follow" canonical={`https://www.clodura.ai/blog/${slug}/`} />
                <GlobalStyle />
                <ContentWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar />
                        </DrawerProvider>
                    </Sticky>
                    <Banner {...blogData} blogDetail={true} />
                    <Socialicon/>
                    <BlogDetailWrapper>
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </BlogDetailWrapper>
                    <Footer />
                </ContentWrapper>
            </Fragment>
        </ThemeProvider>
    );
};

export const pageQuery = graphql`
    query ($slug: String) {
        strapiBlog(slug: {eq: $slug}) {
        id
        slug
        title
        seoTitle
        seoDescription
        date
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

export default BlogTemplate;
