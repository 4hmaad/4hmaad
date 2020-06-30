import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Link as ScrollLink } from "react-scroll"
import { ThemeContext } from "./ThemeProvider"

import { LogoIcon, SunIcon, MoonIcon } from "./icons"

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

const ThemeIcon = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
`

const NavUl = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  font-size: var(--font-md);
  font-family: var(--font-heading);
`

const NavLi = styled.li`
  margin: 1rem 2rem;
  text-transform: uppercase;
  cursor: pointer;

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
  }
`

const Nav = () => {
  const [currentTheme, themeToggle] = React.useContext(ThemeContext)
  return (
    <NavStyles>
      <Link to="/">
        <Logo />
      </Link>

      <NavUl>
        <NavLi>
          <ScrollLink
            offset={100}
            duration={1500}
            spy={true}
            smooth={true}
            to="about"
          >
            About
          </ScrollLink>
        </NavLi>
        <NavLi>
          <ScrollLink smooth={true} duration={1500} offset={100} to="services">
            Services
          </ScrollLink>
        </NavLi>
        <NavLi>
          <Link to="/blog">Blog</Link>
        </NavLi>
        <NavLi>
          <ThemeToggler onClick={themeToggle}>
            {currentTheme === "dark" ? (
              <ThemeIcon as={SunIcon} />
            ) : (
              <ThemeIcon as={MoonIcon} />
            )}
          </ThemeToggler>
        </NavLi>
      </NavUl>
    </NavStyles>
  )
}

export default Nav
