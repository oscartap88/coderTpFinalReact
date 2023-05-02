import React from 'react'
import { useParams } from 'react-router-dom'


const ProductItem = ({usuario}) => {
    const {id} = useParams() ;
    const user = usuario.find((user) => user.idDrink == id);
   
    
  return (
  <div>
      <h2>Nombre del Trago</h2>
      <h3>{user.strDrink}</h3>
      <img src={user.strDrinkThumb} alt="" width={300} />
      <h3>Categoria:{user.strCategory}</h3>
      <h3>Tipo de Bebida:{user.strAlcoholic}</h3>
      <h3>{user.strGlass}</h3>
      <h3>Ingredientes:</h3>
      <h4>{user.strIngredient1},{user.strIngredient2},{user.strIngredient3},{user.strIngredient4},{user.strIngredient5},{user.strIngredient6}</h4>
    
      
      </div>
  )
  
}

export default ProductItem