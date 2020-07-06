import React from "react"
import styled from "styled-components"

const QuoteStyles = styled.blockquote`
  border-left: 5px solid ${props => props.theme.mainColor};
  font-style: italic;
  margin: 0;
  padding: 0px 30px;
`

export default function Quote({ className, ...theRest }) {
  return <QuoteStyles className={className} {...theRest} />
}
