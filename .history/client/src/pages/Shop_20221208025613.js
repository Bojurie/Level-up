import { FormTitle } from '../components/FormTitle';
import Product from './Product';
// import ShopCard from '../components/ShopCard';
import useApiFetch from '../components/useApiFetch.js';
// import ProductList from './ProductList';

import './Shop.css'

const Shop = () => {
const {data: products, isLoading, error } = useApiFetch("http://localhost:5001/products/");

  return (
    <div className='shop'>
      <FormTitle className="shopForm-title"  />
        <div className='shop-wrapper'>
            
                <div className='shop-content-wrapper'>
                  <div className='shop-content'>
                    <h1>Shop</h1> 
                    <div className='shop-contents'>

                      {error && <div>{error}</div>}
                      {isLoading && <div>Loading ...</div>}
                      {products && <Product products={products}/>  }
                       {/* <ShopCard  /> */}
                       {/* <ProductList /> */}
                       
                    </div>
                  </div>
                </div>
            </div>
        </div>
   
  );
}

export default Shop;
