import React, { useContext, useState } from 'react'
import { CartContext} from '../../context/CartContext'
import { CartItem } from './CartItem'



export const Cart = () => {
  
  
  const {contexto, cart, vaciarCarrito} = useContext(CartContext) 
  
  console.log("Cart en cart",cart)
  
  return (
    <div>{
    
      cart?.map(e => {
        return (
          <CartItem key={e.id} producto={e} />
        )
      })
    
    }
      <button onClick={vaciarCarrito}>VACIAR CARRITO</button>
    </div>
  )
}
