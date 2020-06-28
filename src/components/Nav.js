import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ThemeContext } from "../theme/ThemeProvider"

import LogoIcon from "./../../static/logo.react.svg"
import SunIcon from "./../../static/sun.react.svg"

const NavStyles = styled.div`
  height: 9rem;
  background: transparent;
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid ${props => props.theme.yellow};

  svg {
    display: block;
  }
`

const Logo = styled(LogoIcon)`
  height: 4rem;
  width: 4rem;
  background: transparent;

  & > path {
    stroke: ${props => props.theme.text} !important;
    stroke-width: 3rem;
  }
`

const NavUi = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  font-size: var(--font-md);
  font-family: var(--font-heading);
`

const NavLi = styled.li`
  margin: 1rem 2rem;
  text-transform: uppercase;

  & > a {
    color: ${props => props.theme.link};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover,
    &:active {
      color: ${props => props.theme.yellow};
    }
  }
`

const ThemeToggler = styled.div`
  cursor: pointer;
  & > svg {
    fill: ${props => props.theme.text};
    vertical-align: bottom;
  }
`

const Nav = () => {
  const [, themeToggle] = React.useContext(ThemeContext)
  return (
    <NavStyles>
      <Link to="/">
        <Logo />
      </Link>

      <NavUi class="navbar__menu">
        <NavLi>
          <a href="#">About</a>
        </NavLi>
        <NavLi>
          <a href="#">Services</a>
        </NavLi>
        <NavLi>
          <Link to="/blog">Blog</Link>
        </NavLi>
        <NavLi>
          <ThemeToggler onClick={themeToggle}>
            <SunIcon />
          </ThemeToggler>
        </NavLi>
      </NavUi>
    </NavStyles>
  )
}

export default Nav
