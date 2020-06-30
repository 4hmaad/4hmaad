import React from "react"
import styled from "styled-components"
import ThemeProvider from "./ThemeProvider"
import GlobalStyles from "../styles/GlobalStyles"
import Head from "./Head"
import Nav from "./Nav"

const ContentContainer = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0rem 2rem;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Head />
      <GlobalStyles />
      <Nav />
      <ContentContainer>{children}</ContentContainer>
    </ThemeProvider>
  )
}

export default Layout
