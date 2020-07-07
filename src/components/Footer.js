import React from "react"
import styled from "styled-components"

import { P, A } from "./typography"
import Icon from "./Icon"

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
      height: 2rem;
      width: 2rem;
      fill: ${props => props.theme.text};
    }
  }
`

const FOOTER_LINKS = [
  {
    title: "twitter",
    url: "https://twitter.com/4hmaad",
  },
  {
    title: "Github",
    url: "https://github.com/4hmaad",
  },

  {
    title: "dev.to",
    url: "https://dev.to/4hmaad",
  },
]

const Footer = () => (
  <FooterStyles>
    <div>
      {FOOTER_LINKS.map(({ title, url }, idx) => (
        <A key={idx} simple href={url}>
          <Icon type={title} size="4rem" />
        </A>
      ))}
    </div>
    <P size="medium" as="span">
      © 2020
    </P>
  </FooterStyles>
)

export default Footer
