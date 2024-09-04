import React, { useContext } from 'react';
import './ItemDetail.css'
import ItemCount from '../item-count/ItemCount'
import { CartContext } from '../../../context/CartContext'


export const ItemDetail = ({ producto, mostrarSiguiente, mostrarAnterior }) => {

  const { contexto, agregarAlCarrito } = useContext(CartContext)

  const { id, image, title, price, detailDescription, category } = producto

  const handleComprar = (count) => {
    agregarAlCarrito({ ...producto, cantidad: count })
  }

  return (
    <div className="item-detail-card">
      
     
      <div className="item-detail-image-container">
        <img className="item-detail-image" src={image} alt={`foto del producto ${title}`} />
      </div>
      <div className="btn-container">
        <button className="btn-nav-items" onClick={mostrarAnterior}>Ver anterior</button>
        <button className="btn-nav-items" onClick={mostrarSiguiente}>Ver siguiente</button>
      </div>
      <p className="item-title">{title}{" / "} {category}{" / "} ${price}</p>
   
      <p className="item-detail-description">{detailDescription}</p>
     
      
      <ItemCount id={id} handleComprar={handleComprar} />
    
    
    </div>
  )
}
