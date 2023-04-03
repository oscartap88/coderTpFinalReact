
import { useEffect, useState } from 'react'
import { Form, Link, Route, Routes } from 'react-router-dom'
import axios from "axios";
import './App.css'
import Button from './components/Button'
import Navbar from './components/Navbar'
import TodosLosTragos from './components/TodosLosTragos';
import Home from './components/Home';
import ProductItem from './components/ProductItem';
import Preparaciones from './components/Preparaciones';
import CartWidget from './components/CartWidget';
import { CartContext } from './contexts/CartContext';
import db from "../db/firebase-config.js";
import { collection, getDocs } from 'firebase/firestore';

function App() {

    


    const [usuario, setUsuario] = useState([]);

    const Productos = async () => {
      const res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
      setUsuario(res.data.drinks);
    }
    useEffect(() =>{
      Productos();  
    }, []);

    const [contador , setContador] = useState (0);
    const suma = () => setContador(contador +1);
    const resta = () => setContador(contador -1);
    const reset = () => setContador(0);
    const listo= ()=> alert("Dirigete a la seccion del carrito, para finalizar tu compra.")
    
  

  return (
    
    <div>
      
      <Navbar />
      <Link to="/">
      <h1>Cóctel La Latas.</h1>
      </Link>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<TodosLosTragos usuario={usuario}/>} />
        <Route path="products/:id" element={<ProductItem usuario={usuario}/>} />
        <Route path="/preparation" element={<Preparaciones usuario={usuario}/>} />
        <Route path="/cart" element={<CartWidget />}/>
        
      </Routes>

      <h3>Selecciona la Cantidad que desas comprar:</h3>
      <h2>{contador}</h2>
      <button onClick={suma}>+</button>
    <button onClick={resta}>-</button>
    <button onClick={reset}>Reset</button>
    <button onClick={listo}>Comprar</button>
      

      
    
    </div>
  )
}

export default App


 