import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "./../components/Layout"

import Nav from "./../components/Nav"
import BlogPostPreview from "./../components/BlogPostPreview"

const BlogStyles = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  grid-gap: 3rem;

  @media (max-width: 36.5em) {
    grid-template-columns: 1fr;
  }
`

export default ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data

  return (
    <Layout>
      <Nav forBlog />
      <BlogStyles>
        {posts.map(post => (
          <BlogPostPreview key={post.id} post={post} />
        ))}
      </BlogStyles>
    </Layout>
  )
}

export const query = graphql`
  query GET_BLOG_POSTS {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true } }
        fileAbsolutePath: { regex: "/posts/" }
      }
    ) {
      nodes {
        id
        excerpt(pruneLength: 200)
        frontmatter {
          title
          date(formatString: "Do MMMM YYYY")
        }

        fields {
          slug
        }
      }
    }
  }
`
