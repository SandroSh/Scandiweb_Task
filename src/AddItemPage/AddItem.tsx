import {Link, useNavigate } from 'react-router-dom'
import './addItem.scss'
import '../ProductListPage/productList.scss'
import { ChangeEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';


export type Furniture  = {
  height: string;
  width: string;
  length: string;
}
export type DVD  = {
  size: string;
}
export type Book = {
  weight: string;
}

export interface ProductType {
  SKU: string;
  name: string;
  price: string;
  type: 'furniture' | 'book' | 'DVD';
  productData: Furniture | DVD | Book | null;
}


const AddItem = () => {
  const [product, setProduct] = useState<ProductType | undefined>(undefined);
  const navigate = useNavigate();

  // Function For handling SKU, Name, Price, Type inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {

    if (e.target.value) {

      let name = '';
      const value = e.target.value;

      if (e.target.name === 'select') {
        name = e.target.value;
        console.log(name);
      } else {
        name = e.target.name;
      }

      if (product) {

        if (e.target.type !== 'select-one') {
          setProduct({ ...product, [name]: value });
        } else {
          setProduct({ ...product, type: value as ProductType['type'] });
        }

      } else {
        const newProduct: ProductType = {
          SKU: '',
          name: '',
          price: '',
          type: name as 'furniture' | 'book' | 'DVD',
          productData: null,
        }
        setProduct({ ...newProduct, [name]: value });
      }
    }

  }
//  Function for handling  Sizes or  Weight
  const handleDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    if (product) {
      setProduct({ ...product, productData: { ...product.productData, [name]: value } as unknown as ProductType['productData'] })
    }
    console.log(product);
  }

  // Function renders specific inputs according to chosen product type
  const renderFields = () => {
    switch (product?.type) {
      case 'DVD':
        return (
          <>
            <div className="input_container">
              <label>Size (MB):</label>
              <input type="text" id="#size" name="size" placeholder='1024' onChange={(e) => handleDetailsChange(e)} />
            </div>
            <p>Product description: Please provide <br />the size in MB.</p>
          </>
        );
      case 'furniture':
        return (
          <>
            <div className='input_container' style={{ marginTop: '-1px' }}>
              <label>Height (CM):</label>
              <input type="text" id="#height" placeholder='97' name="height" onChange={(e) => handleDetailsChange(e)} />
            </div>
            <div className='input_container'>
              <label>Width (CM):</label>
              <input type="text" id="#width" name="width" placeholder='125' onChange={(e) => handleDetailsChange(e)} />
            </div>
            <div className='input_container'>
              <label>Length (CM):</label>
              <input type="text" id="#length" name="length" placeholder='89' onChange={(e) => handleDetailsChange(e)} />
            </div>

            <p>Product description: Please provide <br />dimensions in HxWxL format.</p>

          </>
        );
      case 'book':
        return (
          <>
            <div className="input_container">
              <label>Weight (KG):</label>
              <input type="text" id="#weight" name="weight" placeholder='0.7' onChange={(e) => handleDetailsChange(e)} />
            </div>
            <p>Product description: Please provide <br />the weight in KG.</p>
          </>
        );
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    if (product && Object.values(product).every(value => value !== null && value !== undefined && value !== '')) {
      navigate('/')
    }else{
      toast("Please Fill all Inputs Correctly", { icon: '📢' })
    }
  }

  return (
    <div className='productList'>

      <div className='header-container'>
        <h1>Add Product</h1>
        <div className='buttons-container'>
          <button onClick={handleSubmit}>Save</button>
          <Link to={'/'}>
          <button>Cancel</button>
          </Link>
        </div>
      </div>

      <form action="" id='product_form'>
        <div>
          <div className='input_container'>
            <label>SKU</label>
            <input type="text" name='SKU' id='#sku' placeholder='ergwe-3wqc-97f2e' onChange={(e) => handleChange(e)} required />
          </div>

          <div className='input_container'>
            <label>Name</label>
            <input type="text" name='name' id='#name' placeholder='Bedroom Chair' onChange={(e) => handleChange(e)} required />
          </div>

          <div className='input_container'>
            <label>Price ($)</label>
            <input type='number' name='price' id='#price' placeholder='700$' onChange={(e) => handleChange(e)} required />
          </div>

          <div className='input_container'>
            <label>Type Switcher</label>
            <select id="#productType" name='select' onChange={(e) => handleChange(e)} required>
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
      <Toaster />
    </div>
  )
}

export default AddItem