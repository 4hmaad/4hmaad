import React from "react"
import styled from "styled-components"
import ThemeProvider from "./ThemeProvider"
import GlobalStyles from "../styles/GlobalStyles"
import Head from "./Head"

const PageContainer = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 2rem;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <PageContainer>{children}</PageContainer>
    </ThemeProvider>
  )
}

export default Layout
