import { Link } from 'react-router-dom'
import './addItem.scss'
import '../ProductListPage/productList.scss'
import { ChangeEvent, useState } from 'react'


type product = 'furniture' | 'book' | 'DVD' | undefined;

const AddItem = () => {
  const [productType, setProductType] = useState<product>(undefined);




  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    if (e.target.value) {
      setProductType(e.target.value as product);
    } else {
      setProductType(undefined);
    }

  }
  
  const renderFields = () => {
    switch (productType) {
      case 'DVD':
        return (
          <>
            <label htmlFor="size">Size (MB):</label><br />
            <input type="text" id="size" name="size" /><br /><br />
            <p>Product description: Please provide the size in MB.</p>
          </>
        );
      case 'furniture':
        return (
          <> 
            <label htmlFor="height">Height (CM):</label>
            <input type="text" id="height" name="height" />
            <label htmlFor="width">Width (CM):</label>
            <input type="text" id="width" name="width" />
            <label htmlFor="length">Length (CM):</label>
            <input type="text" id="length" name="length" />
            <p>Product description: Please provide dimensions in HxWxL format.</p>
          </>
        );
      case 'book':
        return (
          <>
            <label htmlFor="weight">Weight (KG):</label><br />
            <input type="text" id="weight" name="weight" /><br /><br />
            <p>Product description: Please provide the weight in KG.</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className='productList'>

      <div className='header-container'>
        <h1>Add Product</h1>
        <div className='buttons-container'>
          <Link to={'/'}>
            <button>Save</button>
          </Link>
          <button>Cancel</button>
        </div>
      </div>
      <form action="" id='product_form'>
        <div className='main_inputs_container'>
          <div className='input_container'>
            <label>SKU</label>
            <input type="text" placeholder='ergwe-3wqc-97f2e' />
          </div>

          <div className='input_container'>
            <label>Name</label>
            <input type="text" placeholder='Bedroom Chair' />
          </div>

          <div className='input_container'>
            <label>Price ($)</label>
            <input type="text" placeholder='700$' required />
          </div>

          <div className='input_container'>
            <label>Type Switcher</label>
            <select id="productType" onChange={(e) => handleTypeChange(e)} required>
              <option value="">Select Type</option>
              <option value="furniture">Furniture</option>
              <option value="book">Book</option>
              <option value="DVD">DVD Disc</option>
            </select>
          </div>
        </div>
        <div className='dynamic_inputs_container'>
          {
            renderFields()
          }
        </div>
      </form>

    </div>
  )
}

export default AddItem