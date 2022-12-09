import axios from 'axios';
import React, {useEffect, useState} from 'react';

import './HomeShop.css'
import ShopCard from './ShopCard';

const apiUrl = "http://localhost:5001/products";
const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGJhMzQzNjY5MTM5ZDg2ZmU5MGZjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDE3MjA1OSwiZXhwIjoxNjcxMDM2MDU5fQ.xf3J1JOH5mhPlhvQVzsmky3u1luYC9YAAsOPoBv7YCE';


const authAxios = axios.create({
  baseUrl: apiUrl,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
})

const HomeShop = () =>{
 const [ products, setProducts] = useState(null);
 const [ isLoading, setIsLoading ] = useState(true)
 const [error, setError] =useState(null)


  useEffect(()=> {
    fetch(apiUrl)
    .then(res => {
      if(!res.ok){
        throw Error('Could not fetch data from directory')
      }
      return res.json();
    })
    .then(data => {
      setProducts(data)
      setIsLoading(false)
    })
    .catch(err => {
      setIsLoading(false)
      setError(err.message)
    })
  }, []);

  return (
    <div className='homeShop'>
      <div>
        <h1>Level-up Shop</h1><hr/>
        <p></p>
      </div>

      <div className='homeShop-product'>
        {error && <div>{error}</div>}
        {isLoading && <div>Loading ...</div>}
       {products && <ShopCard products={products}/>}
      </div>
    </div>
  );
}

export default HomeShop;
