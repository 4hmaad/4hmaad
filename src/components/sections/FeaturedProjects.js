import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

/* components */
import Project from "../Project"

/* Typography */
import H from "../typography/Headings"

const ProjectsStyles = styled.section`
  padding: var(--section-padding);

  & > div:last-child {
    margin: 0;
  }
`

export const FeaturedProjects = () => {
  const {
    allMdx: { nodes: projects },
  } = useStaticQuery(graphql`
    query GET_PROJECTS_QUERY {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
          frontmatter: { visible: { eq: true } }
        }
      ) {
        nodes {
          frontmatter {
            title
            description
            stack
            site
            repo
            image {
              childImageSharp {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ProjectsStyles id="projects">
      <H>Selected Projects</H>

      {projects.map(({ frontmatter }, idx) => (
        <Project key={idx} project={frontmatter} />
      ))}
    </ProjectsStyles>
  )
}

export default FeaturedProjects
