import React, { Fragment, useState } from "react";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import { saasModernTheme } from "common/theme/saasModern";
import { ResetCSS } from "common/assets/css/style";
import {
  GlobalStyle,
  ContentWrapper,
} from "containers/SaasModern/sassModern.style";
import Navbar from "containers/SaasModern/Navbar";
import ResourcesLandingPaginated from "../containers/Custom/Resources/ResourcesLandingPaginated";
import ResourcesLandingPageCounter from "../containers/Custom/Resources/ResourcesLandingPageCounter";
import Footer from "containers/AgencyModern/Footer";
import { Helmet } from "react-helmet";
import Seo from "components/seo";
import { useStaticQuery, graphql } from "gatsby";
import BannerSection from "../containers/Custom/Database/Banner";

const Resources = () => {
  const [page, setPage] = useState(1);

  const ResourcesData = useStaticQuery(graphql`
    {
      allStrapiResource {
        nodes {
          id
          createdAt
          title
          slug
          metaDescription
          metaTitle
          pdf
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

  const allResourcesData = ResourcesData.allStrapiResource.nodes;

  // sort resources array by true last
  allResourcesData.sort((a, b) => {
    if (Number(a.pdf) == Number(b.pdf))
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    return Number(a.pdf) - Number(b.pdf);
  });

  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Seo
          title="Request the database of contacts and emails of various industries in USA & India | Clodura.AI"
          description="Reach out the top decision makers from different industries by downloading the database of contacts & emails of along with eBooks of tips."
          robots="index, follow"
          canonical="https://www.clodura.ai/database-center/"
        />
        <Helmet>
          <script type="text/javascript">
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
          
          <ResourcesLandingPaginated
            resources={allResourcesData.slice(
              (page - 1) * 10,
              (page - 1) * 10 + 10
            )}
          />
          <ResourcesLandingPageCounter
            page={page}
            setPage={setPage}
            totalPages={Math.ceil(allResourcesData.length / 10)}
          />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Resources;
