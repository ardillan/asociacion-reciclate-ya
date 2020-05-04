import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Aside from "../components/aside"

export default () => {
  return (
    <Layout>
      <SEO title="Salidas | Recíclate YA" />
      <section className="columns">
        <div className="column is-12">
          <img
            style={{ height: 300, width: `100%`, objectFit: `cover` }}
            alt="Fotografía destacada"
            src="https://images.unsplash.com/photo-1548929697-ce5c7963617e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500"
          />
        </div>
      </section>
      <section className="columns is-multiline main-content">
        <Aside />
        <div className="column is-9">
          <h1>Salidas en bicicleta</h1>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
          </p>
          <h2>¿Por dónde realizamos las salidas?</h2>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
          </p>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
          </p>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
          </p>
        </div>
      </section>
    </Layout>
  )
}
