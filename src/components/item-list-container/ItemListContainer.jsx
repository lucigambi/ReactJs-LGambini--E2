import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import Item from './item/Item'
import Spinner from './spinner/Spinner'
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  const { categoryName } = useParams()

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
    </div>
  )
}

export default ItemListContainer