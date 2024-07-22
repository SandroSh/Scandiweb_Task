import './product.scss';
import '../ProductListPage/productList.scss'
import { Book, DVD, Furniture, ProductType } from '../AddItemPage/AddItem';
import Pushpin from '../assets/pushpin.svg';
const Product = ({ product }: { product: ProductType }) => {


  const renderDetails = () => {
    if (!product.productData) return;

    let productDetails = product.productData;
    if (productDetails.hasOwnProperty('weight')) {
      productDetails = productDetails as Book;
      return (
        <>
          <h3>Weight: {productDetails.weight} KG</h3>
        </>
      )
    } else if (productDetails.hasOwnProperty('height')) {
      productDetails = productDetails as Furniture;
      return (
        <>
          <h3>Dimension:{productDetails.width}x{productDetails.length}x{productDetails.height}</h3>
        </>
      )
    }else{
      productDetails = productDetails as DVD;
      return (
        <>
          <h3>Size: {productDetails.size} MB</h3>
        </>
      )
    }

  }

  return (

    <div className='main-div'>
      <div className='upper-div'>
        <div className="checkbox-wrapper">
          <input type="checkbox" className="delete-checkbox" id="check1-61" />
          <label className="label">
            <svg width="45" height="45" viewBox="0 0 95 95">
              <rect x="30" y="20" width="50" height="50" stroke="black" rx={10} fill='white' style={{ stroke: 'none'}} id='checkbox-rect'></rect>
              <g transform="translate(0,-952.36222)">
                <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="rgba(16, 86, 82, 0.75)" stroke-width="5" fill="none" className="path1"></path>
              </g>
            </svg>
          </label>
        </div>

        <div className='pin-wrapper'>
          {/* <img src={Pushpin} alt="Red pushpin icon" id='pushpinIcon' /> */}
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
        </div>
      </div>

      <h3>{product.SKU}</h3>
      <h3>{product.name}</h3>
      <h3>{product.price}$</h3>
      {
        renderDetails()
      }



    </div>
  )
}

export default Product