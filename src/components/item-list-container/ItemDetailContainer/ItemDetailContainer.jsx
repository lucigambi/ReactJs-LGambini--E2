import { useEffect, useState } from 'react'
import Spinner from '../spinner/Spinner'
import './ItemDetailContainer.css'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../../services/firebaseConfig'
import { getDoc, doc, collection, query, orderBy, getDocs } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState({})
  const [cargando, setCargando] = useState(true)
  const [orderedProductIds, setOrderedProductIds] = useState([])

  const { id } = useParams()
  const navigate = useNavigate()

  const fetchOrderedProductIds = async () => {
    const productosRef = collection(db, "productos")
    const q = query(productosRef, orderBy("orderIndex"))
    const querySnapshot = await getDocs(q)
    const ids = querySnapshot.docs.map(doc => doc.id)
    setOrderedProductIds(ids)
  };

  const mostrarSiguiente = () => {
    const currentIndex = orderedProductIds.indexOf(id)
    if (currentIndex < orderedProductIds.length - 1) {
      const nextId = orderedProductIds[currentIndex + 1]
      navigate(`/detalle/${nextId}`)
    }
  };

  const mostrarAnterior = () => {
    const currentIndex = orderedProductIds.indexOf(id)
    if (currentIndex > 0) {
      const prevId = orderedProductIds[currentIndex - 1]
      navigate(`/detalle/${prevId}`);
    }
  };

  useEffect(() => {
    const fetchProducto = async () => {
      setCargando(true);
      try {
        const productoRef = doc(db, "productos", id)
        const docSnap = await getDoc(productoRef)

        if (docSnap.exists()) {
          setProductos({ id: docSnap.id, ...docSnap.data() })
        } else {
          console.log("No such document!")
        }
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setCargando(false)
      }
    };

    fetchProducto()
    fetchOrderedProductIds()
  }, [id])

  return (
    <div className="item-list-detail-container">
      {cargando ? (
        <div className="loading-container">
          <Spinner />
        </div>
      ) : (
        <ItemDetail producto={productos} mostrarSiguiente={mostrarSiguiente} mostrarAnterior={mostrarAnterior} />
      )}
    </div>
  )
}

export default ItemDetailContainer
