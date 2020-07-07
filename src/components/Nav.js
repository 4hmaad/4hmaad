import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Link as ScrollLink } from "react-scroll"
import { ThemeContext } from "./ThemeProvider"
import { Sun, Moon } from "react-feather"

const NavStyles = styled.nav`
  height: 9rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ul {
    margin-left: auto;
  }

  @media (max-width: 23.75em) {
    li {
      font-size: 1.8rem;
      margin: 1.3rem;
    }
  }

  @media (max-width: 20.125em) {
    padding: 2rem 0rem;
    ul {
      margin-left: 0;
      flex-wrap: wrap;
    }
  }

  svg {
    display: block;
  }
`

const LogoText = styled(Link)`
  color: ${props => props.theme.text};
  font-weight: var(--font-regular);
  font-family: var(--font-text);
  text-decoration: none;
  font-size: 2rem;
  margin-right: 2rem;
`

const ThemeIcon = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
  fill: ${props => props.theme.text};
`

const NavUl = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  font-size: var(--font-md);
  font-family: var(--font-text);
`

const NavLi = styled.li`
  margin: 1rem 2rem;
  text-transform: capitalize;
  cursor: pointer;

  & > a {
    color: ${props => props.theme.link};
    text-decoration: none;
    transition: color 0.2s ease;
    font-weight: var(--font-regular);

    &:hover,
    &:active {
      color: ${props => props.theme.linkHover};
    }
  }
`

const ThemeToggler = styled.div`
  cursor: pointer;
  & > svg {
    fill: ${props => props.theme.text};
  }
`

const Nav = ({ forBlog = false }) => {
  const [currentTheme, themeToggle] = React.useContext(ThemeContext)
  return (
    <NavStyles>
      {forBlog ? (
        <LogoText to="/blog">
          <span>Ahmad's Blog</span>
        </LogoText>
      ) : (
        <LogoText to="/">
          <span>Ahmad.</span>
        </LogoText>
      )}

      <NavUl>
        {forBlog ? (
          <NavLi>
            <Link to="/">Portfolio</Link>
          </NavLi>
        ) : (
          <>
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
              <ScrollLink
                smooth={true}
                duration={1500}
                offset={100}
                to="projects"
              >
                Projects
              </ScrollLink>
            </NavLi>
            <NavLi>
              <Link to="/blog">Blog</Link>
            </NavLi>
          </>
        )}

        <NavLi>
          <ThemeToggler onClick={themeToggle}>
            {currentTheme === "dark" ? (
              <ThemeIcon as={Sun} />
            ) : (
              <ThemeIcon as={Moon} />
            )}
          </ThemeToggler>
        </NavLi>
      </NavUl>
    </NavStyles>
  )
}

export default Nav
