import React from "react"
import { MDXProvider } from "@mdx-js/react"
import mdxComponents from "./src/components/typography/mdxComponents"

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={mdxComponents}>{element}</MDXProvider>
)
