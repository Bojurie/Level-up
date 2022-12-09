import React, {useEffect, useState} from 'react';
import { FormTitle } from '../components/FormTitle';
import ShopCard from '../components/ShopCard';
import useApiFetch from '../components/useApiFetch.js';

import './Shop.css'

const Shop = () => {
const {data: products, isLoading, error } = useApiFetch("http://localhost:5001/products");
const [cart, setCart] = useState('');

const handleClick = (product) =>{
  cart.push(product)
  console.log(cart)
}
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
                      {
                        products.map(() =>{
                          {products && <ShopCard products={products} product={products} handleClick={handleClick}/>}
                        })
                      }
                      
                        
                    </div>
                  </div>
                </div>
            </div>
        </div>
   
  );
}

export default Shop;
