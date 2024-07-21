import React, { useState } from "react"
import './ItemCount.css'
import BtnCount from "./BtnCount.jsx"
import Product from "./Product.jsx"

const ItemCount = () => {
  const [count, setCount] = useState(1)

  const sumar = () => {
    if (count < 10)
      setCount(count + 1)
  }

  const restar = () => {
    if (count > 1)
      setCount(count - 1)
  }

  return (

    <div className="container">
      <Product nombre="Headphones E-569" />
      <div className="count">
        <BtnCount texto="-" fn={restar} />
        <span className="count2">{count}</span>
        <BtnCount texto="+" fn={sumar} />
      </div>
    </div>
  )
}

export default ItemCount