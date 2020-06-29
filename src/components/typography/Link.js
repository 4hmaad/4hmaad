import styled from "styled-components"

const linkSizes = {
  // rem
  small: 1.4,
  normal: 1.8,
  large: 2,
}

const A = styled.a`
  color: ${props => props.theme.link};
  font-weight: var(--font-medium);
  font-size: ${linkSizes.normal}rem;
  font-size: ${props => props.size && `${linkSizes[props.size]}rem`};
  max-width: max-content;

  position: relative;
  --scaleX: 1;
  --rotate: -2deg;
  cursor: pointer;

  &::before {
    content: "";
    height: 0.5rem;
    position: absolute;
    background: ${props => props.theme.linkBorder};
    content: "";
    width: 100%;
    bottom: -4px;
    z-index: -1;
    border-radius: 12px;
    transition: transform 0.1s;
    transform: skew(-20deg) rotate(var(--rotate)) scaleX(var(--scaleX));
  }

  &:hover {
    --scaleX: 1.05;
  }
`

export default A
