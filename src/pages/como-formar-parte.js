import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Aside from "../components/aside"

export default () => {
  return (
    <Layout>
      <SEO title="Blog | Recíclate Ya" />
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
          <h1>¿Cómo puedo formar parte?</h1>

          <p>
            Asociándote, ser socio cuesta 10€ al año. De esta manera podrás
            disfrutar de nuestra <strong>bicicleteca</strong>
          </p>
        </div>
      </section>
    </Layout>
  )
}
