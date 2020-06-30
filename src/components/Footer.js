import React from "react"
import styled from "styled-components"

import { H, P, A } from "./typography"
import { LinkedInIcon, GithubIcon } from "./icons"

const FooterStyles = styled.section`
  margin: 8rem 0;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    & svg {
      cursor: pointer;
      margin: 0rem 1rem;
      height: 2rem;
      width: 2rem;
      fill: ${props => props.theme.text};
    }
  }
`

const Footer = () => (
  <FooterStyles>
    <P size="medium" as="span">
      Designed and built by <A size="medium">Ahmad (Me)</A>
    </P>

    <div>
      <LinkedInIcon />
      <GithubIcon />
    </div>
  </FooterStyles>
)

export default Footer
