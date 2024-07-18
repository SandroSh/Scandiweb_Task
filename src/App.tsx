import { Route, Routes } from 'react-router'
import ProductList from './ProductListPage/ProductList'
import AddItem from './AddItemPage/AddItem'
import './App.css'





function App() {

  return (
    <main className='main-container'>  
      <Routes>
        <Route path='/' element={<ProductList/>} />
        <Route path='/addproduct' element={<AddItem/>} />
      </Routes>
    </main>
  )

}

export default App
