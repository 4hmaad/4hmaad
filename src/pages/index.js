import React from "react"
import Layout from "./../components/Layout"
import Hero from "./../components/Hero"
import FeaturedProjects from "./../components/FeaturedProjects"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
    </Layout>
  )
}
