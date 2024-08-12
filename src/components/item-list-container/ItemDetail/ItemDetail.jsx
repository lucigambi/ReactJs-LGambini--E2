import './ItemDetail.css'
import '../item/Item.css'
import ItemCount from '../item-count/ItemCount'

export const ItemDetail = ({producto, mostrarSiguiente, mostrarAnterior}) => {

    const { id, image, title, description, category, rating, price } = producto

  return (
    <div className="card-item">
          <h3>{title}</h3>
          
          <div className="item-image-container">
      <img className="item-image" src={image} alt={`foto del producto ${title}`} />
    </div>
   
    <p className="item-description">{description}</p>
          <p className="item-price">${price}</p>
          <div className="btn-container">
              <button className="btn" onClick={ mostrarAnterior}>Ver anterior</button>
              <button className="btn" onClick={mostrarSiguiente}>Ver siguiente</button>
              <ItemCount id={id} />
              </div>
    
  </div>
  )
}
