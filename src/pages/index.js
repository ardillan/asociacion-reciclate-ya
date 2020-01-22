import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Aside from "../components/aside"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="main-banner">
        <h1>Main banner</h1>
      </section>
      <Aside />
      <section className="main-content">
        <h1>Entradas</h1>
        <ul>
          {data.allWordpressPost.edges.map((post, index) => {
            return (
              <li key={index}>
                <Link to={`/${post.node.slug}`}>{post.node.slug}</Link>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allWordpressPost {
      totalCount
      edges {
        node {
          guid
          title
          slug
          date
          status
          excerpt
          sticky
          categories {
            name
          }
        }
      }
    }
  }
`
