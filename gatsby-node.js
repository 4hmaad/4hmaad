const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

async function convertMdxToPosts({ graphql, createPage }) {
  const PostTemplate = path.resolve("src/templates/PostTemplate.js")

  const { errors, data } = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            frontmatter: { published: { eq: true } }
            fileAbsolutePath: { regex: "/posts/" }
          }
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    `
  )

  if (errors) {
    throw new Error(errors)
  }

  const posts = data.allMdx.nodes

  posts.forEach((post, idx) => {
    const previous = idx === posts.length - 1 ? null : posts[idx + 1]
    const next = idx === 0 ? null : posts[idx - 1]

    createPage({
      path: post.fields.slug,
      component: PostTemplate,
      context: {
        slug: post.fields.slug,
        collection: "post",
        previous,
        next,
        pathPrefix: "",
      },
    })
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  convertMdxToPosts({ graphql, createPage })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const generatedSlug = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: generatedSlug,
    })
  }
}
