import React from "react"
import styled, { css } from "styled-components"

const primaryButtonStyles = css`
  background: ${props => props.theme.btnPrimary.bg};
  color: ${props => props.theme.btnPrimary.text};
  border-color: ${props => props.theme.btnPrimary.bg};

  &:hover,
  &:active {
    background: ${props => props.theme.btnPrimary.bgHover};
    color: ${props => props.theme.btnPrimary.textHover} !important;
    border-color: ${props => props.theme.btnPrimary.bgHover};
  }
`

const secondaryButtonStyles = css`
  background: ${props => props.theme.btnSecondary.bg};
  color: ${props => props.theme.btnSecondary.text};
  border-color: ${props => props.theme.btnSecondary.bgHover};

  &:hover,
  &:active {
    background: ${props => props.theme.btnSecondary.bgHover};
    color: ${props => props.theme.btnSecondary.textHover} !important;
  }
`

const ButtonStyles = styled.a`
  border: 2px solid #000;
  text-transform: uppercase;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: all 0.4s ease;

  ${props => (props.secondary ? secondaryButtonStyles : primaryButtonStyles)}

  ${props =>
    props.small
      ? `padding: 1rem 1.8rem;
       font-size: ${props.theme.fontSM}`
      : `padding: 1.4rem 2.5rem;
       font-size: ${props.theme.fontMD}`}
`
const CustomButton = ({ children, ...props }) => (
  <ButtonStyles {...props}> {children} </ButtonStyles>
)

export default CustomButton
