import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const Header = ({ data }) => {
  const logo = useStaticQuery(graphql`
    {
      file(name: { eq: "logotipo" }) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header id="main-header">
      <nav>
        <ul>
          <li style={{ height: 25, marginTop: -5 }}>
            <Link to="/">
              {" "}
              <Img fixed={logo.file.childImageSharp.fixed} />
            </Link>
          </li>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/la-asociacion">La asociación</Link>
          </li>
          <li>
            <Link to="/salidas">Salidas</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
Header.defaultProps = {
  siteTitle: `Asocación Recíclate Ya`,
}
export default Header
