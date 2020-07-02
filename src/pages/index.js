import React from "react"
import styled from "styled-components"

import Layout from "./../components/Layout"

import Nav from "./../components/Nav"
import Hero from "./../components/sections/Hero"
import About from "./../components/sections/About"
import FeaturedProjects from "./../components/sections/FeaturedProjects"
import Contact from "./../components/sections/Contact"
import Footer from "./../components/Footer"

export default function Home() {
  return (
    <Layout>
      <Nav />
      <Hero />
      <FeaturedProjects />
      <About />
      <Contact />
      <Footer />
    </Layout>
  )
}
