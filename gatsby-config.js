require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: "the Debug Life",
    description: "Find the courage to be you and community will find you.",
    siteUrl: "https://thedebuglife.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/admin", "/admin/*", "/contact", "/contact/*"],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {},
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `theDebugLife`,
        short_name: `theDebugLife`,
        start_url: `/`,
        background_color: `#43A047`,
        theme_color: `#43A047`,
        display: `standalone`,
        icon: `src/img/logo.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /img/,
        },
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              related: false,
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              containerClass: "embedVideo-container",
            },
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1104271073837473",
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `thedebuglife`,
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.scss"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [
                    { "content:encoded": node.html },
                    { excerpt: node.frontmatter.excerpt },
                    { tags: node.frontmatter.tags?.join(",") || "" },
                    {
                      "media:content": [
                        {
                          _attr: {
                            medium: "image",
                            isDefault: "true",
                            expression: "full",
                            url:
                              site.siteMetadata.siteUrl +
                                node.frontmatter.featuredimage?.childImageSharp
                                  ?.fixed?.src || "",
                            src:
                              site.siteMetadata.siteUrl +
                                node.frontmatter.featuredimage?.childImageSharp
                                  ?.fixed?.src || "",
                          },
                        },
                      ],
                    },
                  ],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: {order: DESC, fields: [frontmatter___date]}
                  filter: {fields: {slug: {regex: "^/blog/"}}}
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      description
                      tags
                      featuredimage {
                        childImageSharp {
                          fixed {
                            src
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
            match: "^/blog/",
            output: "/rss.xml",
            title: "the Debug Life",
            custom_namespaces: {
              media: "http://search.yahoo.com/mrss/",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-JSVCY42JNJ"],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
