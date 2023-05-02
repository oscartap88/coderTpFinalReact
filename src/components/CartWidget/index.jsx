import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Form, Link, useParams } from 'react-router-dom';
import db from "../../../db/firebase-config.js";
import styles from './cart.module.css'



const CartWidget = () => {

  

  const [carrito, setCarrito] = useState([]);
  const carritoCollectionRef = collection(db , "compras");

  const getCarritos = async () =>{
    const carritoCollection = await getDocs(carritoCollectionRef);
    setCarrito( carritoCollection.docs.map((doc) => ({...doc.data(), id: doc.id})))
  };

  const deleteItem = async (id) => {
    const docRef = doc(db , "compras", id)
    await deleteDoc(docRef);
    getCarritos();
  }

 

  useEffect(() => {
    getCarritos();
  }, []);
  

  const [nombre, setNombre] = useState ("");
  const [apellidos, setApellidos] = useState ("");
  const [dni, setDni] = useState ("");
  
  
  

return (
  <div>
    <h2>Lista de compras:</h2>

    {carrito.map(carri => 
    <div>
    <h2 key={carri.id}>Nombre del Cóctel: {carri.title}</h2>
    <h2>Precio: ${carri.price}</h2>
    <h2>Cantidad: {carri.cantidad}</h2>
    <img src={carri.imagen} alt="" width={300} />
    <button className={styles.boton} onClick={() => deleteItem(carri.id)}>Eliminar Carrito</button>
   
    </div>
    )}



    

   <h2>LLene el formulario con sus datos para poder completar su Compra</h2>
    <form onSubmit={() => alert ("Tu compra fue exitosa")}>
    <input type="text" name="nombres" placeholder='Nombres' value= {nombre} onChange={(e)=> setNombre(e.target.value)}/>
    <input type="text" name="apellidos" placeholder='Apellidos' value= {apellidos} onChange={(e)=> setApellidos(e.target.value)}/>
    <input type="number" name="dni" placeholder='DNI' value= {dni} onChange={(e)=> setDni(e.target.value)}/>
    
    <button>Finalizar Compra!</button>

    

    <h2>Deja tus comentarios:</h2>
    <textarea name="mensajes" id="" cols="150" rows="10"></textarea>
    <button onClick={()=>alert("Muchas Gracias. Por tus comentarios!")}>Enviar</button>
  </form>
    
    </div>
)




}

export default CartWidget