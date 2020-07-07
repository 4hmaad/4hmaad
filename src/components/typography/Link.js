import React from "react"
import styled, { css } from "styled-components"

const DashedEffects = css`
  border-bottom: 2px ${props => props.theme.text} dashed;
`

const BorderEffects = css`
  background-image: linear-gradient(
    ${props => props.theme.mainColor},
    ${props => props.theme.mainColor}
  );
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: auto 0.3rem;
  transition: color 0.05s ease-out, background-size 0.1s ease-in-out;
  padding-bottom: 0.2rem;

  &:hover,
  &:focus {
    background-size: auto 100%;
    color: ${props => props.theme.dark};
  }
`

const linkSizes = {
  // rem
  a: 2,
  small: 1.4,
  medium: 1.8,
  large: 2,
}

const AStyles = styled.a`
  color: ${props => props.theme.link};
  font-weight: var(--font-regular);
  font-size: ${linkSizes.a}rem;
  font-size: ${props => props.size && `${linkSizes[props.size]}rem`};
  text-decoration: none;
  cursor: pointer;

  ${props =>
    props.dashed ? DashedEffects : props.simple ? null : BorderEffects}
`

export default function A({ className, ...theRest }) {
  return (
    <AStyles
      rel="noopener noreferrer nofollow"
      target="_blank"
      className={className}
      {...theRest}
    />
  )
}
