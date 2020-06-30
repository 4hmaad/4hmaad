import React from "react"
import Layout from "./../components/Layout"
import Hero from "./../components/sections/Hero"
import About from "./../components/sections/About"
import FeaturedProjects from "./../components/sections/FeaturedProjects"
import Contact from "./../components/sections/Contact"
import Footer from "./../components/Footer"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
      <About />
      <Contact />
      <Footer />
    </Layout>
  )
}
