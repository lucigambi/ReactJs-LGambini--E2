import React from 'react'
import './Item.css'
import ItemCount from '../item-count/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {

  

  const { id, image, title, description, price } = producto

  return (
    <div className="card-item">
      <h3>{title}</h3>
      <div className="item-image-container">
      <img className="item-image" src={image} alt={`foto del producto ${title}`} />
    </div>
      <p className="item-description">{description}</p>
      <p className="item-price">${price}</p>
      
      <Link className="btn" to={`/detalle/${id}`}>VER DETALLES</Link>
      <ItemCount />
    </div>
  )
}

export default Item