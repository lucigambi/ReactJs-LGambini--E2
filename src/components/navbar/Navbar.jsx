import Button from '../button-common/Button';
import CartWidget from './cart-widget/CartWidget';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul><li><Button texto="Catálogo" color="btn" /><Button texto="Ofertas" color="btn" /><Button texto="Novedades" color="btn" /></li></ul>
      <CartWidget /></div>
  )
}

export default Navbar