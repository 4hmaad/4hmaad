import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import useSiteMetadata from "./../hooks/useSiteMetaData"

import Layout from "../components/Layout"
import SEO from "./../components/Seo"

import Footer from "../components/Footer"
import Nav from "../components/Nav"

import { H, P, A } from "../components/typography"

const PostContainer = styled.div`
  max-width: var(--container-blog-post-max-width);
  margin: 7rem auto;

  @media (max-width: 37.5em) {
    p {
      font-size: 16px;
    }
  }
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
const PostFooter = styled.div`
  padding: 2rem 2rem;
  border: 2px dotted ${props => props.theme.mainColor};
`

export default ({ data: { mdx: post }, pageContext }) => {
  const {
    author,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    image,
  } = useSiteMetadata()

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        image={
          post.image === null
            ? `${siteUrl}${image}`
            : `${siteUrl}${post.image?.publicURL}`
        }
        siteUrl={`${siteUrl}${post.fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={author}
        article={true}
        publishedDate={post.frontmatter.date}
      />

      <Nav forBlog />
      <PostContainer>
        <>
          <PostFrontMatter>
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

          <PostFooter>
            <P>
              If you liked this post I'm sure you'll love what I usually share
              on{" "}
              <A dashed href="https://twitter.com/4hmaad">
                Twitter
              </A>
              .
            </P>
          </PostFooter>
        </>
      </PostContainer>
      <Footer />
    </Layout>
  )
}

export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 240)
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
        description
        image {
          publicURL
        }
      }
      body
      fields {
        slug
      }
    }
  }
`
