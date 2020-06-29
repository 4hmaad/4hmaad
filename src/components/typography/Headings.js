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

const H = styled.h1`
  font-size: ${headingSizes.h1}rem;
  ${props => props.as && `${headingSizes[props.as]}`};
  color: ${props => props.theme.heading};
  font-weight: ${props => props.theme.fontWeight};
`

export default H
