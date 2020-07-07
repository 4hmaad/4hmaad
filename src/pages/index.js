import React from "react"
import styled from "styled-components"

import Layout from "./../components/Layout"
import SEO from "./../components/Seo"

import Nav from "./../components/Nav"
import Hero from "./../components/sections/Hero"
import About from "./../components/sections/About"
import FeaturedProjects from "./../components/sections/FeaturedProjects"
import Contact from "./../components/sections/Contact"
import Footer from "./../components/Footer"

import useSiteMetadata from "../hooks/useSiteMetaData"

export default function Home() {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata()

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={`${siteUrl}${image}`}
        siteUrl={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Nav />
      <Hero />
      <About />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </Layout>
  )
}
