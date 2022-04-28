module.exports = {
  siteMetadata: {
    title: "The SpeedChess.Club",
    siteUrl: "https://speedchessclub.flywheelsites.com",
    description: "Play Fast. Win Faster.  - SpeedChess.Club",
  },
  plugins: [
  {
    resolve: "gatsby-source-wordpress",
    options: {
    "url": "https://speedchessclub.flywheelsites.com/graphql"
    }
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-plugin-netlify",
  "gatsby-plugin-mdx",
],
};