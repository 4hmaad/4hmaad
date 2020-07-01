const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const PostTemplate = path.resolve("src/templates/PostTemplate.js")
  return graphql(`
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
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const posts = result.data.allMdx.nodes
    // create page for each mdx file
    posts.forEach((post, index) => {
      // assign null if it's the last published post, remember it's for descending order.
      const previous = index === posts.length - 1 ? null : posts[index + 1]
      // assign null if its the first published post.
      const next = index === 0 ? null : posts[index - 1]

      createPage({
        path: post.fields.slug,
        component: PostTemplate,
        context: {
          slug: post.fields.slug,
          next,
          previous,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
