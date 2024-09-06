import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import ItemListContainer from './components/item-list-container/ItemListContainer.jsx'
import ItemDetailContainer from './components/item-list-container/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Cart } from './components/Cart/Cart.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import Checkout from './components/Checkout.jsx'

function App() {

  return (
    <CartContextProvider>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoryName' element={<ItemListContainer />} />
          <Route path='/detalle/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/*' element={<h1>1404 error</h1>} />
        </Routes>
      </BrowserRouter>

    </CartContextProvider>
  )
}

export default App
