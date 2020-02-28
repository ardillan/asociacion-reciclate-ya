import React from "react"

const footer = () => {
  return (
    <footer>
      {new Date().getFullYear()}, Hecho con WordPress y GatsbyJS
      {` `}
      <p>
        <small>¿Te gusta esta web?</small>{" "}
        <small>
          <a href="http://github.com/ardillan/asociacion-reciclate-ya">
            Recíclala y crea la tuya propia
          </a>
        </small>
      </p>
    </footer>
  )
}

export default footer
