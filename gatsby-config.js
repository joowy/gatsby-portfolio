const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: "gatsby portfolio",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
