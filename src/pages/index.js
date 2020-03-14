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
        <div className="main-content">
          <Aside />
          <section className="column is-9">
            <div className="featured-content">
              <h2>Asociación Recíclate YA</h2>
              <p>
                Somos una asociación sin ánimo de lucro que trata de{" "}
                <strong>mejorar la movilidad</strong> de nuestro entorno
                mediante el uso de la <strong>movilidad sostenible</strong>.
                Mantenemos en uso bicicletas que nos ceden, las ponemos a punto
                y{" "}
                <strong>
                  se las prestamos a la gente: lo llamamos Bicicleteca
                </strong>
                ; una "biblioteca" de bicis.
              </p>
            </div>
            <h1>Entradas</h1>
            <PostsList length="2" category="all" />
          </section>
        </div>
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
