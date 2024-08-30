import React, { useState } from "react"
import './ItemCount.css'
import BtnCount from "./BtnCount.jsx"


const ItemCount = ({id, handleComprar}) => {
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
      
      <div className="count">
        <BtnCount texto="-" fn={restar} />
        <span className="count2">{count}</span>
        <BtnCount texto="+" fn={sumar} />
        <button onClick={()=>handleComprar(count)}>COMPRAR</button>
      </div>
    </div>
  )
}

export default ItemCount