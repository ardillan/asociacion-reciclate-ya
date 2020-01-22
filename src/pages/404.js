import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: No encontrado" />
    <h1>No encontrado</h1>
    <p>Parece que esta página no existe</p>
  </Layout>
)

export default NotFoundPage
