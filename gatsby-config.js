module.exports = {
  siteMetadata: {
    title: "Ahmad Nawaz Khan | Web Developer",
    description: 'Web developer"',
    author: "Ahmad Nawaz Khan",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              linkImagesToOriginal: false,
              withWebp: true,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1035,
            linkImagesToOriginal: false,
            withWebp: true,
            sizeByPixelDensity: true,
          },
        },
      ],
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
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: ["400", "500"],
          },
          {
            family: `Open Sans`,
            variants: [`800`],
          },
        ],
      },
    },
  ],
}
