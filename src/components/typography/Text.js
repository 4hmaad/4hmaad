import styled from "styled-components"

const textSizes = {
  // rem
  p: 1.8,
  span: 1.8,
  small: 1.4,
  large: 2,
}

const P = styled.p`
  font-size: ${textSizes.p}rem;

  font-size: ${props => props.as && `${textSizes[props.as]}rem`};
  font-size: ${props => props.size && `${textSizes[props.size]}rem`};
  line-height: ${props => props.theme.lineHeight};
`

export default P
