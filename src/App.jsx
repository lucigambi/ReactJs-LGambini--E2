import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import ItemListContainer from './components/item-list-container/ItemListContainer.jsx'
import ItemDetailContainer from './components/item-list-container/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoryName' element={<ItemListContainer />} />
        <Route path='/detalle/:id' element={<ItemDetailContainer />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
