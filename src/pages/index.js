import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Aside from "../components/aside"
import SEO from "../components/seo"
import FeaturedPosts from "../components/featuredPosts"
import PostsList from "../components/postList"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="columns is-multiline">
        <FeaturedPosts />
        <Aside />
        <section className="column is-9">
          <div className="featured-content">
            <h2>Asociación Recíclate YA</h2>
            <p>
              Somos una asociación sin ánimo de lucro que trata de mejorar la
              movilidad de nuestro entorno mediante el uso de la movilidad
              sostenible. Mantenemos en uso bicicletas que nos ceden, las
              ponemos a punto y se las prestamos a la gente: lo llamamos
              Bicicleteca; una "biblioteca" de bicis.
            </p>
          </div>
          <h1>Entradas</h1>
          <PostsList category="all" />
          <h1>Salidas en bici</h1>
          <PostsList category="salida" />
        </section>
      </div>
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
          jetpack_featured_media_url
          categories {
            name
          }
        }
      }
    }
  }
`
