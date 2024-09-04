import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Asegúrate de que el contexto del carrito esté configurado
import { db } from '../services/firebaseConfig';

import { collection, addDoc } from 'firebase/firestore'; // Importa las funciones de Firestore
import './Checkout.css';

const Checkout = () => {
  // Manejar los estados de los campos del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ordenId, setOrdenId] = useState(null); // Estado para el ID de la orden
  const [error, setError] = useState(null); // Estado para el error
  
  // Obtener el carrito desde el contexto
  const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Crear una nueva orden
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

    console.log('Datos de la orden: ------->', nuevaOrden); // Verifica los datos de la orden antes de enviarla
    
    try {
      // Agregar la orden a Firebase
      const docRef = await addDoc(collection(db, "ordenes"), nuevaOrden);
      console.log("Orden creada con el ID ------->: ", docRef.id);

      // Actualizar el estado con el ID de la orden
      setOrdenId(docRef.id);
        setError(null); // Limpiar cualquier mensaje de error
        vaciarCarrito()
        console.log("El carrito vuelve a 0 ------->");

      // Mostrar el ID de la orden en la consola para verificar
      console.log('ID de la orden: ------->', docRef.id);
    } catch (error) {
      console.error("Error al crear la orden: ", error);
      setError("No se pudo crear la orden. ¡Inténtalo de nuevo!"); // Mostrar mensaje de error
      setOrdenId(null); // Limpiar el ID de la orden en caso de error
    }
  };

  console.log('Estado de la ordenId:------->', ordenId); // Verifica el valor de ordenId

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
        
        <button type="submit" className="btn-submit">Enviar</button>
      </form>
      
      {/* Mostrar el mensaje de confirmación o error */}
      {ordenId && <p className="order-message">¡Tu orden fue creada con el ID: {ordenId}!</p>}
      {error && <p className="order-message">{error}</p>}
    </div>
  );
};

export default Checkout;
