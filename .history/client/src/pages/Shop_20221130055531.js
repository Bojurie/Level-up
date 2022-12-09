import React, {useEffect, useState} from 'react';
import { FormTitle } from '../components/FormTitle';

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
        <div>
            <div>
                <div className=''>
                  <div className='shop-content'>
                    <h1>Shop</h1> 
                    <div>
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
