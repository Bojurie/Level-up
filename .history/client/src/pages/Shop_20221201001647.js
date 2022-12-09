import React, {useEffect, useState} from 'react';
import { FormTitle } from '../components/FormTitle';

import './Shop.css'

const Shop = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/shop").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div className='shop'>
      <FormTitle className="shopForm-title"  />
        <div className='shop-wrapper'>
            <div>
                <div className='shop-content-wrapper'>
                  <div className='shop-content'>
                    <h1>Shop</h1> 
                    <div className='shop-contents'>
                        {(typeof backendData.users === 'undefined') ? (
                          <p>Loading...</p>
                          ) : (
                            backendData.users.map((user, i) => (
                              <p key={i}>{user}</p>
                            ))
                          )
                        }
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Shop;
