import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {



  const { id, image, title, price, category } = producto

  return (
    <div className="item-card">
      <p className="item-title">{title}</p>
      <p className="item-category">{category}</p>
      <div className="item-image-container">
        <img className="item-image" src={image} alt={`foto del producto ${title}`} />
      </div>
<p className="item-number">${price}</p>

      <Link className="btn" to={`/detalle/${id}`}>VER DETALLES</Link>

    </div>
  )
}

export default Item