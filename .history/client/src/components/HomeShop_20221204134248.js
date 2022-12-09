import axios from 'axios';
import React, {useEffect, useState} from 'react';

import './HomeShop.css'
import ShopCard from './ShopCard';

const apiUrl = "http://localhost:5001/products";

const HomeShop = () =>{
 const [ products, setProducts] = useState([]);

 useEffect(() => {
  const products = () => {
    try {
      useEffect(() => {
        const products = axios.get(apiUrl,{
          image: products.image,
          title: products.title,
          desc: products.desc,
          color: products.color,
          size: products.size,
          price: products.price
        })
          setProducts(products)
          res.status(200).json()
      })
        } catch (err) {
          res.status(500).json(err)
        }

      }
      products
    })


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
