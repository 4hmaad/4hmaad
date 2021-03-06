import React from "react"
import styled from "styled-components"

import { H, P } from "../typography"
import Button from "../../styles/Button"

const ContactStyles = styled.section`
  padding: var(--section-padding);
`

const Contact = () => (
  <ContactStyles id="contact">
    <H>Get In Touch</H>

    <P>
      I'm always looking for opportunities to grow as a developer, so if you
      have got a freelance project, remote job, or just want to talk feel free
      to contact. I will try to reply as soon as possible.
    </P>

    <Button small primary inverted href="mailto: ahmadnawazkhan1@outlook.com">
      Contact
    </Button>
  </ContactStyles>
)

export default Contact
