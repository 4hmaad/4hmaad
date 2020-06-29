import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Helmet from "react-helmet"

const Head = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="author" content={data.site.siteMetadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </>
  )
}

export default Head
