import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <aside className="column is-3">
      <h2>
        <span role="img" aria-label="Icono de una bicicleta">
          🚲
        </span>{" "}
        Recíclate Ya
      </h2>
      <p>
        {" "}
        Es una asociación que fomentamos el reciclaje y el uso de la bicicleta
        como medio de transporte habitual.
      </p>
      <h2>
        <span role="img" aria-label="Icono de una bicicleta">
          ✏️
        </span>{" "}
        Información
      </h2>

      <ul>
        <li>
          <Link to="/como-formar-parte">▸ ¿Cómo puedo formar parte?</Link>
        </li>
        <li>
          <Link to="/como-colaborar">▸ ¿Cómo puedo colaborar?</Link>
        </li>
        <li>
          <Link to="/actividades">▸ Actividades que realizamos</Link>
        </li>
      </ul>

      <h2>
        <span role="img" aria-label="Icono de una bicicleta">
          🏠
        </span>{" "}
        ¿Dónde estamos?
      </h2>
      <p>Nuestro local está situado en Torrelavega, Calle Carrera nº 12</p>
      <p>
        {" "}
        <a
          href="https://www.openstreetmap.org/node/5585366020#map=20/43.35039/-4.04636&layers=C"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver en el mapa
        </a>
      </p>
      <h2>
        <span role="img" aria-label="Icono de una bicicleta">
          ⏰
        </span>{" "}
        Horario
      </h2>
      <p>Martes y Jueves de 19:00 a 21:00</p>
    </aside>
  )
}
