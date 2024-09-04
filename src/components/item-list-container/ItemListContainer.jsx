import React, { useContext, useEffect, useState } from 'react'
import './ItemListContainer.css'

import Item from './item/Item'
import Spinner from './spinner/Spinner'
import { useParams } from "react-router-dom"
import { CartContext } from '../../context/CartContext'
import { db } from '../../services/firebaseConfig';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import ItemListBanner from './ItemListBanner'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const { contexto } = useContext(CartContext)
  const { categoryName } = useParams()

  useEffect(() => {
    setCargando(true)

    const fetchData = async () => {
      try {
        let querySnapshot
        if (categoryName) {
          const prodsPorCat = query(
            collection(db, "productos"),
            where("category", "==", categoryName),
            orderBy("orderIndex") 
          )
          querySnapshot = await getDocs(prodsPorCat)
        } else {
          const productosRef = query(
            collection(db, "productos"),
            orderBy("orderIndex") 
          );
          querySnapshot = await getDocs(productosRef)
        }

        const productosList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setProductos(productosList)
      } catch (error) {
        console.error("Error fetching products: ", error)
      } finally {
        setCargando(false)
      }
    };

    fetchData();
  }, [categoryName])

  if (cargando) {
    return (
      <div className="loading-container">
        <Spinner />
      </div>
    )
  }

  return (
    <div>
    <ItemListBanner />
    <div className="item-list-container">
      
      {productos.length === 0 ? (
        <p>No se encontraron productos para esta categoría</p>
      ) : (
        productos.map((el) => (
          <Item key={el.id} producto={el} />
        ))
      )}
      
      </div>
    </div>
  )
}

export default ItemListContainer
