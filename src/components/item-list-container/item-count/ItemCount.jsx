import React, { useState } from "react"
import './ItemCount.css'
import BtnCount from "./BtnCount.jsx"


const ItemCount = ({id}) => {
  const [count, setCount] = useState(1)

  const sumar = () => {
    if (count < 10)
      setCount(count + 1)
  }

  const restar = () => {
    if (count > 1)
      setCount(count - 1)
  }

  const comprar = () => {
        console.log(`compraste ${count} unidades del producto${id}`)
  }

  return (

    <div className="container">
      
      <div className="count">
        <BtnCount texto="-" fn={restar} />
        <span className="count2">{count}</span>
        <BtnCount texto="+" fn={sumar} />
        <BtnCount texto="Comprar" fn={comprar} />
      </div>
    </div>
  )
}

export default ItemCount