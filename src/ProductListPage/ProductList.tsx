import { Link } from 'react-router-dom'
import './productList.scss'

const ProductList = () => {
  return (
    <div className='productList'>

      <div className='header-container'>
        <h1>Product List</h1>
        <div className='buttons-container'>
          <Link to={'./addproduct'}>
            <button>ADD</button>
          </Link>
          <button id='delete-product-btn'>MASS DELETE</button>
        </div>
      </div>

      <div className='products-container'>

      </div>

    </div>
  )
}

export default ProductList