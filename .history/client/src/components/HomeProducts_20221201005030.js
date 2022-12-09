import React from 'react';
import './homeProducts.css'

const Homeproducts = () => {
  return (
    <div className='homeDetail'>
      <div className='homeDetail-heading'><h1> Feature Product</h1> </div>
        <div className='homeProducts'>
          <div className='homeProducts-detail'>

              <div className='image-square'>
                  <img src='https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' alt=''/>
                  <div className='image-square-p'>
                    <p>
                       Navigation bits in Bootstrap all share a general Nav component and styles. Swap variants to switch between each style. The base Nav component is built with flexbox and 

                    </p>
                    <button className='btn-long'>
                      <input type='submit' value='Learn More'/>
                      
                      </button>
                  </div>
                  
              </div>

              <div className='image-square'>

                   <img src='https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' alt=''/>
                   <div className='image-square-p'> 
                      <p>Navigation bits in Bootstrap all share a general Nav component and styles. Swap variants to switch between each style. The base Nav component is built with flexbox and .</p>

                        <button className='btn-long'>Learn More</button>
                   </div>
                 
              </div>
           

          </div>
          
            
            
        </div>
    </div>
  );
}

export default Homeproducts;
