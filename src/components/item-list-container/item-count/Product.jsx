import imgProd from '../../../assets/product-image.png';
import './Product.css';

const Product = ({ nombre }) => {
  return (
    <div className="product">
      <div className="product-name">{nombre}</div>
      <img src={imgProd} alt={nombre} className="product-image" />
    </div>
  )
}

export default Product