import React from 'react'
import './ShopCard.js'

const ShopCard = (props) => {
  const products = props.products;
  
    return (
    <>
      <div id="cards">
          {
            products.map(product => (
              <div className='cards-wrapper'>
                <img src={product.src} alt=""/> 
                <div className="card" key={product._id}>
                  
                  <div className="content">
                    <h3> {product.title}</h3>
                    <p>{product.description}</p>
                    <span>${product.price}</span> 
                  </div>
                  <button>Add to Cart</button>
                </div>
              </div>
            ) )
          }
      </div>
    </>
  )
}

export default ShopCard;

