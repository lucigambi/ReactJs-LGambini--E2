import React, { useEffect, useState } from 'react'
import CartWidget from './cart-widget/CartWidget';
import logo from '../../assets/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [categorias, setCategorias] = useState([])

  useEffect(() => {

    fetch("https://fakestoreapi.com/products/categories")
      .then(data => data.json())
      .then(res => setCategorias(res))
      .catch(error => console.error('Error fetching data:', error))

  }, [])

  return (
    <div className="navbar">
      <Link to="/"><img src={logo} alt="Logo" className="navbar-logo" /></Link>
      <ul>
        {
          categorias.length > 0 && categorias.map(e => <Link key={e} to={`/categoria/${e}`} className="nav-link">{e + ""}</Link>)
        }
      </ul>
      <CartWidget />
    </div>
  )
}

export default Navbar