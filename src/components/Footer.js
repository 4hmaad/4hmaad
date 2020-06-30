import React from "react"
import styled from "styled-components"

import { H, P, A } from "./typography"

const FooterStyles = styled.section`
  margin: 8rem 0;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
`

const Footer = () => (
  <FooterStyles>
    <P size="medium" as="span">
      Designed and built by Ahmad
    </P>
  </FooterStyles>
)

export default Footer
