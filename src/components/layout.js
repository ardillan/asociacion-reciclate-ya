import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import "../css/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="background-decoration"></div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <main>{children}</main>

        <footer>
          {new Date().getFullYear()}, Hecho con WordPress y GatsbyJS
          {` `}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
