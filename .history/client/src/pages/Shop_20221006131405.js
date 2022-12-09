import React, {useEffect, useState} from 'react';

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
    <div>
      <h1>Shop</h1> 
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )
    }
    </div>
  );
}

export default Shop;
