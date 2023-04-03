import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom';


const CartWidget = () => {
  const [nombre, setNombre] = useState("")
  const setInputs = (e) =>{
    setNombre(e.target.value);
  }
  const handlesubmit = (e)=> {
    e.preventDefault();
    alert("Formulario enviado")
  }

  const [items, setItems] = useState([])
    const itemsCollectionRef = collection(db, "items")

    const getItems = async () => {
    const itemsCollection = await getDocs(itemsCollectionRef);
    setItems(
      itemsCollection.docs.map((doc) =>({...doc.data(), id: doc.id}))
    );
    };

    useEffect(() =>{
      getItems();
    }, []);

  return (
    <div>
      <h3>Completa estos datos , para finalizar tus compras.</h3>
      
      <h3>Dejanos tus comentarios, sobre que te parecio nuestra página.</h3>
      <textarea name="mensajes" cols="150" rows="10"></textarea>
      {items.map(item=> <h3>{item.price}</h3>)}
      
    </div>
  )
}

export default CartWidget