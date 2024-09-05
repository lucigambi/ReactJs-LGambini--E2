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
    const [isSubmiting, setIsSubmiting] = useState(false);

    const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verificación de campos vacíos
        if (!nombre || !email || !direccion) {
            setError("Todos los campos son obligatorios.");
            return; // Evita el envío del formulario si hay campos vacíos
        }

        setIsSubmiting(true);

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
            setError(null); // Limpia el mensaje de error si la orden se creó con éxito
            vaciarCarrito();
        } catch (error) {
            console.error("Error al crear la orden: ", error);
            setError("No se pudo crear la orden. ¡Inténtalo de nuevo!");
            setOrdenId(null);
        } finally {
            setIsSubmiting(false); // Asegúrate de que esta línea esté en el bloque finally
        }
    };

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
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="direccion">Dirección</label>
                <input
                    type="text"
                    name="direccion"
                    id="direccion"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    required
                />

                <button type="submit" disabled={isSubmiting} className="btn-submit">Enviar</button>
            </form>

            {/* Mostrar mensajes de error o éxito */}
            {ordenId && <p className="order-message">¡Tu orden fue creada con el ID: {ordenId}!</p>}
            {error && <p className="order-message">{error}</p>}
        </div>
    );
};

export default Checkout;
