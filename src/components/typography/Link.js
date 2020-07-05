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
  font-weight: var(--font-regular);
  font-size: ${linkSizes.a}rem;
  font-size: ${props => props.size && `${linkSizes[props.size]}rem`};
  text-decoration: none;
  background-image: linear-gradient(
    ${props => props.theme.mainColor},
    ${props => props.theme.mainColor}
  );
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: auto 0.3rem;
  transition: color 0.15s ease-out, background-size 0.15s ease-in-out;
  cursor: pointer;
  padding-bottom: 0.2rem;

  &:hover,
  &:focus {
    background-size: auto 100%;
    color: ${props => props.theme.dark};
  }
`

export default A
