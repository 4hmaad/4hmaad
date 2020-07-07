module.exports = {
  siteMetadata: {
    title: "Ahmad Nawaz Khan | Web Developer",
    description: `This is my personal website where I write about Javascript, React and GraphQL.`,
    author: "Ahmad Nawaz Khan",
    image: `/default-image.png`,
    siteUrl: `https://ahmadnawaz.web.app`,
    siteLanguage: `en-GB`,
    siteLocale: `en_gb`,
    twitterUsername: `@4hmaad`,
    copyrightYear: new Date().getFullYear(),
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1500,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/src/data/projects`,
      },
    },
  ],
}
