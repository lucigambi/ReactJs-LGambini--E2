import React, { useEffect, useState } from 'react'
import CartWidget from './cart-widget/CartWidget'
import logo from '../../assets/logo.png'
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
    <div className="navbar">
      <Link to="/"><img src={logo} alt="Logo" className="navbar-logo" /></Link>
      <ul>
        {
          categorias.length > 0 && categorias.map((categoria) => (
            <Link key={categoria} to={`/categoria/${categoria}`} className="nav-link">
              {categoria}
            </Link>
          ))
        }
      </ul>
      <Link to="/cart"><CartWidget /></Link>
    </div>
  )
}

export default Navbar
