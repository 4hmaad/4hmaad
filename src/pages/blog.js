import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "./../components/Layout"

import Nav from "./../components/Nav"
import { H, P, A } from "../components/typography"
import BlogPostPreview from "./../components/BlogPostPreview"

const SearchInput = styled.input`
  border: 2px solid ${props => props.theme.text};
  font-size: var(--font-xs);
  outline: none;
  color: ${props => props.theme.dark};
  font-weight: var(--font-medium);
  padding: 1.2rem 2rem;
`

const BlogStyles = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2rem;

  .sidebar {
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      justify-items: space-between;

      li {
        font-size: var(--font-xs);
        font-weight: var(--font-medium);
        border-radius: 2px;
        background: ${props => props.theme.yellow};
        color: ${props => props.theme.dark};
        padding: 0.2rem 1rem;
        margin-bottom: 1rem;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 36.5em) {
    grid-template-columns: 1fr;
  }
`

const BlogPostsContainer = styled.div``

export default ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data

  return (
    <Layout>
      <Nav />
      <BlogStyles>
        <div className="sidebar">
          <H as="h5">Search</H>
          <SearchInput placeholder="Search" />

          <H as="h5">Tags</H>

          <ul>
            <li>Javascript</li>
            <li>PHP</li>
            <li>CSS</li>
            <li>SSH</li>
            <li>Vscode</li>
          </ul>

          <H as="h5">Filters (0)</H>
        </div>

        <div>
          {posts.map(post => (
            <BlogPostPreview post={post} />
          ))}
        </div>
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
        body
        frontmatter {
          title
          date(formatString: "Do MMMM YYYY")
          cover {
            publicURL
            id
            extension
            childImageSharp {
              fluid(maxWidth: 700) {
                base64
                aspectRatio
                src
                srcSet
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`
