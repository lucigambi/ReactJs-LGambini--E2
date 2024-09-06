import React, { useContext } from 'react';
import './CartItem.css';
import { CartContext } from '../../context/CartContext';
import deleteIcon from '../../assets/delete-icon.svg';

export const CartItem = ({ producto }) => {
    const { eliminarProducto } = useContext(CartContext);
    const { title, image, cantidad, price, category } = producto;

    return (
        <div className='cart-container'>
            <div className='cart-item'>
                <p className='item-cart-title'>
                    {title} {" / "} {category} {" / "}
                    Cantidad: {cantidad} {" / "}
                    Total: ${price * cantidad} {"  "}
                    <button
                        className="bt-delete-product"
                        onClick={() => eliminarProducto(producto.id)}
                    >
                        <img src={deleteIcon} alt="Delete Icon" />
                    </button>
                </p>
                <div className="item-cart-image-container">
                    <img
                        className="item-cart-image"
                        src={image}
                        alt={`Foto del producto ${title}`}
                    />
                </div>
            </div>
        </div>
    );
};
