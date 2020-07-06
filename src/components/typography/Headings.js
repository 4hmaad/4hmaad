import React from "react"
import styled from "styled-components"

const headingSizes = {
  // rem
  h1: 5,
  h2: 4,
  h3: 3,
  h4: 2.5,
  h5: 2,
  h6: 1.8,
}

const HStyles = styled.h1`
  font-size: ${headingSizes.h1}rem;
  font-size: ${props => props.as && `${headingSizes[props.as]}rem`};
  color: ${props => props.theme.heading};
`

export default function H({ className, ...theRest }) {
  return <HStyles className={className} {...theRest} />
}
