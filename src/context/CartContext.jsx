import {createContext, useState} from 'react';

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart,setCart] = useState([])
    
    
        
    const agregarAlCarrito = (producto) => { 
        setCart([...cart, producto])
    }

    const vaciarCarrito = (producto) => { 
        setCart([])
    }

    const eliminarProducto = (id) => { 
        const newCart = cart.filter(e => e.id !== id)
        setCart(newCart)
    }

    const mostrarCantidad = () => { 
        return cart.reduce((acc, curr) => acc + curr.cantidad, 0)
    }


    console.log("CARRITO :", cart)
    return (
        <CartContext.Provider value={{ cart, setCart, agregarAlCarrito,vaciarCarrito, eliminarProducto, mostrarCantidad }}>
        { children }
        </CartContext.Provider>
    )
}