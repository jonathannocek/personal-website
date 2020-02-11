const path = require('path')
var secrets = require('./secrets.json');


module.exports = {
  siteMetadata: {
    title: 'Jonathan Nocek',
    author: 'Jonathan Nocek',
    description: 'A Personal Portfolio for Jonathan Nocek',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
      {
        resolve: `gatsby-plugin-s3`,
        options: {
          bucketName: secrets.s3.bucket,
          protocol: "https",
          hostname: "www.jonathannocek.com",
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-158193093-1"
        },
    },
  ],
}
