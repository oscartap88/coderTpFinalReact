import React, { useEffect, useState } from 'react'
import styles from './card.module.css'
import { Form, Link } from 'react-router-dom'
import db from "../../../db/firebase-config.js"
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'


const Card = ({user}) => {

  const [inputTitle, setInputTitle] = useState('')
  const [inputPrice, setInputPrice] = useState('')
  const [inputCantidad, setInputCantidad] = useState('')
  const [total, setTotal] =useState('')
  

  const addItem = async (e) =>{
    e.preventDefault()
    const compra = {
      title: inputTitle,
      price: inputPrice,
      cantidad: inputCantidad,
    }
    const carritoCollectionRef = collection(db , "compras");
    await addDoc(carritoCollectionRef, compra)
    const carritoCollection = await getDocs(carritoCollectionRef);
    setCarrito( carritoCollection.docs.map((doc) => ({...doc.data(), id: doc.id})))
    
  
   
    setTitle('');
    setPrice('');
  }

  const suma = () =>{
    const valor1 = inputPrice
  const valor2 = inputCantidad
    return (valor1*valor2)
  }
 


  const [carrito, setCarrito] = useState([]);
  const carritoCollectionRef = collection(db, "compras");

  const getCarritos = async () =>{
    const carritoCollection = await getDocs(carritoCollectionRef);
    setCarrito( carritoCollection.docs.map((doc) => ({...doc.data(), id: doc.id})))
  };

  
  useEffect(() => {
    getCarritos();
  }, []);
  
  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, "items");

  const getItems = async () =>{
    const itemsCollection = await getDocs(itemsCollectionRef);
    setItems(itemsCollection.docs.map((doc) => ({...doc.data(), id: doc.idDrink})))
};

useEffect(() => {
  getItems();
}, []);


 
const comprar = () => alert("Redirigiendo a la seccion del carrito, para finalizar tu compra.")


  return (
    <div>
      {items.map(item =><div className={styles.tarjeta}>
    <h2>Nombre del Trago</h2>
    <h3>{item.strDrink}</h3>
    <img src={item.strDrinkThumb} alt="" width={300} />
    <h3>Categoria:{item.strCategory}</h3>
    <h3>Precio: ${item.price}</h3>
    <Link to={`${item.idDrink}`}>
    <button>+Info</button>
    </Link>
    <h3>Complete el formulario con los datos del Cóctel:</h3>
    <form onSubmit={addItem}>
      <input type="text" value={inputTitle} placeholder='title' onChange={(e) => setInputTitle(e.target.value)} />
      <input type="text" value={inputPrice} placeholder='price' onChange={(e) => setInputPrice(e.target.value)} />
      <input type="text" value={inputCantidad} placeholder='cantidad' onChange={(e) => setInputCantidad(e.target.value)} />
      <h4>${suma()}</h4>
      <button type="submit">Comprar</button>
    </form>
    <Link to='/cart'>
      <button onClick={comprar}>Mi Carrito</button>
      </Link>
      </div>)}
    </div>
    
  )
}

export default Card