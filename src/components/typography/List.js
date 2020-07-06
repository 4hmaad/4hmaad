import React from "react"
import styled from "styled-components"

const UlStyles = styled.ul`
  list-style-type: square;
  padding: 0 2rem;
  font-size: var(--font-md);
  font-weight: var(--font-regular);

  & > li {
    display: list-item;

    p {
      overflow-wrap: anywhere;
    }
  }
`

export default function Ul({ className, ...theRest }) {
  return <UlStyles className={className} {...theRest} />
}
