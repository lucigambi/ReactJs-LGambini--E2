import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import ItemListContainer from './components/item-list-container/ItemListContainer.jsx'
'./components/navbar/Navbar.jsx'

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer bienvenida={"Bienvenidos al shop de EQUALIZER"} />
    </div>
  )
}

export default App
