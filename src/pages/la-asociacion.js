import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Aside from "../components/aside"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/historia/" } }) {
        edges {
          node {
            name
            id
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
      <section className="columns is-multiline main-content">
        <Aside />
        <div className="column is-9">
          <h1>La asociación</h1>
          <p>
            Somos una asociación sin ánimo de lucro que{" "}
            <strong>fomentamos el reciclaje y el uso de la bicicleta</strong>{" "}
            como medio de transporte habitual.
          </p>
          <ul>
            <li>Préstamo de bicicletas y taller</li>
            <li>Educación vial</li>
            <li>Integración social.</li>
            <li>Salidas cicloturistas</li>
          </ul>
          <p>
            Con esta página web queremos dar una{" "}
            <strong>mayor transparencia</strong> a nuestra asociación e ir
            informando en nuestro blog de las actividades que vayamos
            realizando.
          </p>
          <p>
            También queremos que sirva para animar y apoyar a otros colectivos a
            crear asociaciones similares en otras localidades.
          </p>
          <h2>
            <a href="#emplazamiento" id="emplazamiento" className="anchor">
              Emplazamiento
            </a>
          </h2>
          <p>Nuestro local está situado en: </p>
          <address>
            Calle Carrera 8, bajo (pegado a la plaza de la Llama), en
            Torrelavega, Cantabria, España.
          </address>
          <br />
          <h2>
            <a href="#horario" id="horario" className="anchor">
              Horario
            </a>
          </h2>
          <p>
            Abrimos los <strong>martes</strong> y <strong>jueves</strong> de
            19:00 horas a 21:00 horas.
          </p>
          <h2>
            {" "}
            <a href="#contacto" id="contacto" className="anchor">
              Contacto
            </a>
          </h2>
          <ul>
            <li>
              <a
                href="tel:+34648115693"
                target="_blank"
                rel="noopener noreferrer"
              >
                +34 648 11 56 93
              </a>
            </li>
            <li>
              <Link to="/">www.reciclateya.com</Link>
            </li>
            <li>
              <a
                href="https://www.facebook.com/reciclateya/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook/reciclateya
              </a>
            </li>
          </ul>
          <h2>
            {" "}
            <a href="#formar_parte" id="formar_parte" className="anchor">
              ¿Cómo puedo formar parte?
            </a>
          </h2>
          <p>
            Haciéndote socio, la <strong>cuota anual de socio es de 10€</strong>{" "}
            y un socio hace partícipe a toda su familia. De esta manera, podrás
            beneficiarte de los servicios que proporcionamos y participar en
            todas nuestras actividades.
          </p>
          <h2>
            {" "}
            <a href="#colaborar" id="colaborar" className="anchor">
              ¿Cómo puedo colaborar?
            </a>
          </h2>
          <p>
            Donando una bici que no uses, no importa su estado. La pondremos a
            punto y algún asociado podrá disfrutar de ella. Aceptamos recambios,
            herramientas, cascos, candados...
          </p>
          <p>
            Apoyando las actividades que realice la asociación y proponiendo
            otras.
          </p>
          <p>
            Comprando papeletas para el sorteo de una bici clásica que
            realizamos todos los años.
          </p>
        </div>
      </section>
      <section className="columns is-multiline main-content">
        <div className="column is-9 is-offset-3">
          <h1>Un poco de historia</h1>
          <p>
            La Asociación Reciclate YA fue constituida el 15 de diciembre de
            2016.
          </p>
          <p>Está inscrita en:</p>
          <ul>
            <li>Registro de Asociaciones de Cantabria con el no 6319.</li>
            <li>
              Registro Municipal de Asociaciones de Torrelavega con el no 576.
            </li>
          </ul>
          <p>
            Después de rehabilitar el local que utilizamos, C/ Carrera no 8 bajo
            en Torrelavega (abrimos martes y jueves de 19:00 a 21:00 horas) se
            presentó la Asociación formalmente el 1 de julio de 2017.
          </p>
          <p>
            Durante estos años, el número de socios ha ido creciendo, así como
            el número de bicicletas prestadas. En enero de 2020 contábamos con
            155 socios y 110 bicicletas prestadas.
          </p>
          <div
            style={{
              display: `grid`,
              columnGap: 20 /* [1] Add some gap between rows and columns */,
              rowGap: 20,
              gridTemplateColumns: `repeat( auto-fill, minmax( 200px, 1fr ) )` /* [2] Make columns adjust according to the available viewport */,
              gridAutoRows: 250,
              marginBottom: 20,
            }}
          >
            {data.allFile.edges.map(value => {
              return <Img fluid={value.node.childImageSharp.fluid} />
            })}
          </div>
          <p>
            Las actividades más destacadas realizadas durante estos años han
            sido:
          </p>
          <ol>
            <li>
              Puesta en marcha del servicio de préstamo de bicicletas, “la
              bibicleteca”.
            </li>
            <li>
              Puesta en marcha del servicio de taller de bicicletas. DIY (hazlo
              tú mismo, cuentas con ayuda). Disponemos de herramientas y
              recambios.
            </li>
            <li>
              Numerosas salidas cicloturistas. Suances, las Caldas, Polanco...
            </li>
            <li>
              Circuito de educación vial en la feria Recíclate Torrelavega 2017
              y 2018
            </li>
            <li>
              Convenio de colaboración con la Fundación Agricoltores Solidarios
              y la Asociación de Sordos del Besaya (la bicicleta como elemento
              integrador con personas migrantes y con personas sordas).
            </li>
            <li>
              Recuperación de 18 bicis en la Universidad de Cantabria que no
              estaban siendo utilizadas y ahora las utilizan nuestros socios.
            </li>
            <li>
              Organización de “30 días en bici Torrelavega” con numerosas
              actividades (abril 2019).
            </li>
            <li>
              2 Talleres de Reparación de bicis y movilidad sostenible dentro
              del programa PROVOCA del Gobierno de Cantabria en 2019.
            </li>
            <li>
              Organización de la Feria de reciclaje y consumo responsable
              Recíclate Torrelavega 2019 y 2020.
            </li>
            <li>
              Participación en el programa radiofónico Torrelavega ABIERTA.
            </li>
            <li>
              En 2020 hemos organizado el cuarto sorteo de una bicicleta clásica
              en beneficio de la asociación.
            </li>
          </ol>
        </div>
      </section>
    </Layout>
  )
}
