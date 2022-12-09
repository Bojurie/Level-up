import axios from 'axios';
import React, {useEffect, useState} from 'react';

import './HomeShop.css'
import ShopCard from './ShopCard';

const apiUrl = "http://localhost:5001/products";
API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGJhMzQzNjY5MTM5ZDg2ZmU5MGZjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDE3MjA1OSwiZXhwIjoxNjcxMDM2MDU5fQ.xf3J1JOH5mhPlhvQVzsmky3u1luYC9YAAsOPoBv7YCE';


const authAxios = axios.create({
  baseUrl: apiUrl,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
})

const HomeShop = () =>{
 const [ products, setProducts] = useState([]);

    try {
      useEffect(() => {
         // fetch and set products
         const result = axios.get(`${apiUrl}/products/all`)
         setProducts(result.data)
      }, [result])

     res.status(200).json(data);
    } catch (err) {

     res.status(500).json(err) 
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
