import React from 'react'
import './ShopCard.css'

const ShopCard = ({product, handleClick}) => {
const  {_id,size, color, price, desc,title, img  } =  product
    return (
    <>
      <div id="cards">
          {
            products.map(product => (
              <div className='cards-wrapper'>
               
                <div className="card" key={_id}>
                  <div className='card-imgPro'>
                    <img src={img} alt=""/> 
                  </div>
                   
                  <div className="content">
                    <h3> {title}</h3>
                    <p>{desc}</p>
                    <p>{color}</p>
                    <p>{size}</p>
                    <span>${price}</span> 
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

