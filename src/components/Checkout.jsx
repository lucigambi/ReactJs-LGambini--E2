import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { db } from '../services/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import './Checkout.css';

const Checkout = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ordenId, setOrdenId] = useState(null);
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { cart, vaciarCarrito, totalCarrito } = useContext(CartContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const nuevaOrden = {
            comprador: {
                nombre,
                email,
                direccion
            },
            items: cart,
            total: totalCarrito(),
            fecha: new Date()
        };

        try {
            const docRef = await addDoc(collection(db, "ordenes"), nuevaOrden);
            setOrdenId(docRef.id);
            setError(null);
            vaciarCarrito();

            
            setEmail("");
            setNombre("");
            setDireccion("");
        } catch (error) {
            console.error("Error al crear la orden: ", error);
            setError("No se pudo crear la orden. ¡Inténtalo de nuevo!");
            setOrdenId(null);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (ordenId) {
        return (
            <div className="checkout-container">
                <p className="order-message">¡Gracias por tu compra! Tu orden fue creada con el ID: {ordenId}</p>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <p className="order-message">Ingresa tus datos para finalizar la compra</p>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    disabled={isSubmitting}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                />

                <label htmlFor="direccion">Dirección</label>
                <input
                    type="text"
                    name="direccion"
                    id="direccion"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    required
                    disabled={isSubmitting}
                />

                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
            </form>

            {error && <p className="order-message">{error}</p>}
        </div>
    );
};

export default Checkout;
