module.exports = {
  siteMetadata: {
    title: `Belgische-Abdijbieren`,
    description: `lang lopende taak voor cms development`,
    author: `Siemen De Beukelaer`,
    siteUrl: `localhost:8000`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `http://abdijbier.local/graphql`,
      },
    }
    
  ]

  
    
  
}
