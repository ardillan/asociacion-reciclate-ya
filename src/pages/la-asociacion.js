import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Aside from "../components/aside"

export default () => {
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
      <section className="columns is-multiline main-content">
        <Aside />
        <div className="column is-9">
          <h1>La asociación</h1>
          <p>
            Somos una asociación sin ánimo de lucro que fomentamos el reciclaje
            y el uso de la bicicleta como medio de transporte habitual.
          </p>
          <ul>
            <li>Préstamo de bicicletas y taller</li>
            <li>Educación vial</li>
            <li>Integración social.</li>
            <li>Salidas cicloturistas</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
