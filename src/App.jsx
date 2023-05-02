
import { useEffect, useState } from 'react'
import {  Link, Route, Routes } from 'react-router-dom'
import axios from "axios";
import './App.css'
import Navbar from './components/Navbar'
import TodosLosTragos from './components/TodosLosTragos';
import Home from './components/Home';
import ProductItem from './components/ProductItem';
import Preparaciones from './components/Preparaciones';

import { CartContext } from './contexts/CartContext';
import db from "../db/firebase-config.js";
import { collection, getDocs } from 'firebase/firestore';

import CartWidget from './components/CartWidget';



function App() {

    
    const [usuario, setUsuario] = useState([]);
    const [loading, setLoading] = useState(true)

    const Productos = async () => {
      const res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
      setUsuario(res.data.drinks);
      setLoading(false)
    }
    useEffect(() =>{
      Productos();  
    }, []);

    if (loading) {
      return <h1>Loading...</h1>;
    }

  

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
      
      
 
    
    </div>
  )
}

export default App


 