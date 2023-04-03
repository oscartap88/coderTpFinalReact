import React from 'react'
import styles from './card.module.css'
import { Link } from 'react-router-dom'

const Card = ({user}) => {
  return (
    
    <div className={styles.tarjeta}>
    <h2>Nombre del Trago</h2>
    <h3>{user.strDrink}</h3>
    <img src={user.strDrinkThumb} alt="" width={300} />
    <h3>Categoria:{user.strCategory}</h3>
    <h3>Precio:</h3>
    <Link to={`${user.idDrink}`}>
    <button>+Info</button>
    </Link>
    </div>
    
  )
}

export default Card