import { createContext, useState } from 'react';

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])



    const agregarAlCarrito = (producto) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(item => item.id === producto.id);

            if (existingProductIndex !== -1) {

                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].cantidad += producto.cantidad;
                return updatedCart;
            } else {

                return [...prevCart, producto];
            }
        });
    };

    const vaciarCarrito = () => {
        setCart([])
    }

    const eliminarProducto = (id) => {
        const newCart = cart.filter(e => e.id !== id)
        setCart(newCart)
    }

    const mostrarCantidad = () => {
        return cart.reduce((acc, curr) => acc + curr.cantidad, 0)
    }

    const totalCarrito = () => {
        return cart.reduce((total, producto) => total + producto.price * producto.cantidad, 0);
    };


    return (
        <CartContext.Provider value={{ cart, agregarAlCarrito, vaciarCarrito, eliminarProducto, mostrarCantidad, totalCarrito }}>
            {children}
        </CartContext.Provider>
    )
}