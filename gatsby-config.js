module.exports = {
  siteMetadata: {
    title: `The SpeedChess.Club`,
    siteUrl: `https://speedchessclub.flywheelsites.com`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
  options: {
    "url": "https://speedchessclub.flywheelsites.com/graphql"
  }
},
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-plugin-netlify",
],
};