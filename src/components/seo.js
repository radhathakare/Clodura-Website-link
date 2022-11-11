import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function Seo({ description, lang, meta, robots, canonical, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `robots`,
                content: robots,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: "Clodura.AI",
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          >
            <link rel="canonical" href={canonical} />

            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-82171909-4"
            />
            <script>
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-82171909-4');`}
            </script>

            {/* <!-- Google Tag Manager --> */}
            <script>
              {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TMF8PCJ');
              `}
            </script>
            {/* <!-- End Google Tag Manager --> */}

            {/* Hotjar script */}
            <script>
              {`
              (
                function (h, o, t, j, a, r) {
                    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
                    h._hjSettings = { hjid: 3007141, hjsv: 6 };
                    a = o.getElementsByTagName('head')[0];
                    r = o.createElement('script'); r.async = 1;
                    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                    a.appendChild(r);
                }
              )(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
              `}
            </script>

            {/* Schema markup  */}
            <script type="application/ld+json">
              {`[
                  {
                  "@context":"https://schema.org",
                  "@type":"WebSite",
                  "@id":"https://www.clodura.ai#website",
                  "headline":"Clodura.AI | Online B2B Lead Generation Software For Sales Prospecting Platform",
                  "name":"Clodura.AI - An AI Powered Lead Generation Platform",
                  "description":"Clodura.AI is an AI-Powered Sales Prospecting Platform for Online B2B Lead Generation, Actionable Sales Intelligence, and Automated Sales Sequences.",
                  "url":"https://www.clodura.ai",
                  "potentialAction":
                  {
                  "@type":"SearchAction",
                  "target":"https://www.clodura.ai\/?s={search_term_string}",
                  "query-input":"required name=search_term_string"}
                  }
                  ,
                  {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Clodura.AI | An AI-powered Online B2B Lead Generation Software For Sales Prospecting",
                    "url": "https://www.clodura.ai/",
                    "logo": "https://www.clodura.ai/static/logo-016f7f22b37dca0c6dd8bdbd5f8ae130.png",
                    "sameAs": [
                      "https://www.facebook.com/Clodura/",
                      "https://www.linkedin.com/company/clodura-systems",
                      "https://twitter.com/Clodura",
                      "https://www.youtube.com/channel/UCozYAtSiPlYcDC85z94JTFw"
                    ]
                  }
                  ,
                  {
                    "@context": "https://schema.org/", 
                    "@type": "Product", 
                    "name": "Clodura.AI",
                    "image": "https://www.clodura.ai/static/logo-016f7f22b37dca0c6dd8bdbd5f8ae130.png",
                    "description": "​Clodura.AI is an integrated sales prospecting and sales engagement platform to help sales teams in finding decision-makers, getting real-time sales intelligence, sending outreach campaigns, and booking meetings, faster. We understand how frustrating and time-consuming it could be to navigate through company switchboards. Do not lose your precious selling time on dealing with gatekeepers and switchboards. Give your sales the chance to reach and connect with the decision-makers directly. Give yourself the power of direct dial phone numbers.  

                  Get access to more than 180 million verified B2B contacts and 19 million direct dials with actionable sales intelligence and automated sales sequence. 

                  Features:  

                  1. Comprehensive data of 15M+ Companies, 180M + Contacts + Emails, 95% Accuracy on Emails, 19M+ Direct Dials, Tech Stack Install Base of 15,000 products
                  2. Real-time Intelligence with over 25 customizable buying signal alerts, for opportunities recommendations on Target Universe, Access Attendees for various conferences
                  3. Automated Sales Email Cadence to generate more touch points & book more meetings 

                  Start Your Free Trial Today: https://app.clodura.ai/#/auth/register
                  Book A Demo: https://www.clodura.ai/request-demo/",
                    "brand": {
                      "@type": "Brand",
                      "name": "Clodura.AI"
                    }
                  }
                ]`}
            </script>
          </Helmet>
        );
      }}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default Seo;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
