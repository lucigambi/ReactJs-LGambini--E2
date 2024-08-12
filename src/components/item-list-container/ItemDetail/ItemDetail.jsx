import './ItemDetail.css'
import '../item/Item.css'
import ItemCount from '../item-count/ItemCount'

export const ItemDetail = ({ producto, mostrarSiguiente, mostrarAnterior }) => {

  const { id, image, title, description, price } = producto

  return (
    <div className="card-detail-item">
      <h3>{title}</h3>

      <div className="item-image-container">
        <img className="item-image" src={image} alt={`foto del producto ${title}`} />
      </div>

      <p className="item-detail-description">{description}</p>
      <p className="item-price">${price}</p>
      <div className="btn-container">
        <button className="btn" onClick={mostrarAnterior}>Ver anterior</button>
        <button className="btn" onClick={mostrarSiguiente}>Ver siguiente</button>
        
      </div>
      <ItemCount id={id} />

    </div>
  )
}
