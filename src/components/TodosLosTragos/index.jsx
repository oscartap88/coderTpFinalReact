import React from 'react'
import Card from '../Card'

const TodosLosTragos = ({usuario}) => {
  return (
    <>
    <h2>Menú de Tragos:</h2>
     {usuario.map((user) =>(
      <Card key={user.idDrink} user={user}/>
      //<div> key={user.idDrink} {user.strDrink}</div>
       
     ))} 
    </>
  )
}
 

export default TodosLosTragos