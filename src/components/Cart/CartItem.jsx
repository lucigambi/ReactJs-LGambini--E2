import React, {useContext } from 'react'
import './CartItem.css'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../item-list-container/item-count/ItemCount';

export const CartItem = ({ producto }) => {

    const { eliminarProducto} = useContext(CartContext)

    return (
        <div className='cart-container'>
            <div className='cart-item'>
                <h2>{producto.title}</h2>
                <p>{producto.title}</p>
                <p>{producto.cantidad}</p>
                <p>total:{producto.price * producto.cantidad}</p>
                <button onClick={ ()=>eliminarProducto(producto.id)}>ELIMINAR PRODUCTO</button>
            </div>
            
        </div>
    )
}
