import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { useState } from "react"

const Header = () => {
  const [isActive, setisActive] = useState(false)

  const logo = useStaticQuery(graphql`
    {
      file(name: { eq: "logotipo" }) {
        childImageSharp {
          fixed(height: 30, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header id="main-header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <Img fixed={logo.file.childImageSharp.fixed} />
          </Link>
          <a
            onClick={() => {
              setisActive(!isActive)
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
          >
            {" "}
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-start">
            <Link className="navbar-item" to="/la-asociacion">
              La asociación
            </Link>
            <Link className="navbar-item" to="/salidas">
              Salidas
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/nuestros-amigos">
              Nuestros amigos
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.defaultProps = {
  siteTitle: `Asocación Recíclate Ya`,
}
export default Header
