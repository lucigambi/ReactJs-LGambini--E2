import React, { useContext } from 'react'
import './CartItem.css'
import { CartContext } from '../../context/CartContext'

export const CartItem = ({ producto }) => {

    const { eliminarProducto } = useContext(CartContext)
    const { title, image, cantidad, price, category } = producto;

    return (
        <div className='cart-container'>
            <div className='cart-item'>
                <p className='item-cart-title'>{title}{" / "}{category}{" / "}cantidad:{cantidad}{" / "}total{"  "}$:{price * cantidad}{"  "}<button className="btn-del-prod" onClick={() => eliminarProducto(producto.id)}>X BORRAR</button></p>
                <div className="item-cart-image-container">
                    <img className="item-cart-image" src={image} alt={`foto del producto ${title}`} />
                </div>
            </div>
        </div>
    )
}
