import React from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './Context';


const Card = ({context}) => {
  // const [currentproducts, setProducts] = useState('')

  const {products} = context;

  var contextType = DataContext;

  return (
    <div id="cards">
                      {
                        products.map(product => (
                          <div className="card" key={product._id}>
                              <Link to={`/product/${product._id}`}>
                                <img src={product.src} alt=""/>
                              </Link>
                              <div className="content">
                                <div className='content-product'>
                                  <h3>
                                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                                  </h3>
                                  <span>${product.price}</span>
                                </div>
                                  {/* <p>{product.description}</p> */}
                                  <button className='btn' onClick={products}>Add To Chart</button>
                              </div>
                          </div>
                       ) )
                      }
              </div>
  );
}

export default Card;
