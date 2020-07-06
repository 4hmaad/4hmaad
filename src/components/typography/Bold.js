import React from "react"
import styled from "styled-components"

const textSizes = {
  span: 2,
}

const BoldStyles = styled.strong`
  font-size: ${textSizes.p}rem;
  font-weight: var(--font-medium);
`

export default function Bold({ className, ...theRest }) {
  return <BoldStyles className={className} {...theRest} />
}
