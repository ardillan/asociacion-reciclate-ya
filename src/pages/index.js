import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Aside from "../components/aside"
import SEO from "../components/seo"
import FeaturedPosts from "../components/featuredPosts"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <FeaturedPosts />
      <Aside />
      <section className="main-content">
        <div className="featured-content">
          <h2>Asociación Recíclate YA</h2>
          <p>
            Somos una asociación sin ánimo de lucro que trata de mejorar la
            movilidad de nuestro entorno mediante el uso de la movilidad
            sostenible. Mantenemos en uso bicicletas que nos ceden, las ponemos
            a punto y se las prestamos a la gente: lo llamamos Bicicleteca; una
            "biblioteca" de bicis.
          </p>
        </div>
        <h1>Entradas</h1>
        <ul className="featured-posts">
          {data.allWordpressPost.edges.slice(0, 2).map((post, index) => {
            return (
              <li key={index}>
                <article className="card">
                  <Link to={`/${post.node.slug}`}>
                    <header>
                      <img
                        src={post.node.jetpack_featured_media_url}
                        alt={post.node.title}
                      />
                      <h2
                        dangerouslySetInnerHTML={{ __html: post.node.title }}
                      />
                    </header>
                    <div
                      className="excerpt"
                      dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                    />
                  </Link>
                </article>
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
          jetpack_featured_media_url
          categories {
            name
          }
        }
      }
    }
  }
`
