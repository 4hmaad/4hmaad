import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { H } from "../components/typography/"

import Layout from "./../components/Layout"

import Footer from "../components/Footer"
import Nav from "./../components/Nav"
import BlogPostPreview from "./../components/BlogPostPreview"

const BlogStyles = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
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
      <H as="h2">Latest Articles</H>
      <BlogStyles>
        {posts.map(post => (
          <BlogPostPreview key={post.id} post={post} />
        ))}
      </BlogStyles>
      <Footer />
    </Layout>
  )
}

export const postsQuery = graphql`
  query GET_BLOG_POSTS {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true } }
        fields: { collection: { eq: "posts" } }
      }
    ) {
      nodes {
        id
        excerpt(pruneLength: 240)
        frontmatter {
          title
          date(formatString: "Do MMMM YYYY")
          description
        }

        fields {
          slug
          collection
        }
      }
    }
  }
`
