module.exports = {
  siteMetadata: {
    siteTitle: `Overio`,
    siteTitleAlt: `Overio - mind place`,
    siteHeadline: `Overio - Overio space`,
    siteUrl: `https://overio.space`,
    siteDescription: `massive knowledge over I/O`,
    siteLanguage: `en`,
    author: `@perowong`,
    basePath: '/',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        lessBabel: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Overio - mind place`,
        short_name: `Overio`,
        description: `massive knowledge over I/O`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `minimal-ui`,
        icon: `static/app-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
