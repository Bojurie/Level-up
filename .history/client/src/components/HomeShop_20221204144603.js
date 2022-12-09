import axios from 'axios';
import React, {useEffect, useState} from 'react';

import './HomeShop.css'
import ShopCard from './ShopCard';

const apiUrl = "http://localhost:5001";

const HomeShop = () =>{
 const [ products, setProducts] = useState([]);

    try {
      useEffect(() => {
         // fetch and set products
         const result = await axios.get(`${apiUrl}/products/all`)
         setProducts(result.data)
      }, [products])
     res.status(200);
    } catch (error) {
     res.status(500); 
    }

  return (
    <div className='homeShop'>
      <div>
        <h1>Level-up Shop</h1><hr/>
        <p></p>
      </div>
      <div className='homeShop-product'>
        <ShopCard products={products}/>
      </div>
    </div>
  );
}

export default HomeShop;
