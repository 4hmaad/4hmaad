import React from "react"
import styled from "styled-components"

import { H, P, A } from "./typography"
import { LinkedInIcon, GithubIcon } from "./icons"

const FooterStyles = styled.section`
  margin: 8rem 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    & svg {
      cursor: pointer;
      margin: 0rem 1rem;
      height: 1.8rem;
      width: 1.8rem;
      fill: ${props => props.theme.text};
    }
  }
`

const Footer = () => (
  <FooterStyles>
    <div>
      {
        // TODO: Add the linkedin profile URL
      }
      <a href="#">
        <LinkedInIcon />
      </a>
      <a target="_blank" href="https://github.com/4hmaad">
        <GithubIcon />
      </a>
    </div>
    <P size="medium" as="span">
      © 2020
    </P>
  </FooterStyles>
)

export default Footer
