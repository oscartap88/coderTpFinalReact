import React from 'react'

const count = () => {

    const [contador, setContador] = useState (0);

const suma = () => setContador(contador +1)
const resta = () => setContador(contador -1)
const reset = () => setContador(0)
const comprar = () => alert("Dirigete a la seccion del carrito, para finalizar tu compra.")
  return (
    <div>
    <h3>Selecciona la cantidad que deseas comprar:</h3>
    <h2>{contador}</h2>
    <button onClick={suma}>+</button>
    <button onClick={resta}>-</button>
    <button onClick={reset}>Reset</button>
    <Link to='/cart'>
    <button onClick={comprar}>Comprar!</button>
    </Link>
    </div>
  )
}

export default count