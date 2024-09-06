import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'
import './CartItem.css'
import { Link } from 'react-router-dom'

export const Cart = () => {
    const { cart, vaciarCarrito, totalCarrito } = useContext(CartContext)

    return (
        <div className="cart-container">

            <div className="cart-items">
                {cart.length === 0 ? (
                    <Link to="/"><p className="item-cart-title">¡Tu carrito está vacío. Vuelve al shop!</p></Link>
                ) : (
                    cart.map((producto) => (
                        <CartItem key={producto.id} producto={producto} />
                    ))
                )}
            </div>

            {cart.length > 0 && (
                <div className="centered-cart-actions">
                    <p className="item-cart2-title">Total del Carrito: ${totalCarrito()}</p>
                    <button onClick={vaciarCarrito} className="btn-clear-cart">VACIAR CARRITO</button>
                    <Link to="/checkout"><button className="btn-go-check">TERMINAR COMPRA</button></Link>
                </div>
            )}
        </div>
    )
}
