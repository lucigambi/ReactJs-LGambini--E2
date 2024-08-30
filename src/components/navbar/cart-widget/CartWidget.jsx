import  { useContext } from 'react'
import './CartWidget.css';
import cartIcon from '../../../assets/cart-icon.svg'
import { CartContext } from '../../../context/CartContext';


const CartWidget = () => {

  const {mostrarCantidad} = useContext(CartContext)

  return (
    <div className='cart-widget'>
      <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
      <span className="cart-value">{mostrarCantidad()}</span>
      
    </div>
  );
}

export default CartWidget