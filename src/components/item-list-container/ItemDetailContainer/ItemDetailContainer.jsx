import {useEffect, useState} from 'react';
import Spinner from '../spinner/Spinner';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useNavigate, useParams } from 'react-router-dom';


 const ItemDetailContainer = () => {
  
    const [productos, setProductos] = useState({})
     const [cargando, setCargando] = useState(true)
   
     const { id } = useParams()
     const navigate= useNavigate()


     const mostrarSiguiente = () =>{
         let ruta = id * 1 + 1
         navigate(`/detalle/${ruta}`)
        }

        const mostrarAnterior = () =>{
            if (id>0){
            let ruta = id * 1 - 1
                navigate(`/detalle/${ruta}`)
            }
           }

    useEffect(() => {
        // getProductos()
        // .then((res) => setProductos(res))
        // .catch()
        // .finally(() => setCargando(false))
    setCargando(true)

        fetch(`https://fakestoreapi.com/products/${id}`)
          .then(data => data.json())
            .then(res => setProductos(res))
            .catch(error => console.error('Error fetching data:', error))
          .finally(() => setCargando(false))
    
    }, [id])
    
    if (cargando) {
        return (
          <div className="loading-container">
            <Spinner />
          </div>
        )
      }
    

    return (
        <div><ItemDetail producto={productos} mostrarSiguiente={mostrarSiguiente} mostrarAnterior={mostrarAnterior} /></div>
  )
}
export default ItemDetailContainer