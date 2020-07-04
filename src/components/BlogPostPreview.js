import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { H, P } from "./typography"

const PostPreviewStyles = styled.article`
  border-top: 4px solid ${props => props.theme.yellow};
  padding: 2rem;
  position: relative;

  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px,
    rgba(71, 63, 79, 0.08) 0px 2px 4px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  /* if the theme is dark then background-color should be bodySecondary */
  background-color: ${props =>
    props.theme.light === props.theme.text ? props.theme.bodySecondary : ""};

  & .title {
    margin: 0;
  }
  & .link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-decoration: none;
    cursor: pointer;
  }

  &:hover {
    transform: translateY(-0.4rem);
  }
`

const BlogPostPreview = ({ post }) => (
  <PostPreviewStyles key={post.id}>
    <P as="span" size="small">
      {post.frontmatter.date}
    </P>
    <H className="title" as="h3">
      {post.frontmatter.title}
    </H>
    <P>{post.excerpt}</P>
    <Link className="link" to={post.fields.slug} />
  </PostPreviewStyles>
)

export default BlogPostPreview
