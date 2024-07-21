import ItemCount from './item-count/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = ({ bienvenida }) => {
  return (
    <div className="item-list-container">{bienvenida}
      <ItemCount />
    </div>
  )
}

export default ItemListContainer