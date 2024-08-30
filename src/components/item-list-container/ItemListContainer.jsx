import React, { useContext, useEffect, useState } from 'react'
import './ItemListContainer.css'
import Item from './item/Item'
import Spinner from './spinner/Spinner'
import { useParams } from "react-router-dom"
import { CartContext } from '../../context/CartContext'
import { Cart } from '../Cart/Cart'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  const { contexto, cart} = useContext(CartContext)

  const { categoryName } = useParams()

console.log("CERRITO", cart)

  useEffect(() => {

    setCargando(true)

    if (categoryName) {
      fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then(data => data.json())
        .then(res => setProductos(res))
        .catch(error => console.error('Error fetching data:', error))
        .finally(() => setCargando(false))

    } else {

      fetch("https://fakestoreapi.com/products")
        .then(data => data.json())
        .then(res => setProductos(res))
        .catch(error => console.error('Error fetching data:', error))
        .finally(() => setCargando(false))
    }

  }, [categoryName])

  if (cargando) {
    return (
      <div className="loading-container">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="item-list-container">
      
      {productos.map((el) => (
        <Item key={el.id} producto={el} />
      ))}
      <h3 onClick={()=>setCart([1,2,3,4,5])}>{contexto}</h3>
    </div>
  )
}

export default ItemListContainer