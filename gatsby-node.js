/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.onCreateWebpackConfig = ({ actions, stage, plugins, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });

  /**
   * MiniCssExtractPlugin css order warning
   * @link https://github.com/gatsbyjs/gatsby/discussions/30169#discussioncomment-621285
   */
  if (stage === 'build-javascript' || stage === 'develop') {
    const config = getConfig();

    const miniCss = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    );

    if (miniCss) {
      miniCss.options.ignoreOrder = true;
    }

    actions.replaceWebpackConfig(config);

    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: 'process/browser' })],
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const { createRedirect } = actions;
  const openingPost = path.resolve("./src/templates/OpeningDetail/index.js")

  const result = await graphql(
    `
      {
        allStrapiCareerOpening {
          nodes {
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )

    return
  }

  const openings = result.data.allStrapiCareerOpening.nodes

  if (openings.length > 0) {
    openings.forEach((opening) => {
      createPage({
        path: `/career/${opening.slug}/`,
        component: openingPost,
        context: {
          slug: opening.slug,
        },
      })
    })
  }

  const blogPostTemplate = require.resolve(`./src/templates/BlogTemplate/index.js`)

  const blogs = await graphql(`{
    allStrapiBlog {
      nodes {
        slug
      }
    }
  }`)

  if (blogs.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  blogs.data.allStrapiBlog.nodes.forEach((blog) => {
    createPage({
      path: `/blog/${blog.slug}/`,
      component: blogPostTemplate,
      context: {
        slug: blog.slug,
      },
    })
  })

  const resourcePostTemplate = require.resolve(`./src/templates/ResourceTemplate/index.js`)

  const resources = await graphql(`{
    allStrapiResource {
      nodes {
        slug
      }
    }
  }`)

  if (resources.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  resources.data.allStrapiResource.nodes.forEach((resource) => {
    createPage({
      path: `/database-center/${resource.slug}/`,
      component: resourcePostTemplate,
      context: {
        slug: resource.slug,
      },
    })
  })

  const videoPostTemplate = require.resolve(`./src/templates/VideosTemplate/index.js`)

  const videos = await graphql(`{
    allStrapiVideo {
      nodes {
        slug
      }
    }
  }`)

  if (videos.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  videos.data.allStrapiVideo.nodes.forEach((video) => {
    createPage({
      path: `/videos/${video.slug}/`,
      component: videoPostTemplate,
      context: {
        slug: video.slug,
      },
    })
  })

  const salesvideoPostTemplate = require.resolve(`./src/templates/SalesVideosTemplate/index.js`)

  const salesvideos = await graphql(`{
    allStrapiSalesvideo {
      nodes {
        slug
      }
    }
  }`)

  if (salesvideos.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  salesvideos.data.allStrapiSalesvideo.nodes.forEach((svideo) => {
    createPage({
      path: `/salesstreetvideos/${svideo.slug}/`,
      component: salesvideoPostTemplate,
      context: {
        slug: svideo.slug,
      },
    })
  })


  const featurePageTemplate = require.resolve(`./src/templates/FeatureTemplate/index.js`)

  const featurePages = await graphql(`{
    allStrapiFeaturePage {
      nodes {
        slug
      }
    }
  }`)

  if (featurePages.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  featurePages.data.allStrapiFeaturePage.nodes.forEach((page) => {
    createPage({
      path: `/${page.slug}/`,
      component: featurePageTemplate,
      context: {
        slug: page.slug,
      },
    })
  })

  const integrationPageTemplate = require.resolve(`./src/templates/IntegrationTemplate/index.js`)

  const integrationPages = await graphql(`{
    allStrapiIntegration {
      nodes {
        slug
      }
    }
  }`)

  if (integrationPages.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  integrationPages.data.allStrapiIntegration.nodes.forEach((page) => {
    createPage({
      path: `integrations/${page.slug}/`,
      component: integrationPageTemplate,
      context: {
        slug: page.slug,
      },
    })
  })



  createRedirect({
    "fromPath": "/product",
    "toPath": "/sales-prospecting-platform/",
    "statusCode": 301,
    "isPermanent": true
  });

  createRedirect({
    "fromPath": "/product/",
    "toPath": "/sales-prospecting-platform/",
    "statusCode": 301,
    "isPermanent": true
  });

  createRedirect({
    "fromPath": "/product/*",
    "toPath": "/sales-prospecting-platform/",
    "statusCode": 301,
    "isPermanent": true
  });

  createRedirect({
    "fromPath": "/sales-opportunity-triggers/",
    "toPath": "/sales-intelligence/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/insights-clodura-lead-generation-with-the-power-of-ai-2/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/videos-clodura-lead-generation-with-the-power-of-ai/",
    "toPath": "/videos/",
    "statusCode": 301,
    "isPermanent": true
  });


  createRedirect({
    "fromPath": "/resources",
    "toPath": "/database-center/",
    "statusCode": 301,
    "isPermanent": true
  });

  createRedirect({
    "fromPath": "/resources/",
    "toPath": "/database-center/",
    "statusCode": 301,
    "isPermanent": true
  });

  createRedirect({
    "fromPath": "/team-2/",
    "toPath": "/executives/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/career/",
    "toPath": "/career/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/list-of-top-enterprise-software-product-based-companies-in-us/",
    "toPath": "/database-center/list-of-top-enterprise-software-product-based-companies-in-us/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/list-of-top-it-services-companies-in-india/",
    "toPath": "/database-center/list-of-top-it-services-companies-in-india/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/list-of-top-software-product-based-companies-in-us-tier-i-5001-10000-employees/",
    "toPath": "/database-center/list-of-top-software-product-based-companies-in-us-tier-i-5001-10000-employees/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-effectively-use-linkedin-search-filters/",
    "toPath": "/videos/how-to-effectively-use-linkedin-search-filters/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-find-companies-with-need-for-your-products-or-services/",
    "toPath": "/videos/how-to-find-companies-with-need-for-your-products-or-services/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-generate-more-sales-meetings-using-hiring-area-indicators/",
    "toPath": "/videos/how-to-generate-more-sales-meetings-using-hiring-area-indicators/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/15-proven-tips-for-b2b-sales-pipeline-management/",
    "toPath": "/videos/15-proven-tips-for-b2b-sales-pipeline-management/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/20-b2b-cold-calling-tips%e2%80%afto-generate-more-meetings%e2%80%af/",
    "toPath": "/videos/20-b2b-cold-calling-tips-to-generate-more-meetings/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/8-common-sales-mistakes-sales-reps-make-how-to-fix-them/",
    "toPath": "/videos/8-common-sales-mistakes-sales-reps-make-how-to-fix-them/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/7-golden-tips-on-asking-right-sales-open-ended-questions-to-customers/",
    "toPath": "/videos/7-golden-tips-on-asking-right-sales-open-ended-questions-to-customers/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/11-greatest-question-to-ask-a-salesperson-in-an-interview/",
    "toPath": "/videos/11-greatest-question-to-ask-a-salesperson-in-an-interview/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-quickly-find-a-list-of-software-product-or-saas-companies/",
    "toPath": "/videos/how-to-quickly-find-a-list-of-software-product-or-saas-companies/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-get-more-email-replies-for-your-sales-campaigns-by-using-technographic-data/",
    "toPath": "/videos/how-to-get-more-email-replies-for-your-sales-campaigns-by-using-technographic-data/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/list-of-top-software-companies-in-us/",
    "toPath": "/database-center/list-of-top-software-companies-in-us/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/list-of-top-education-tech-companies-with-contacts-emails/",
    "toPath": "/database-center/list-of-top-education-tech-companies-with-contacts-emails/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/list-of-top-iot-software-companies-with-contacts-emails/",
    "toPath": "/database-center/list-of-top-iot-software-companies-with-contacts-emails/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/list-of-top-ecommerce-companies-with-contacts-emails/",
    "toPath": "/database-center/list-of-top-ecommerce-companies-with-contacts-emails/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/list-of-martech-companies-with-contacts-emails/",
    "toPath": "/database-center/list-of-martech-companies-with-contacts-emails/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/list-of-top-healthtech-companies-with-contacts-emails/",
    "toPath": "/database-center/list-of-top-healthtech-companies-with-contacts-emails/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/20-out-of-the-box-cold-calling-tips-to-generate-more-sales-meetings/",
    "toPath": "/database-center/20-out-of-the-box-cold-calling-tips-to-generate-more-sales-meetings/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/20-best-sales-closing-techniques-to-close-more-deals/",
    "toPath": "/database-center/20-best-sales-closing-techniques-to-close-more-deals/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/cold-calling-tips-tricks-to-find-phone-numbers-for-sales-prospecting/",
    "toPath": "/database-center/cold-calling-tips-tricks-to-find-phone-numbers-for-sales-prospecting/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/sales-pipeline-excel-template/",
    "toPath": "/database-center/sales-pipeline-excel-template/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-do-market-segmentation-5-most-effective-types-of-b2b-market-segmentation-strategies/",
    "toPath": "/blog/how-to-do-market-segmentation-5-most-effective-types-of-b2b-market-segmentation-strategies/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/ai-in-sales-how-artificial-intelligence-will-transform-b2b-sales-in-2020/",
    "toPath": "/blog/ai-in-sales-how-artificial-intelligence-will-transform-b2b-sales-in-2020/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/what-are-spam-traps-how-to-identify-and-avoid-them/",
    "toPath": "/blog/what-are-spam-traps-how-to-identify-and-avoid-them/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/benefits-of-direct-dial-numbers-for-cold-calling-and-how-to-find-direct-dials/",
    "toPath": "/blog/benefits-of-direct-dial-numbers-for-cold-calling-and-how-to-find-direct-dials/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-use-the-most-powerful-sales-prospecting-platform-for-lead-generation/",
    "toPath": "/blog/how-to-use-the-most-powerful-sales-prospecting-platform-for-lead-generation/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-leverage-artificial-intelligence-to-identify-sales-opportunities/",
    "toPath": "/blog/how-to-leverage-artificial-intelligence-to-identify-sales-opportunities/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/best-inside-sales-tools/",
    "toPath": "/blog/best-inside-sales-tools/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/b2b-sales-pipeline-management/",
    "toPath": "/blog/b2b-sales-pipeline-management/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/email-campaign-strategies/",
    "toPath": "/blog/email-campaign-strategies/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/generate-more-b2b-lead-generation/",
    "toPath": "/blog/generate-more-b2b-lead-generation/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/email-bounce-guide-different-types-of-email-bounces-and-how-to-fix-them/",
    "toPath": "/blog/email-bounce-guide-different-types-of-email-bounces-and-how-to-fix-them/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-build-your-b2b-contact-list-with-emails-and-direct-dials/",
    "toPath": "/blog/how-to-build-your-b2b-contact-list-with-emails-and-direct-dials/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/what-is-sales-intelligence-how-can-sales-teams-use-sales-intelligence-platforms-to-sell-more/",
    "toPath": "/blog/what-is-sales-intelligence-how-can-sales-teams-use-sales-intelligence-platforms-to-sell-more/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/disadvantages-of-using-email-marketing-tools/",
    "toPath": "/blog/disadvantages-of-using-email-marketing-tools/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-generate-marketing-qualified-leads-in-a-digital-world/",
    "toPath": "/blog/how-to-generate-marketing-qualified-leads-in-a-digital-world/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/gpct-new-bant-for-better-qualified-leads/",
    "toPath": "/blog/gpct-new-bant-for-better-qualified-leads/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/learn-more-about-tam/",
    "toPath": "/blog/learn-more-about-tam/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/b2b-marketing-strategies-to-use-during-the-coronavirus-covid-19-pandemic-outbreak/",
    "toPath": "/blog/b2b-marketing-strategies-to-use-during-the-coronavirus-covid-19-pandemic-outbreak/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/measuring-inside-sales-efficiency-and-performance/",
    "toPath": "/blog/measuring-inside-sales-efficiency-and-performance/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/maximize-inside-sales-results/",
    "toPath": "/blog/maximize-inside-sales-results/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/6-b2b-sales-pipeline-stages-every-sales-team-must-use-for-sales-pipeline-management/",
    "toPath": "/blog/6-b2b-sales-pipeline-stages-every-sales-team-must-use-for-sales-pipeline-management/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/b2b-lead-generation-challenges/",
    "toPath": "/blog/b2b-lead-generation-challenges/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/the-complete-guide-to-successful-b2b-sales-prospecting-steps-methods-tools-tips/",
    "toPath": "/blog/the-complete-guide-to-successful-b2b-sales-prospecting-steps-methods-tools-tips/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/smart-strategies-to-build-your-b2b-contact-database/",
    "toPath": "/blog/smart-strategies-to-build-your-b2b-contact-database/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-become-a-successful-salesperson/",
    "toPath": "/blog/how-to-become-a-successful-salesperson/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/7-incredibly-effective-marketing-hacks/",
    "toPath": "/blog/7-incredibly-effective-marketing-hacks/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/types-of-leads-how-to-have-a-steady-sales-pipeline/",
    "toPath": "/blog/types-of-leads-how-to-have-a-steady-sales-pipeline/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-leverage-the-infinite-power-of-ai-for-b2b-lead-generation/",
    "toPath": "/blog/how-to-leverage-the-infinite-power-of-ai-for-b2b-lead-generation/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/20-b2b-cold-calling-tips-to-generate-more-meetings/",
    "toPath": "/blog/20-b2b-cold-calling-tips-to-generate-more-meetings/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/best-sales-podcasts/",
    "toPath": "/blog/best-sales-podcasts/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/b2b-sales-strategies-to-use-during-the-coronavirus-covid-19-pandemic-outbreak/",
    "toPath": "/blog/b2b-sales-strategies-to-use-during-the-coronavirus-covid-19-pandemic-outbreak/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-use-linkedin-to-generate-more-revenue/",
    "toPath": "/blog/how-to-use-linkedin-to-generate-more-revenue/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/10-steps-of-sales-prospecting-process/",
    "toPath": "/blog/10-steps-of-sales-prospecting-process/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/9-most-important-inside-sales-kpis-metrics-that-every-remote-sales-team-should-measure-in-2020/",
    "toPath": "/blog/9-most-important-inside-sales-kpis-metrics-that-every-remote-sales-team-should-measure-in-2020/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/5-steps-to-craft-a-highly-effective-sales-pitch-with-examples/",
    "toPath": "/blog/5-steps-to-craft-a-highly-effective-sales-pitch-with-examples/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/cold-calling-tips-and-tricks-your-guide-to-finding-the-ideal-phone-numbers/",
    "toPath": "/blog/cold-calling-tips-and-tricks-your-guide-to-finding-the-ideal-phone-numbers/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/10-sales-prospecting-software-tools-to-manage-remote-sales-in-2021/",
    "toPath": "/blog/10-sales-prospecting-software-tools-to-manage-remote-sales-in-2021/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/clodura-ai-a-best-zoominfo-alternative/",
    "toPath": "/blog/clodura-ai-a-best-zoominfo-alternative/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/gpct-or-bant-how-to-qualify-sales-leads-in-2020/",
    "toPath": "/blog/gpct-or-bant-how-to-qualify-sales-leads-in-2020/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-create-your-ideal-customer-profile-for-sales-outreach/",
    "toPath": "/blog/how-to-create-your-ideal-customer-profile-for-sales-outreach/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/using-natural-language-processing-to-identify-prospects/",
    "toPath": "/blog/using-natural-language-processing-to-identify-prospects/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-build-a-database-of-customer/",
    "toPath": "/blog/how-to-build-a-database-of-customer/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/creating-a-b2b-marketing-database-for-sales-growth-from-scratch/",
    "toPath": "/blog/creating-a-b2b-marketing-database-for-sales-growth-from-scratch/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/4-crucial-reasons-to-use-an-ai-lead-generation-software/",
    "toPath": "/blog/4-crucial-reasons-to-use-an-ai-lead-generation-software/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-get-more-b2b-sales-leads-faster/",
    "toPath": "/blog/how-to-get-more-b2b-sales-leads-faster/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/7-simple-steps-for-b2b-marketing-beginners/",
    "toPath": "/blog/7-simple-steps-for-b2b-marketing-beginners/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/clodura-ai-the-best-seamless-ai-alternative-for-your-sales-and-marketing-needs/",
    "toPath": "/blog/clodura-ai-the-best-seamless-ai-alternative-for-your-sales-and-marketing-needs/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-integrate-salesforce-crm-to-clodura-ai-sales-intelligence-software/",
    "toPath": "/blog/how-to-integrate-salesforce-crm-to-clodura-ai-sales-intelligence-software/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/win-more-deals-by-tracking-3-b2b-buying-signals/",
    "toPath": "/blog/win-more-deals-by-tracking-3-b2b-buying-signals/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/top-women-in-sales/",
    "toPath": "/blog/top-women-in-sales/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/sales-networking-tips-how-to-do-business-networking-for-sales-remotely-in-2020/",
    "toPath": "/blog/sales-networking-tips-how-to-do-business-networking-for-sales-remotely-in-2020/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/the-complete-guide-to-understand-and-build-a-sales-funnel-from-scratch/",
    "toPath": "/blog/the-complete-guide-to-understand-and-build-a-sales-funnel-from-scratch/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/the-complete-guide-to-sales-pipeline-management/",
    "toPath": "/blog/the-complete-guide-to-sales-pipeline-management/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/top-9-b2b-sales-challenges-faced-by-salespeople-in-2020-and-how-to-overcome-them/",
    "toPath": "/blog/top-9-b2b-sales-challenges-faced-by-salespeople-in-2020-and-how-to-overcome-them/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/smarketing-a-guide-to-build-a-winning-b2b-sales-marketing-alignment/",
    "toPath": "/blog/smarketing-a-guide-to-build-a-winning-b2b-sales-marketing-alignment/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/the-best-b2b-sales-prospecting-methods-strategies-and-tools-to-close-more-deals/",
    "toPath": "/blog/the-best-b2b-sales-prospecting-methods-strategies-and-tools-to-close-more-deals/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-prospects-for-sales-lead/",
    "toPath": "/blog/how-to-prospects-for-sales-lead/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-is-clodura-different/",
    "toPath": "/blog/how-is-clodura-different/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/artificial-intelligence-using-machine-learning/",
    "toPath": "/blog/artificial-intelligence-using-machine-learning/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-close-a-deal-20-best-sales-closing-techniques-to-close-more-deals/",
    "toPath": "/blog/how-to-close-a-deal-20-best-sales-closing-techniques-to-close-more-deals/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/guide-to-handling-objections-in-sales-tips-on-overcoming-the-most-common-sales-objections/",
    "toPath": "/blog/guide-to-handling-objections-in-sales-tips-on-overcoming-the-most-common-sales-objections/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/strategies-for-maintaining-lead-quality-in-your-database/",
    "toPath": "/blog/strategies-for-maintaining-lead-quality-in-your-database/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/value-proposition-meaning-definition-explanation-examples/",
    "toPath": "/blog/value-proposition-meaning-definition-explanation-examples/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/escalating-sales-through-artificial-intelligence-and-machine-learning/",
    "toPath": "/blog/escalating-sales-through-artificial-intelligence-and-machine-learning/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/email-strategies-to-increase-your-email-reply-rates/",
    "toPath": "/blog/email-strategies-to-increase-your-email-reply-rates/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/define-your-go-to-market-strategy/",
    "toPath": "/blog/define-your-go-to-market-strategy/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-calculate-sales-revenue/",
    "toPath": "/blog/how-to-calculate-sales-revenue/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/most-common-sales-mistakes-sales-reps-make-how-to-avoid-them/",
    "toPath": "/blog/most-common-sales-mistakes-sales-reps-make-how-to-avoid-them/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/benefits-of-aligning-your-sales-and-marketing-teams/",
    "toPath": "/blog/benefits-of-aligning-your-sales-and-marketing-teams/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-identify-the-right-companies/",
    "toPath": "/blog/how-to-identify-the-right-companies/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-sales-automation-software-is-changing-how-we-work/",
    "toPath": "/blog/how-sales-automation-software-is-changing-how-we-work/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/consultative-selling-101-7-ways-to-successfully-apply-consultative-sales-approach/",
    "toPath": "/blog/consultative-selling-101-7-ways-to-successfully-apply-consultative-sales-approach/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-build-your-email-contact-list/",
    "toPath": "/blog/how-to-build-your-email-contact-list/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/the-ultimate-guide-to-qualify-sales-leads/",
    "toPath": "/blog/the-ultimate-guide-to-qualify-sales-leads/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/pack-your-sales-pipeline-with-new-innovation-in-sales/",
    "toPath": "/blog/pack-your-sales-pipeline-with-new-innovation-in-sales/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/impactful-open-ended-questions-for-sales-with-examples/",
    "toPath": "/blog/impactful-open-ended-questions-for-sales-with-examples/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/email-marketing-and-its-importance/",
    "toPath": "/blog/email-marketing-and-its-importance/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/8-businesses-recording-growth-amidst-the-coronavirus-outbreak/",
    "toPath": "/blog/8-businesses-recording-growth-amidst-the-coronavirus-outbreak/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/best-practices-to-create-a-killer-sales-playbook-template/",
    "toPath": "/blog/best-practices-to-create-a-killer-sales-playbook-template/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/bant-sales-the-top-questions-you-need-to-ask-to-qualify-prospects-in-2020/",
    "toPath": "/blog/bant-sales-the-top-questions-you-need-to-ask-to-qualify-prospects-in-2020/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/best-sales-quotes-for-sales-team-motivation/",
    "toPath": "/blog/best-sales-quotes-for-sales-team-motivation/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/top-11-interview-questions-for-sales/",
    "toPath": "/blog/top-11-interview-questions-for-sales/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/bant-analysis-methodology-behind-sales-achievement/",
    "toPath": "/blog/bant-analysis-methodology-behind-sales-achievement/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-revive-dead-sales-leads-and-move-stalled-sales-deals/",
    "toPath": "/blog/how-to-revive-dead-sales-leads-and-move-stalled-sales-deals/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/email-marketing-and-its-importance-part-2/",
    "toPath": "/blog/email-marketing-and-its-importance-part-2/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/sales-negotiation-training-14-effective-sales-negotiation-skills-for-sales-professionals/",
    "toPath": "/blog/sales-negotiation-training-14-effective-sales-negotiation-skills-for-sales-professionals/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/signs-of-burnout-at-work-for-your-sales-team-and-what-to-do-about-them/",
    "toPath": "/blog/signs-of-burnout-at-work-for-your-sales-team-and-what-to-do-about-them/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/the-power-of-email-automation-and-why-your-business-needs-it/",
    "toPath": "/blog/the-power-of-email-automation-and-why-your-business-needs-it/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/8-habits-of-a-successful-sales-guy/",
    "toPath": "/blog/8-habits-of-a-successful-sales-guy/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/10-essential-skills-every-field-sales-representative-must-have-in-2020/",
    "toPath": "/blog/10-essential-skills-every-field-sales-representative-must-have-in-2020/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-sales-intelligence-can-reduce-manual-sales-efforts/",
    "toPath": "/blog/how-sales-intelligence-can-reduce-manual-sales-efforts/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/cold-email-hacks-how-to-write-the-ideal-cold-sales-email-to-generate-more-meetings/",
    "toPath": "/blog/cold-email-hacks-how-to-write-the-ideal-cold-sales-email-to-generate-more-meetings/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/meet-at-dreamforce-event-2019-2/",
    "toPath": "/blog/meet-at-dreamforce-event-2019-2/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-sales-automation-can-affect-your-roi/",
    "toPath": "/blog/how-sales-automation-can-affect-your-roi/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/10-essential-skills-every-inside-sales-representative-must-have-in-2020/",
    "toPath": "/blog/10-essential-skills-every-inside-sales-representative-must-have-in-2020/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/lead-generation-tools-and-sales-automation/",
    "toPath": "/blog/lead-generation-tools-and-sales-automation/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/marketing-automation-vs-sales-automation/",
    "toPath": "/blog/marketing-automation-vs-sales-automation/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/must-know-excel-tips-for-every-salesperson/",
    "toPath": "/blog/must-know-excel-tips-for-every-salesperson/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-write-personalized-emails-to-your-prospects/",
    "toPath": "/blog/how-to-write-personalized-emails-to-your-prospects/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/inside-sales-automation/",
    "toPath": "/blog/inside-sales-automation/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/request-demo/",
    "toPath": "/request-demo/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/zoominfo-alternative/",
    "toPath": "/zoominfo-alternative/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/boost-b2b-sales-qualified-leads/",
    "toPath": "/boost-b2b-sales-qualified-leads/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/gdpr/",
    "toPath": "/gdpr/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/privacy-policy/",
    "toPath": "/privacy-policy/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/request-pricing/",
    "toPath": "/pricing/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/call-me-back/",
    "toPath": "/request-demo/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/speak-to-us-thank-you/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/thank-you/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/shufflehound_footer/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/pricing-3/",
    "toPath": "/pricing/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/thank-you-for-requesting-demo/",
    "toPath": "/thank-you-for-requesting-demo/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/cta/start-free-trial/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/demo/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/cta/speak-to-us/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/confirm-subscription/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/cta/free-trial/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/about-us-clodura-ai/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/page/2/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/page/3/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/page/4/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/page/5/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/page/6/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/page/7/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/page/8/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/page/9/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/page/10/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/features-of-5-0/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/ai-powered-sales-prospecting/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/ai-powered-growth-marketing/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/tag/sales-intelligence/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/tag/nasscom/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/tag/nasscom-event-2022/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/tag/nasscom-tech-innovation-conclave/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/tag/nasscom-tech-innovation-conclave-ntic-2022/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/tag/nasscom-tech-innovation-conclave-ntic-2022-participant/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/tag/nasscom-tech-innovation-event/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/tag/ntic-2022/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/tag/strategies-to-get-past-the-gatekeeper/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/tag/alternatives-to-zoominfo/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/tag/best-sales-intelligence-software/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/tag/zoominfo-alternative/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/tag/zoominfo-competitors/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/inbound/o403n7noi/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/inbound/9iudo5n/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/cta/clodura-blank/?wp-cta-variation-id=0",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/inbound/9il0wobodnn/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/cta/clodura-blank/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/shufflehound_header/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/cta/book-a-demo/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/cta/start-your-free-trial3/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/cta/book-a-clodura-demo/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/cta/book-demo/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/pricing-2/",
    "toPath": "/pricing/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/clodura-5-0-get-notification/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/conference-attendee-list/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/resources-clodura-ai/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/test-lp-for-demo/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/videos-2/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/home-new/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/blogs/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/blogs/page/2/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/blogs/page/3/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/blogs/page/4/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/blogs/page/5/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/blogs/page/6/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/blogs/page/7/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/blogs/page/8/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/blogs/page/9/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/blogs/page/10/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/0/page/4/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/benefits-of-direct-dial-numbers-for-cold-calling-and-how-to-find-direct-dials/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/author/kapil-khangaonkar/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/artificial-intelligence-using-machine-learning/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/yne/chapter-11-introduction-to-genetics-vocabulary-review-pdf.html",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/9/?search=%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0&tdfk=%E6%84%9B%E5%AA%9B%E7%9C%8C&namae=%E5%90%8D%E5%89%8D",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/10/?search=%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0&tdfk=%E6%84%9B%E5%AA%9B%E7%9C%8C&namae=%E5%90%8D%E5%89%8D",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/the-impact-of-bad-data-on-b2b-sales-marketing-and-how-to-fix-it/amp/?utm_source=hootsuite&utm_medium=social&utm_campaign=baddata",
    "toPath": "/blog/the-impact-of-bad-data-on-b2b-sales-marketing-and-how-to-fix-it/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/wp-content/uploads/2019/06/How-to-Close-a-Deal-%E2%80%93-20-Best-Sales-Closing-Techniques-to-Close-More-Deals.pdf",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/11/?amp=1&s",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/list-of-martech-companies-with-contacts-emails/amp/",
    "toPath": "/database-center/list-of-martech-companies-with-contacts-emails/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/wp-content/uploads/2019/06/How-to-Close-a-Deal-–-20-Best-Sales-Closing-Techniques-to-Close-More-Deals.pdf",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/b2b-data-lists/amp/",
    "toPath": "/b2b-data-lists/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/sales-pipeline-excel-template/amp/",
    "toPath": "/database-center/sales-pipeline-excel-template/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/10/?search=%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0&tdfk=%E6%84%9B%E5%AA%9B%E7%9C%8C&namae=%E5%90%8D%E5%89%8D",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/9/?search=%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0&tdfk=%E6%84%9B%E5%AA%9B%E7%9C%8C&namae=%E5%90%8D%E5%89%8D",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/8/?search=%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0&tdfk=%E6%84%9B%E5%AA%9B%E7%9C%8C&namae=%E5%90%8D%E5%89%8D",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/0/page/8/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/things-to-learn-about-a-company-before-drafting-an-e-mail/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/7/?action=yith-woocompare-add-product&038;id=99",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/page/3/?c=1/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/page/5/?c=1/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/page/8/?c=1/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/uncategorized/amp/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/5-steps-to-craft-a-highly-effective-sales-pitch-with-examples/feed/",
    "toPath": "/blog/5-steps-to-craft-a-highly-effective-sales-pitch-with-examples/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/search/label/ル・クルーゼ 炊飯 4合/feed/rss2/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/search/label/スイーツ/feed/rss2/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/page/7/?c=1",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/best-inside-sales-tools/amp/?utm_source=hootsuite&utm_medium=social_media&utm_campaign=best-inside-sales-tools",
    "toPath": "/blog/best-inside-sales-tools/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/benefits-of-direct-dial-numbers-for-cold-calling-and-how-to-find-direct-dials/amp/",
    "toPath": "/blog/benefits-of-direct-dial-numbers-for-cold-calling-and-how-to-find-direct-dials/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/4/?action=repository_opensearch&index_id=471&count=50&order=17&pn=1",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/product/amp/?ref=producthunt",
    "toPath": "/sales-prospecting-platform/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/4/?from=mobbydick-theshop-jp&p=shop",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-revive-dead-sales-leads-and-move-stalled-sales-deals/amp/",
    "toPath": "/blog/how-to-revive-dead-sales-leads-and-move-stalled-sales-deals/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/10-steps-of-sales-prospecting-process/?utm_source=hootsuite&utm_medium=social&utm_campaign=sales_prospecting",
    "toPath": "/blog/10-steps-of-sales-prospecting-process/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/sales-cadence/amp/",
    "toPath": "/sales-cadence/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/technology-install-base-data",
    "toPath": "/technology-install-base-data/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/b2b-sales-strategies-to-use-during-the-coronavirus-covid-19-pandemic-outbreak/amp/",
    "toPath": "/blog/b2b-sales-strategies-to-use-during-the-coronavirus-covid-19-pandemic-outbreak/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/author/rohit-roy/page/4/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-use-linkedin-to-generate-more-revenue/amp/",
    "toPath": "/blog/how-to-use-linkedin-to-generate-more-revenue/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/features-of-5-0/amp/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/2/?amp=1&s=it",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/4/?from=loufreasy-official-ec&p=shop",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/most-common-sales-mistakes-sales-reps-make-how-to-avoid-them/amp/",
    "toPath": "/blog/most-common-sales-mistakes-sales-reps-make-how-to-avoid-them/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/most-common-sales-mistakes-sales-reps-make-how-to-avoid-them",
    "toPath": "/blog/most-common-sales-mistakes-sales-reps-make-how-to-avoid-them/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/best-inside-sales-tools/amp/?utm_source=hootsuite&utm_medium=inside_sales_tools&utm_campaign=social_media",
    "toPath": "/blog/best-inside-sales-tools/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/page/6/?c=1/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/4-crucial-reasons-to-use-an-ai-lead-generation-software/amp/",
    "toPath": "/blog/4-crucial-reasons-to-use-an-ai-lead-generation-software/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/5/?from=love0811&p=shop",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/yne/mota-hone-ke-capsule-name-price-in-pakistan.html",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-close-more-deals-with-sales-intelligence/amp/",
    "toPath": "/blog/how-to-close-more-deals-with-sales-intelligence/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/10-essential-skills-every-inside-sales-representative-must-have-in-2020/amp/",
    "toPath": "/blog/10-essential-skills-every-inside-sales-representative-must-have-in-2020/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/privacy-policy/feed/",
    "toPath": "/privacy-policy/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/10-essential-skills-every-field-sales-representative-must-have-in-2020/amp/",
    "toPath": "/blog/10-essential-skills-every-field-sales-representative-must-have-in-2020/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/12/?amp=1&s",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/list-of-top-it-services-companies-in-india/?utm_source=hootsuite&utm_medium=social_media&utm_campaign=indian_IT_services_companies",
    "toPath": "/database-center/list-of-top-it-services-companies-in-india/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/b2b-sales-",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/3/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/tag/nasscom-tech-innovation-conclave-ntic-2022/feed/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/8/?m=search&key=%E9%98%AA%E7%A5%9E",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/amp/page/3/?title=%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8&action=info",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/author/kapil-khangaonkar/page/4/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-do-market-segmentation-5-most-effective-types-of-b2b-market-segmentation-strategies/?fbclid=IwAR1na8SZwdWfaEooYe-_Vo9-x-PLseeVTPUx6tZr0oSE910np6JxQIFz4Vc/",
    "toPath": "/blog/how-to-do-market-segmentation-5-most-effective-types-of-b2b-market-segmentation-strategies/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/3-incredible-benefits-of-direct-dial-numbers/amp/",
    "toPath": "/blog/3-incredible-benefits-of-direct-dial-numbers/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/top-women-in-sales/amp/?utm_source=hootsuite&utm_medium=social&utm_campaign=womeninsales",
    "toPath": "/blog/top-women-in-sales/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/top-women-in-sales/?utm_source=hootsuite&utm_medium=social&utm_campaign=womeninsales",
    "toPath": "/blog/top-women-in-sales/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/top-women-in-sales/amp/",
    "toPath": "/blog/top-women-in-sales/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-build-your-email-contact-list/feed/",
    "toPath": "/blog/how-to-build-your-email-contact-list/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/pricing-3/amp/",
    "toPath": "/pricing/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/0/page/9/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/sales-opportunity-triggers/amp/",
    "toPath": "/sales-intelligence/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/list-of-top-it-services-companies-in-india/amp/",
    "toPath": "/database-center/list-of-top-it-services-companies-in-india/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/list-of-top-enterprise-software-product-based-companies-in-us/amp/",
    "toPath": "/database-center/list-of-top-enterprise-software-product-based-companies-in-us/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-do-market-segmentation-5-most-effective-types-of-b2b-market-segmentation-strategies/amp/",
    "toPath": "/blog/how-to-do-market-segmentation-5-most-effective-types-of-b2b-market-segmentation-strategies/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/author/kapil-khangaonkar/page/6/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/the-complete-guide-to-sales-pipeline-management/?utm_source=hootsuite&utm_medium=social_media&utm_campaign=sales_pipeline_management",
    "toPath": "/blog/the-complete-guide-to-sales-pipeline-management/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/email-bounce-guide-different-types-of-email-bounces-and-how-to-fix-them/amp/",
    "toPath": "/blog/email-bounce-guide-different-types-of-email-bounces-and-how-to-fix-them/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/pricing/amp/",
    "toPath": "/pricing/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/the-complete-guide-to-successful-b2b-sales-prospecting-steps-methods-tools-tips/?utm_source=hootsuite&utm_medium=social&utm_campaign=sales_prospecting_steps_tips",
    "toPath": "/blog/the-complete-guide-to-successful-b2b-sales-prospecting-steps-methods-tools-tips/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/top-9-b2b-sales-challenges-faced-by-salespeople-in-2020-and-how-to-overcome-them/amp/",
    "toPath": "/blog/top-9-b2b-sales-challenges-faced-by-salespeople-in-2020-and-how-to-overcome-them/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/6-b2b-sales-pipeline-stages-every-sales-team-must-use-for-sales-pipeline-management/amp/?fbclid=IwAR1kdvCtND_LqOE2V_XQcMHyPHCGTV0_t3ElFjUJ8p8GbdGWwoSsXoBIwe8",
    "toPath": "/blog/6-b2b-sales-pipeline-stages-every-sales-team-must-use-for-sales-pipeline-management/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/list-of-top-education-tech-companies-with-contacts-emails/amp/",
    "toPath": "/database-center/list-of-top-education-tech-companies-with-contacts-emails/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/contact-us",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/contact-us/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/10-sales-prospecting-software-tools-to-manage-remote-sales-in-2020/amp/",
    "toPath": "/blog/10-sales-prospecting-software-tools-to-manage-remote-sales-in-2021/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/ai-powered-growth-marketing/?amp",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/6-b2b-sales-pipeline-stages-every-sales-team-must-use-for-sales-pipeline-management/?fbclid=IwAR1kdvCtND_LqOE2V_XQcMHyPHCGTV0_t3ElFjUJ8p8GbdGWwoSsXoBIwe8/",
    "toPath": "/blog/6-b2b-sales-pipeline-stages-every-sales-team-must-use-for-sales-pipeline-management/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/0/page/6/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/10-sales-prospecting-software-tools-to-manage-remote-sales-in-2020/",
    "toPath": "/blog/10-sales-prospecting-software-tools-to-manage-remote-sales-in-2021/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-is-clodura-different/amp/",
    "toPath": "/blog/how-is-clodura-different/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/best-inside-sales-tools/?utm_source=hootsuite&utm_medium=inside_sales_tools&utm_campaign=social_media",
    "toPath": "/blog/best-inside-sales-tools/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/uncategorized/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/yne/does-samsung-970-evo-plus-need-a-heatsink.html",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/the-best-b2b-sales-prospecting-methods-strategies-and-tools-to-close-more-deals/amp/",
    "toPath": "/blog/the-best-b2b-sales-prospecting-methods-strategies-and-tools-to-close-more-deals/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-develop-your-ideal-customer-profile/amp/",
    "toPath": "/blog/how-to-develop-your-ideal-customer-profile/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/email-strategies-to-increase-your-email-reply-rates-2/",
    "toPath": "/blog/email-strategies-to-increase-your-email-reply-rates/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/gpct-new-bant-for-better-qualified-leads/amp/",
    "toPath": "/blog/gpct-new-bant-for-better-qualified-leads/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/best-inside-sales-tools/amp/",
    "toPath": "/blog/best-inside-sales-tools/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/team/",
    "toPath": "/executives/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/wp-json/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/10-sales-prospecting-software-tools-to-manage-remote-sales-in-2021/amp/",
    "toPath": "/blog/10-sales-prospecting-software-tools-to-manage-remote-sales-in-2021/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/10-steps-of-sales-prospecting-process/amp/?utm_source=hootsuite&utm_medium=social&utm_campaign=sales_prospecting",
    "toPath": "/blog/10-steps-of-sales-prospecting-process/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/8/?title=%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8&action=info",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-quickly-find-a-list-of-software-product-or-saas-companies/amp/",
    "toPath": "/blog/how-to-quickly-find-a-list-of-software-product-or-saas-companies/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/artificial-intelligence-using-machine-learning/amp/",
    "toPath": "/blog/artificial-intelligence-using-machine-learning/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/resources/20-b2b-cold-calling-tips-to-generate-more-meetings/",
    "toPath": "/database-center/20-out-of-the-box-cold-calling-tips-to-generate-more-sales-meetings/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/the-complete-guide-to-successful-b2b-sales-prospecting-steps-methods-tools-tips/amp/",
    "toPath": "/blog/the-complete-guide-to-successful-b2b-sales-prospecting-steps-methods-tools-tips/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/the-complete-guide-to-sales-pipeline-management/amp/",
    "toPath": "/blog/the-complete-guide-to-sales-pipeline-management/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/6/?from=loufreasy-official-ec&p=shop",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-get-more-email-replies-for-your-sales-campaigns-by-using-technographic-data/amp/?utm_source=hootsuite&utm_medium=social_media&utm_campaign=technographic_data",
    "toPath": "/blog/how-to-get-more-email-replies-for-your-sales-campaigns-by-using-technographic-data/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/10/?m=search&key=%E9%98%AA%E7%A5%9E",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/10-steps-of-sales-prospecting-process/amp/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/10/?from=love0811&p=shop",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-get-more-email-replies-for-your-sales-campaigns-by-using-technographic-data/amp/",
    "toPath": "/blog/how-to-get-more-email-replies-for-your-sales-campaigns-by-using-technographic-data/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/b2b-sales-pipeline-management/amp/",
    "toPath": "/blog/b2b-sales-pipeline-management/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/bant-sales-the-top-questions-you-need-to-ask-to-qualify-prospects-in-2020/amp/",
    "toPath": "/blog/bant-sales-the-top-questions-you-need-to-ask-to-qualify-prospects-in-2020/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/integrations/?amp",
    "toPath": "/integrations/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/how-to-do-market-segmentation-5-most-effective-types-of-b2b-market-segmentation-strategies/?utm_source=hootsuite&utm_medium=social&utm_campaign=market_segmentation",
    "toPath": "/blog/how-to-do-market-segmentation-5-most-effective-types-of-b2b-market-segmentation-strategies/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/6/?from=love0811&p=shop",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/b2b-sales-pipeline-management",
    "toPath": "/blog/b2b-sales-pipeline-management/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/6-b2b-sales-pipeline-stages-every-sales-team-must-use-for-sales-pipeline-management/?utm_source=hootsuite&utm_medium=social_media&utm_campaign=sales_pipeline_stages",
    "toPath": "/blog/6-b2b-sales-pipeline-stages-every-sales-team-must-use-for-sales-pipeline-management/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/9-most-important-inside-sales-kpis-metrics-that-every-remote-sales-team-should-measure-in-2020/amp/",
    "toPath": "/blog/9-most-important-inside-sales-kpis-metrics-that-every-remote-sales-team-should-measure-in-2020/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/10/?from=mobbydick-theshop-jp&p=shop",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/best-sales-podcasts/?utm_source=hootsuite&utm_medium=social_media&utm_campaign=best_sales_podcasts",
    "toPath": "/blog/best-sales-podcasts/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/9-most-important-inside-sales-kpis-metrics-that-every-remote-sales-team-should-measure-in-2020/?utm_source=hootsuite&utm_medium=social_media&utm_campaign=inside_sales_metrics/",
    "toPath": "/blog/9-most-important-inside-sales-kpis-metrics-that-every-remote-sales-team-should-measure-in-2020/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/6-b2b-sales-pipeline-stages-every-sales-team-must-use-for-sales-pipeline-management/amp/",
    "toPath": "/blog/6-b2b-sales-pipeline-stages-every-sales-team-must-use-for-sales-pipeline-management/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/6/?search=%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0&tdfk=%E6%84%9B%E5%AA%9B%E7%9C%8C&namae=%E5%90%8D%E5%89%8D",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/4/?m=search&key=%E9%98%AA%E7%A5%9E",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/videos/",
    "toPath": "/videos/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/best-sales-quotes-for-sales-team-motivation/amp/",
    "toPath": "/blog/best-sales-quotes-for-sales-team-motivation/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/category/0/page/10/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/best-sales-podcasts/amp/",
    "toPath": "/blog/best-sales-podcasts/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/sales-sequences/",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/the-complete-guide-to-understand-and-build-a-sales-funnel-from-scratch/amp/",
    "toPath": "/blog/the-complete-guide-to-understand-and-build-a-sales-funnel-from-scratch/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/best-sales-podcasts/?utm_source=hootsuite&utm_medium=sales_podcasts&utm_campaign=social_media",
    "toPath": "/blog/best-sales-podcasts/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/sales-cadence",
    "toPath": "/sales-cadence/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/cold-calling-tips-and-tricks-your-guide-to-finding-the-ideal-phone-numbers/amp/",
    "toPath": "/blog/cold-calling-tips-and-tricks-your-guide-to-finding-the-ideal-phone-numbers/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/must-know-excel-tips-for-every-salesperson/amp/",
    "toPath": "/blog/must-know-excel-tips-for-every-salesperson/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/yne/bow-wow-wow-yippy-yo-yippy-yay-original.html",
    "toPath": "/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/page/11/?s",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
  createRedirect({
    "fromPath": "/blog/tag/sql/amp/",
    "toPath": "/blog/",
    "statusCode": 301,
    "isPermanent": true
  });
}
