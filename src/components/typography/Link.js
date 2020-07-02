import styled from "styled-components"

const linkSizes = {
  // rem

  a: 2,
  small: 1.4,
  medium: 1.8,
  large: 2,
}

const A = styled.a`
  color: ${props => props.theme.link};
  font-weight: var(--font-medium);
  font-size: ${linkSizes.a}rem;
  font-size: ${props => props.size && `${linkSizes[props.size]}rem`};
  max-width: max-content;
  transition: color 0.1s ease-in-out;
  text-decoration: none;

  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 90%;
    left: -0.1px;
    right: -0.1px;
    bottom: -2px;
    transition: all 0.1s ease-in-out;
    background-color: ${props => props.theme.mainColor};
  }

  &:hover::after {
    top: 0;
  }

  &:hover {
    color: ${props => props.theme.dark};
  }
`

export default A
