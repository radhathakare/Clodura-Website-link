import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Sticky from 'react-stickynode';
import Banner from 'containers/AgencyDigital/BannerResource';
import Navbar from 'containers/SaasModern/Navbar';
import DownloadForm from 'containers/Custom/Resources/DownloadForm/index.js';
import ResourceDetailWrapper from './resourceTemplate.style.js';
import Seo from 'components/seo';
import Footer from 'containers/AgencyModern/Footer';
import { saasModernTheme } from 'common/theme/saasModern';
import {
    GlobalStyle,
    ContentWrapper,
} from 'containers/SaasModern/sassModern.style';
import '../reset.css';
import Socialicon from '../../containers/Custom/Social/index.js';

const ResourceTemplate = ({ data }) => {
    const resourceData = data.strapiResource;

    const { slug, metaTitle, metaDescription, markdown } = resourceData;

    const { html } = markdown.data.childMarkdownRemark;

    return (
        <ThemeProvider theme={saasModernTheme}>
            <Fragment>
                <Seo title={metaTitle} description={metaDescription} robots="index, follow" canonical={`https://www.clodura.ai/database-center/${slug}/`} />
                <Helmet>
                    <script type="text/javascript" >
                        {`var w = window; var p = w.location.protocol; if (p.indexOf("http") < 0) { p = "http" + ":"; } var d = document; var f = d.getElementsByTagName('script')[0], s = d.createElement('script'); s.type = 'text/javascript'; s.async = false; if (s.readyState) { s.onreadystatechange = function () { if (s.readyState == "loaded" || s.readyState == "complete") { s.onreadystatechange = null; try { loadwaprops('3ze41a8b11104434641b2af4119398d79e', '3z7095ec222050260309a35b46a5329e0e', '3za55c04fdf9cb34df731fa4b8afcfe35aca2ea2710a2e5843a0d34e51984bde7a', '3z9f5af3d4e245de73fc0ef1d57762b9be', 0.0); } catch (e) { } } }; } else { s.onload = function () { try { loadwaprops('3ze41a8b11104434641b2af4119398d79e', '3z7095ec222050260309a35b46a5329e0e', '3za55c04fdf9cb34df731fa4b8afcfe35aca2ea2710a2e5843a0d34e51984bde7a', '3z9f5af3d4e245de73fc0ef1d57762b9be', 0.0); } catch (e) { } }; }; s.src = p + '//ma.zoho.com/hub/js/WebsiteAutomation.js'; f.parentNode.insertBefore(s, f);`}
                    </script>
                </Helmet>
                <GlobalStyle />
                <ContentWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar />
                        </DrawerProvider>
                    </Sticky>
                    <Banner {...resourceData} blogDetail={true} html={html} />
                    <Socialicon/>
                    <ResourceDetailWrapper>
                        <DownloadForm file={resourceData.file.localFile.publicURL} resource={resourceData.title} />
                    </ResourceDetailWrapper>
                    <Footer />
                </ContentWrapper>
            </Fragment>
        </ThemeProvider>
    );
};

export const pageQuery = graphql`
    query ($slug: String) {
        strapiResource(slug: {eq: $slug}) {
        id
        slug
        title
        metaTitle
        metaDescription
        media {
            localFile {
                publicURL
            }
        }
        file {
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

ResourceTemplate.propTypes = {
    button: PropTypes.object,
};

ResourceTemplate.defaultProps = {
    button: {
        type: 'button',
        fontSize: '13px',
        fontWeight: '700',
        borderRadius: '4px',
        pl: '15px',
        pr: '15px',
        colors: 'tertiaryWithBg',
        minHeight: 'auto',
        height: '40px',
        mt: '20px',
    },
};

export default ResourceTemplate;