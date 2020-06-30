import React from "react"
import Layout from "./../components/Layout"
import Hero from "./../components/Hero"
import About from "./../components/About"
import FeaturedProjects from "./../components/FeaturedProjects"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
      <About />
    </Layout>
  )
}
