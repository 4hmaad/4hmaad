/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Ahmad Nawaz Khan | Web Developer",
    description: 'Web developer"',
    author: "Ahmad Nawaz Khan",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.react\.svg$/,
        },
      },
    },
  ],
}
