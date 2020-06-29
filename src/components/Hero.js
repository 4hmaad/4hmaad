import React from "react"
import styled from "styled-components"
import H from "./typography/Headings"
import P from "./typography/Text"

import CustomButton from "./CustomButton"

const HeroStyles = styled.header`
  padding-top: 16rem;
  padding-bottom: 15rem;
  display: flex;
  flex-direction: column;
  max-width: 80rem;
`

const ButtonsContainer = styled.div`
  padding-top: 5rem;
`

const Hero = () => (
  <>
    <HeroStyles>
      <H>Hey, I am Ahmad, a Full-Stack Web Developer.</H>
      <P size="large">
        A young enthusiastic programmer with over two years of experience in
        softwares development, I build exceptional, high-quality, performant and
        secure websites and applications.
      </P>

      <ButtonsContainer>
        <CustomButton style={{ marginRight: "2rem" }}>projects</CustomButton>
        <CustomButton secondary>contact</CustomButton>
      </ButtonsContainer>
    </HeroStyles>
  </>
)

export default Hero
