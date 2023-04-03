import React from 'react'
import { useParams } from 'react-router-dom';


const Preparaciones = ({usuario}) => {
  const {id} = useParams() ;
    const user = usuario.find((user) => user.idDrink == id);
    
  return (
  <div>
    <h2>Elegi la receta que mas te guste y compartila!</h2>
    {usuario.map((user) =>{
      return <h3>Nombre del trago e Instrucciones: {user.strDrink} {user.strInstructionsES}</h3>
      
      
    })}
  </div>
  )
}

export default Preparaciones