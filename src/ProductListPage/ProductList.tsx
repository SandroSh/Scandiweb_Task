import { Link } from 'react-router-dom'
import './productList.scss'
import { ProductType } from '../AddItemPage/AddItem'
import Product from '../Product/Product'

const product: ProductType = {
  SKU: 'ef43-f3fwe-fw98',
  name: 'Sofa',
  price: '7000',
  type: 'furniture',
  productData: { width: '100', height:'70', length:'180'}
}

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
        <Product product={product}/>
      </div>

    </div>
  )
}

export default ProductList