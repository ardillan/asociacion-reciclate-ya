import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {
  const data = useStaticQuery(graphql`
    {
      nuestrosAmigosJson {
        data {
          name
          image
          url
        }
      }
      allFile(filter: { relativePath: { regex: "/nuestros-amigos/" } }) {
        edges {
          node {
            name
            relativePath
            childImageSharp {
              fluid(maxHeight: 300, quality: 100) {
                src
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="La asociación" />
      <section className="columns">
        <div className="column is-12">
          <img
            style={{ height: 300, width: `100%`, objectFit: `cover` }}
            alt="Fotografía destacada"
            src="https://images.unsplash.com/photo-1559348349-86f1f65817fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          />
        </div>
      </section>
      <section className="columns is-multiline">
        <div className="column is-12">
          <h1>Nuestros amigos</h1>
        </div>
        {data.nuestrosAmigosJson.data.map((value, index) => {
          const image = data.allFile.edges.find(
            element =>
              element.node.childImageSharp.fluid.originalName === value.image
          )

          return (
            <div className="column is-4" key={index}>
              <a href={value.url} target="_blank" rel="noopener noreferrer">
                <Img fluid={image.node.childImageSharp.fluid} />
              </a>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}
