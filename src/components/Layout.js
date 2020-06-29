import React from "react"
import styled from "styled-components"
import ThemeProvider from "./ThemeProvider"
import GlobalStyles from "../styles/GlobalStyles"
import Head from "./Head"
import Nav from "./Nav"

const ContentContainer = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
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
