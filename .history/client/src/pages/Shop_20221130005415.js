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
       <FormTitle className="sign-in-form__title" text="Shop" />
      <div className=''>
       
        <div className='shop-content'>
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
      <h1>Shop</h1> 
      
    </div>
  );
}

export default Shop;
