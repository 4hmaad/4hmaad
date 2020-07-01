import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

/* components */
import Button from "./../styles/Button"

/* typography */
import { H, P, A } from "./typography"

const ProjectStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  grid-gap: 4rem;
  align-items: center;
  margin-bottom: 10rem;
`

const ProjectImageContainer = styled.a`
  height: 40rem;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 40px -15px;
  transition: 0.3s ease;

  & > img,
  picture {
    object-position: top !important;
    object-fit: cover !important;
    width: 100% !important;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 60px -15px;
  }
`

const ProjectLinksContainer = styled.div`
  margin-top: 4rem;

  & > a:last-child {
    margin-left: 2rem;
  }
`

const ListUi = styled.ul`
  list-style-type: none;
`

const Project = props => {
  const { title, description, image, repo, site, stack } = props.project

  return (
    <ProjectStyles>
      <div>
        <H as="h3">{title}</H>

        <P>{description}</P>

        <H as="h5">Tools Used</H>

        <ListUi>
          {stack.map((tool, idx) => (
            <li key={idx}>{tool}</li>
          ))}
        </ListUi>

        <ProjectLinksContainer>
          <Button small primary href={site}>
            Visit Site
          </Button>
          <A size="medium" href={repo}>
            Source Code
          </A>
        </ProjectLinksContainer>
      </div>

      <ProjectImageContainer href="#">
        <Img fluid={image.childImageSharp.fluid} alt={title} />
      </ProjectImageContainer>
    </ProjectStyles>
  )
}

export default Project
