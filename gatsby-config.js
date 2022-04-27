module.exports = {
  siteMetadata: {
    title: `The SpeedChess.Club`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://speedchessclub.flywheelsites.com/graphql"
    }
  }]
};