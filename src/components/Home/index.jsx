import React from 'react'
import Button from '../Button'
import { Form, Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <h2>En esta página vas a encontrar los mejores Tragos,para disfrutar una gran fiesta!</h2>
      
      <h3>Que esperas! No pierdas mas el tiempo, te invito a que recorras todo nuestro sitio web.</h3>

      <h3>Pero te vamos a dar unos tips!</h3>

      <h3>Arranca primero por Todos los Tragos haciendo click en el boton, que esta justo abajo.</h3>
      <Link to="/products"><button>Todos los Tragos</button></Link>

      <h3>No te olvides de pasar por Ingredientes!</h3>
      <p>Ahi vas a descubrir las mejores recetas para compartir con amigos.</p>
      <Link to="/preparation"><button>Preparaciones</button></Link>
      </div>
  )
}

export default Home