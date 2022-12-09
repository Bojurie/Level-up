import React, {useEffect, useState} from 'react';
import { FormTitle } from '../components/FormTitle';
import ShopCard from '../components/ShopCard';

import './Shop.css'

const Shop = () => {

  return (
    <div className='shop'>
      <FormTitle className="shopForm-title"  />
        <div className='shop-wrapper'>
            
                <div className='shop-content-wrapper'>
                  <div className='shop-content'>
                    <h1>Shop</h1> 
                    <div className='shop-contents'>

                      <ShopCard products={products} />
                        
                    </div>
                  </div>
                </div>
            </div>
        </div>
   
  );
}

export default Shop;
