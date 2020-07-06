import React from "react"
import styled from "styled-components"

const InlineCodeStyles = styled.code`
  background: ${props => props.theme.codeBackground};
  color: ${props => props.theme.codeColor};
  padding: 0.2rem 1rem;
  font-size: var(--font-sm);
`

export default function InlineCode({ className, ...theRest }) {
  return <InlineCodeStyles className={className} {...theRest} />
}
