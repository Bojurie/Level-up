import React from 'react'
import './ShopCard.js'

const ShopCard = ({products,img,color, price, size, title , desc, _id}) => {
  const products = props.products;
  
    return (
    <>
      <div id="cards">
          {
            products.map(product => (
              <div className='cards-wrapper'>
                <img src={img} alt=""/> 
                <div className="card" key={_id}>
                  
                  <div className="content">
                    <h3> {title}</h3>
                    <p>{desc}</p>
                    <p>{color}</p>
                    <p>{size}</p>
                    <span>${price}</span> 
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

