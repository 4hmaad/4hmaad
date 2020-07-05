import React from "react"
import styled from "styled-components"
import { Link as ScrollLink } from "react-scroll"

import { H, P } from "../typography"

import Button from "../../styles/Button"

const HeroStyles = styled.header`
  padding-top: 12rem;
  padding-bottom: 15rem;
  display: flex;
  flex-direction: column;
  max-width: 80rem;

  h1 {
    margin-bottom: 1.5rem;
  }

  p {
    margin: 1rem 0rem;
  }
`

const ButtonsContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Hero = () => (
  <>
    <HeroStyles>
      <H>Hey, I am Ahmad, a Web Software Developer.</H>
      <P>
        A young enthusiastic programmer with over two years of experience, I
        create exceptional, high-quality, performant and secure websites and
        applications. Get in touch to discuss how we can work together.
      </P>

      <ButtonsContainer>
        <Button
          as={ScrollLink}
          to="projects"
          smooth={true}
          offset={100}
          duration={1500}
          style={{ marginRight: "2rem" }}
          primary
          large
        >
          projects
        </Button>
        <Button
          as={ScrollLink}
          to="contact"
          smooth={true}
          duration={1500}
          primary
          inverted
          large
        >
          contact
        </Button>
      </ButtonsContainer>
    </HeroStyles>
  </>
)

export default Hero
