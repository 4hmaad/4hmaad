import React from "react"
import styled from "styled-components"

const textSizes = {
  // rem
  p: 2,
  span: 2,

  small: 1.4,
  medium: 1.8,
  large: 2,
}

const PStyles = styled.p`
  font-size: ${textSizes.p}rem;

  font-size: ${props => props.as && `${textSizes[props.as]}rem`};
  font-size: ${props => props.size && `${textSizes[props.size]}rem`};

  line-height: var(--line-height);
`

export default function P({ className, ...theRest }) {
  return <PStyles className={className} {...theRest} />
}
