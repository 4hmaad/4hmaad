import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import Nav from "../components/Nav"

import { H, P, A } from "../components/typography"

const PostContainer = styled.div`
  max-width: var(--container-blog-post-max-width);
  margin: 7rem auto;
`

const PostFrontMatter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 0rem;

  .title {
    margin: 0;
  }

  .sub {
    display: flex;

    .editPost {
      margin-left: 2rem;
      text-decoration: none;
      font-size: var(--font-xs);
      font-weight: var(--font-regular);
      color: ${props => props.theme.text};
      text-decoration: underline;
      text-decoration-color: ${props => props.theme.text};
      cursor: pointer;
    }
  }
`

const PostBody = styled.div`
  display: flex;
  flex-direction: column;

  pre {
    width: 120%;
    align-self: center;

    @media (max-width: 56.25em) {
      width: 100%;
    }
  }
`

export default ({ data: { mdx: post }, pageContext }) => {
  return (
    <Layout>
      <Nav forBlog />
      <PostContainer>
        <>
          <PostFrontMatter className="frontmatter">
            <H className="title" as="h2">
              {post.frontmatter.title}
            </H>

            <div className="sub">
              <P as="span" size="small">
                {post.frontmatter.date}
              </P>

              <Link
                target="_blank"
                to={`https://github.com/4hmaad/4hmaad/tree/master/src/posts${post.fields.slug}index.mdx`}
                className="editPost"
              >
                Edit Post
              </Link>
            </div>
          </PostFrontMatter>

          <PostBody>
            <MDXRenderer>{post.body}</MDXRenderer>
          </PostBody>
        </>
      </PostContainer>
    </Layout>
  )
}

export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
      }
      fields {
        slug
      }
      body
    }
  }
`
