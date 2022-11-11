require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "integration",
      queryParams: {
        populate: {
          banner: {
            populate: {
              titles: "*",
            },
          },
          secondaryBanner: "*",
          card: {
            populate: {
              media: "*",
            },
          },
          twopart: {
            populate: {
              media: "*",
              markdown: "*",
            },
          },
        },
      },
    },
    {
      singularName: "feature-page",
      queryParams: {
        populate: {
          banner: "*",
          part: {
            populate: {
              media: "*",
              markdown: "*",
            },
          },
          introduction: "*",
        },
      },
    },
    {
      singularName: "video",
      queryParams: {
        populate: "*",
      },
    },
    {
      singularName: "salesvideo",
      queryParams: {
        populate: {
          media: "*",
          markdown: "*",
        },
      },
    },
    {
      singularName: "product-tutorial",
      queryParams: {
        populate: "*",
      },
    },
    {
      singularName: "resource",
      queryParams: {
        populate: "*",
      },
    },
    {
      singularName: "blog",
      queryParams: {
        populate: "*",
      },
    },
    {
      singularName: "customer",
      queryParams: {
        populate: "*",
      },
    },
    {
      singularName: "career-opening",
      queryParams: {
        populate: "*",
      },
    },
    {
      singularName: "platform-scrolling-image",
      queryParams: {
        populate: {
          part: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "platform-small-subbanner",
      queryParams: {
        populate: "*",
      },
    },
    {
      singularName: "pricing-plan",
      queryParams: {
        populate: {
          part: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "faq",
      queryParams: {
        populate: "*",
      },
    },
  ],
  singleTypes: [
    "home-main-banner",
    "home-client-logo",
    "platform-client-logo",
    {
      singularName: "boostb2b",
      queryParams: {
        populate: "*",
      },
    },
    {
      singularName: "pricing-banner",
      queryParams: {
        populate: "*",
      },
    },
    {
      singularName: "privacy-policy",
      queryParams: {
        populate: "*",
      },
    },
    {
      singularName: "home-subbanner",
      queryParams: {
        populate: {
          part: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "home-scrolling-video",
      queryParams: {
        populate: {
          part: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "home-scrolling-image",
      queryParams: {
        populate: {
          part: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "home-two-part",
      queryParams: {
        populate: {
          part: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "home-ceo-quote",
      queryParams: {
        populate: {
          part: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "data-main-banner",
      queryParams: {
        populate: {
          part: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "data-subbanner",
      queryParams: {
        populate: {
          part: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "data-statistic",
      queryParams: {
        populate: {
          part: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "data-scrolling-image",
      queryParams: {
        populate: {
          part: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "data-two-part",
      queryParams: {
        populate: "*",
      },
    },
    {
      singularName: "data-ceo-quote",
      queryParams: {
        populate: {
          part: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "platform-first-subbanner",
      queryParams: {
        populate: "*",
      },
    },
    {
      singularName: "platform-main-banner",
      queryParams: {
        populate: {
          part: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "pricing-advertisement",
      queryParams: {
        populate: {
          part: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "platform-ceo-quote",
      queryParams: {
        populate: {
          part: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "demo-main-banner",
      queryParams: {
        populate: {
          part: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "demo-quote",
      queryParams: {
        populate: "*",
      },
    },
    {
      singularName: "blog-banner",
      queryParams: {
        populate: "*",
      },
    },
    {
      singularName: "gdpr",
      queryParams: {
        markdown: "*",
      },
    },
    {
      singularName: "tand-c",
      queryParams: {
        markdown: "*",
      },
    },
  ],
  queryLimit: 5000,
};

module.exports = {
  siteMetadata: {
    title: `A react next landing page`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-transformer-remark",
    `gatsby-plugin-use-query-params`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `common`,
        path: `${__dirname}/src/common/assets/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/common/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Poppins:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-82171909-4", // Google Analytics / GA
          //     "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //     "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
        },
      },
    },
    {
      resolve: "gatsby-plugin-zeit-now",
      options: {
        globalHeaders: {
          "referrer-policy": "same-origin",
          "expect-ct": "max-age=604800, enforce",
          "strict-transport-security": "max-age=31536000; includeSubDomains",
          "x-frame-options": "DENY",
          "x-xss-protection": "1; mode=block",
          "x-content-type-options": "nosniff",
          "x-download-options": "noopen",
        },
      },
    },
    {
      resolve: `gatsby-plugin-redirect-to`,
      options: {
        force: true,
        isPermanent: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
