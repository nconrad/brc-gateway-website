module.exports = {
  siteMetadata: {
    title: `BRC Gateway`,
    description: `
    The NIH/NIAID-funded Bioinformatics Resource Centers (BRCs) for Infectious Diseases program provides public access to computational platforms and analysis tools that enable collecting, archiving, updating, and integrating a variety of genomics and related research data relevant to infectious diseases, and pathogens and their interaction with hosts.`,
    author: `The BRC Project Team`,
  },
  pathPrefix: "brc-gateway-website",
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-twitter',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/brc-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
