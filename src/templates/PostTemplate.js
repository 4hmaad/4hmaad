import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import Nav from "../components/Nav"
import Button from "../styles/Button"

import { H } from "../components/typography"

const PostContainer = styled.div`
  max-width: 80rem;
  margin: 6rem auto;
`

export default ({ data: { mdx: post }, pageContext }) => {
  console.log(pageContext)

  return (
    <Layout>
      <Nav />
      <Button as={Link} to="/blog" primary mini>
        &#8592; Blog
      </Button>
      <PostContainer>
        <H>{post.frontmatter.title}</H>
        <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />
        <MDXRenderer>{post.body}</MDXRenderer>
      </PostContainer>
    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
        cover {
          publicURL
          id
          extension
          childImageSharp {
            fluid(maxWidth: 700, quality: 20) {
              base64
              aspectRatio
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
