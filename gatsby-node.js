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
            fields: { collection: { eq: "posts" } }
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

    /*
      I think this need no explanations, btw the context is actually like passing information to the component.
      You would receive these values as pageContext objects in PostTemplate's props.  
    */

    createPage({
      path: post.fields.slug,
      component: PostTemplate,
      context: {
        slug: post.fields.slug,
        collection: "post",
        previous,
        next,
      },
    })
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  convertMdxToPosts({ graphql, createPage })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  /* 
    It's pretty confusing file so I will try to explain it :D

    I use gatsby-source-filesystem to generate File nodes of data/projects,
    assets/images and posts/ (go see the gatsby-config). 

    After the nodes are created, I use various transformers to
    convert those File nodes into different types of data nodes.
    For Instance: I've used gatsby-plugin-mdx to convert FileNodes with extensions .md and .mdx to 
    data nodes.

    On each data node creation this onCreateNode function is called. onCreateNode provides us actions which
    includes a function named createNodeField, using this function you could manually add fields to the data nodes.

    So I add two custom fields to data nodes: collection and slug, collection is added 
    to differentiate between projects and posts mdx nodes. By differentiation, I mean that if we later
    want to fetch posts, we would filter mdx data nodes by collection.

    Slug is just a conventional word, slug value could be your mdx node relative url or mdx node unique id, and you could use 
    this slug to later create pages for mdx data nodes.

    In my case, I usually define slug value in mdx posts' frontmatter, but if I haven't defined it, I want it to be generated from
    the mdx node relative path.

  */

  const { createNodeField } = actions

  /* We are receiving all those data nodes created by transformers,
     even the images nodes created by gatsby-transformer-sharp,
     but I want to add unique fields only to the mdx data nodes 
  */
  if (node.internal.type === `Mdx`) {
    // It generates slug (relative path) from the node.
    const generatedSlug = createFilePath({ node, getNode })

    /*  
      Now these are the two custom fields (collection and slug) I was talking about.
    */

    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.slug
        ? `/${node.frontmatter.slug}/`
        : generatedSlug,
    })

    /* 
      The getNode(node.parent).sourceInstanceName returns 'posts' because the folder name, 
      that contains the posts' mdx files, is posts.
    */
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    })
  }
}
