import React from "react"
import { Helmet } from "react-helmet"

export default function SEO({
  title,
  titleTemplate,
  description,
  pathname = "/",
  siteUrl,
  article = false,
  image,
  siteLanguage,
  siteLocale,
  twitterUsername,
  author,
  datePublished,
  dateModified,
}) {
  const modifiedParams = {
    title: title.slice(0, 70),
    description: description.slice(0, 160),
    datePublished: datePublished ? null : new Date(Date.now()).toISOString(),
    dateModified: dateModified ? null : new Date(Date.now()).toISOString(),
  }

  return (
    <>
      <Helmet
        title={modifiedParams.title}
        titleTemplate={titleTemplate ? `| ${titleTemplate}` : ""}
      >
        <html lang={siteLanguage ? siteLanguage : "en"} />
        <link rel="canonical" href={`${siteUrl}${pathname}`} />
        <meta name="description" content={modifiedParams.description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Facebook  */}
        <meta property="og:locale" content={siteLocale} />
        <meta property="og:url" content={`${siteUrl}${pathname}`} />
        <meta property="og:type" content={article ? "article" : "website"} />
        <meta property="og:title" content={modifiedParams.title} />
        <meta property="og:description" content={modifiedParams.description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={modifiedParams.description} />

        {/* Twitter */}
        <meta name="twitter:creator" content={twitterUsername} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={modifiedParams.title} />
        <meta name="twitter:description" content={modifiedParams.description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content={modifiedParams.description} />
      </Helmet>
    </>
  )
}
