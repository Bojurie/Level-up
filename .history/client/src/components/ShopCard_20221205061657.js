import React from 'react'
import './ShopCard.css'

const ShopCard = ({props, handleClick}) => {
const products = props.products;
    return (
    <>
      <div id="cards">
          {
            products.map(product => (
              <div className='cards-wrapper'>
                <div className="card" key={products._id}>
                  <div className='card-imgPro'>
                    <img src={products.img} alt=""/> 
                  </div>
                  
                  <div className="content">
                    <h3> {products.title}</h3>
                    <p>{products.desc}</p>
                    <p>{products.color}</p>
                    <p>{products.size}</p>
                    <span>${products.price}</span> 
                  </div>
                  <button onClick={() => handleClick(product)}>Add to Cart</button>
                </div>
              </div>
            ) )
          }
      </div>
    </>
  )
}

export default ShopCard;

