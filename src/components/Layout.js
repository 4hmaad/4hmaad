import React from "react"
import styled from "styled-components"
import { MDXProvider } from "@mdx-js/react"

import useSiteMetadata from "./../hooks/useSiteMetaData"

import ThemeProvider from "./ThemeProvider"
import GlobalStyles from "../styles/GlobalStyles"
import SEO from "./Seo"
import Nav from "./Nav"
import mdxComponents from "./typography/mdxComponents"

const PageContainer = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 2rem;
`

const Layout = ({ location, children, pageContext, data }) => {
  const {
    description: MetaDescription,
    title: MetaTitle,
    image: defaultImage,
    author,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata()

  var SeoProps = {}

  if (pageContext.collection === "post") {
    // If the coming data is post data then destructor it
    const {
      frontmatter: { title, description, image, date },
      excerpt,
    } = data.mdx

    SeoProps = {
      title,
      image:
        image === null
          ? `${siteUrl}${defaultImage}`
          : `${siteUrl}${image.publicURL}`,
      description: description ? description : excerpt,
      date,
      pathname: location.pathname,
      article: true,
      publishedDate: date,
    }
  } else {
    SeoProps = {
      description: MetaDescription,
      title: location.pathname === "/blog/" ? `Blog | ${author}` : MetaTitle,
      image: defaultImage,
    }
  }

  return (
    <ThemeProvider>
      <GlobalStyles />

      <SEO
        {...SeoProps}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={author}
        siteUrl={siteUrl}
      />

      <MDXProvider components={mdxComponents}>
        <PageContainer>
          <Nav forBlog={location.pathname === "/" ? false : true} />

          {children}
        </PageContainer>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default Layout
