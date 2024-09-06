import React, { useEffect, useState } from 'react'
import CartWidget from './cart-widget/CartWidget'
import logo from '../../assets/logo.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { db } from '../../services/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

const Navbar = () => {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const categoriasRef = collection(db, 'productos')
        const querySnapshot = await getDocs(categoriasRef)
        const categoriasUnicas = new Set()

        querySnapshot.forEach((doc) => {
          const { category } = doc.data()
          if (category) {
            categoriasUnicas.add(category)
          }
        })

        setCategorias([...categoriasUnicas])
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    };

    fetchCategorias()
  }, [])

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="navbar-logo" aria-label="Volver a inicio" />
      </Link>

      <ul className="navbar-categories">
        {categorias.length > 0
          ? categorias.map((categoria) => (
            <li key={categoria}>
              <Link to={`/categoria/${categoria}`} className="nav-link">
                {categoria}
              </Link>
            </li>
          ))
          : <li>Cargando categorías...</li>
        }
      </ul>

      <Link to="/cart" aria-label="Ir al carrito">
        <CartWidget />
      </Link>
    </nav>
  )
}

export default Navbar
