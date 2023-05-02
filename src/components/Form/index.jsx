import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
import db from '../../../db/firebase-config'

const Form = () => {

  const [inputTitle, setInputTitle] = useState('')
  const [inputPrice, setInputPrice] = useState('')
  const [inputCantidad, setInputCantidad] = useState('')

  const addItem = async (e) =>{
    e.preventDefault()
    const compra = {
      title: inputTitle,
      price: inputPrice,
      cantidad: inputCantidad,
    }
    const carritoCollectionRef = collection(db , "compras");
    await addDoc(carritoCollectionRef, compra)
    setTitle('');
    setPrice('');
  }


  return (
    <form onSubmit={addItem}>
      <input type="text" value={inputTitle} placeholder='title' onChange={(e) => setInputTitle(e.target.value)} />
      <input type="text" value={inputPrice} placeholder='price' onChange={(e) => setInputPrice(e.target.value)} />
      <input type="text" value={inputCantidad} placeholder='cantidad' onChange={(e) => setInputCantidad(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form