import React, {Component} from 'react';
import Card from './Card';
// import {useCart} from 'react-use-cart'

import './HomeShop.css'


class HomeShop extends Component {

    // static contextType = DataContext;
    render() {
        // const {addItem} = useCart();

        //  const {products} = this.context;
         return (
   
          <div className='homeShop'>
            <div>
              <h1>Level-up Shop</h1><hr/>
              <p></p>
            </div>
            <div className='homeShop-product'>
              {/* <Card /> */}
              

            </div>
          </div>
    
  );
  }
}

export default HomeShop;
