import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { H, P } from "./typography"

const PostPreviewStyles = styled.article`
  margin: 4rem 0;
  border-top: 4px solid ${props => props.theme.yellow};
  padding: 2rem;
  position: relative;

  ${props =>
    props.theme.text === props.theme.light
      ? `background-color: #2b2f46;`
      : null}
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 2px 4px rgba(0, 0, 0, 0.06);

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 2px 4px rgba(0, 0, 0, 0.06);
  }

  & > div:last-child {
    .title {
      margin: 0;
      text-decoration: underline;
      text-decoration-color: ${props => props.theme.yellow};
    }
    .link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      text-decoration: none;
      cursor: pointer;
    }
  }

  @media (max-width: 56.25em) {
    grid-template-columns: 1fr;

    & > div:first-child {
      grid-row: 1 / 1;
    }
  }
`

const BlogPostPreview = ({ post }) => (
  <PostPreviewStyles key={post.id}>
    <div>
      <P as="span" size="small">
        {post.frontmatter.date}
      </P>
      <H className="title" as="h3">
        {post.frontmatter.title}
      </H>
      <P>{post.excerpt}</P>
      <Link className="link" to={post.fields.slug} />
    </div>
  </PostPreviewStyles>
)

export default BlogPostPreview
