import React from "react"

const footer = () => {
  return (
    <footer>
      {new Date().getFullYear()}, Hecho con{" "}
      <a href="http://wordpress.com" target="_blank" rel="noopener noreferrer">
        WordPress
      </a>{" "}
      y{" "}
      <a
        href="https://www.gatsbyjs.org/docs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        GatsbyJS
      </a>
      {` `}
      <p>
        <small>¿Te gusta esta web?</small>{" "}
        <small>
          <a
            href="http://github.com/ardillan/asociacion-reciclate-ya"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: `none` }}
          >
            Recíclala y crea la tuya propia
          </a>
        </small>
      </p>
    </footer>
  )
}

export default footer
