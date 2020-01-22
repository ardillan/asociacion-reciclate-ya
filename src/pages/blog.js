import React from "react"
import { ContactInfo } from "../hooks/get-featured-post"

import Layout from "../components/layout"
import Aside from "../components/aside"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <section>
        <h1>Blog</h1>
        <Aside />
        <ContactInfo />
      </section>
    </Layout>
  )
}
