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
  text-decoration: none;

  position: relative;
  --scaleX: 1;
  --rotate: -1deg;
  cursor: pointer;

  &::before {
    content: "";
    height: 0.4rem;
    position: absolute;
    background: ${props => props.theme.linkBorder};
    content: "";
    width: 100%;
    bottom: -3px;
    z-index: -1;
    border-radius: 12px;
    transition: transform 0.1s;
    transform: skew(0deg) rotate(var(--rotate)) scaleX(var(--scaleX));
  }

  &:hover {
    --scaleX: 1.05;
  }
`

export default A
