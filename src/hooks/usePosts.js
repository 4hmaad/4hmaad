import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const { posts } = useStaticQuery(
    graphql`
      query BLOG_POSTS_QUERY {
        allMdx(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
          nodes {
            frontmatter {
              title
              date
              published
            }
          }
        }
      }
    `
  )
  return posts.nodes
}

export default usePosts
