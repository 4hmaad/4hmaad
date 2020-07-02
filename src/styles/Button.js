import styled, { css } from "styled-components"

const PrimaryButton = css`
  background: ${props => props.theme.btnPrimary.bg};
  color: ${props => props.theme.btnPrimary.text};
  border: 2px solid ${props => props.theme.btnPrimary.bg};

  &:hover,
  &:active {
    background: ${props => props.theme.btnPrimary.bgHover};
    color: ${props => props.theme.btnPrimary.textHover};
  }
`
const PrimaryButtonInverted = css`
  background: transparent;
  color: ${props => props.theme.btnSecondary.text};
  border: 2px solid ${props => props.theme.btnSecondary.bgHover};

  &:hover,
  &:active {
    background: ${props => props.theme.btnSecondary.bgHover};
    color: ${props => props.theme.btnSecondary.textHover};
  }
`

const MainButton = css`
  background: ${props => props.theme.btnMain.bg};
  color: ${props => props.theme.btnMain.text};
  border: 2px solid ${props => props.theme.btnMain.bg};

  &:hover,
  &:active {
    background: ${props => props.theme.btnMain.bgHover};
    color: ${props => props.theme.btnMain.textHover};
  }
`

const MiniButtonStyles = css`
  padding: 0.4rem 1.8rem;
  font-size: var(--font-xs);
`
const NormalButtonStyles = css`
  padding: 0.8rem 2rem;
  font-size: var(--font-sm);
`
const LargeButtonStyles = css`
  padding: 1.2rem 2.5rem;
  font-size: var(--font-md);
`

const Button = styled.a`
  display: inline-block;
  text-transform: uppercase;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: all 0.4s ease;
  text-decoration: none;
  font-weight: var(--font-medium);

  ${props =>
    props.primary && props.inverted
      ? PrimaryButtonInverted
      : props.primary
      ? PrimaryButton
      : MainButton}

  ${props =>
    props.large
      ? LargeButtonStyles
      : props.mini
      ? MiniButtonStyles
      : NormalButtonStyles}
`
export default Button
