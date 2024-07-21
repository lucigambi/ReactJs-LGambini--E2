import './CartWidget.css';
import cartIcon from '../../../assets/cart-icon.svg'

const CartWidget = () => {
  return (
    <div className='cart-widget'>
      <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
      <span className="cart-value">0</span>
    </div>
  );
}

export default CartWidget