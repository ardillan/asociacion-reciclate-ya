import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Aside from "../components/aside"

export default () => {
  return (
    <Layout>
      <SEO title="Recíclate Ya | Cómo colaborar" />
      <section className="columns">
        <div className="column is-12">
          <img
            style={{ height: 300, width: `100%`, objectFit: `cover` }}
            alt="Fotografía destacada"
            src="https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
          />
        </div>
      </section>
      <section className="columns is-multiline">
        <Aside />
        <div className="column is-9">
          <h1>¿Cómo puedo colaborar?</h1>
          <p>
            {" "}
            Donando una bici de las que lleva años en un trastero sin usarse
            (esté bien o esté mal). De este modo pasará a circular todos los
            días y algún asociado podrá disfrutar de tu donación.
          </p>
          <p>
            Acompañándonos en los distintos actos que realiza la Asociación:
            Salidas en Bici, charlas...
          </p>
          <p>
            Comprando papeletas para el sorteo de una bici que realizamos todos
            los años.
          </p>
        </div>
      </section>
    </Layout>
  )
}
