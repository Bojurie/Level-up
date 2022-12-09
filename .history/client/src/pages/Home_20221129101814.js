import React from 'react';
import Carousel from '../components/Carousel';
import HomeVlog from '../components/HomeVlog';
import Homeproducts from '../components/HomeProducts';
import HomeShop from '../components/HomeShop';
import Homeshop from '../components/HomeShop';

const Home = () => {
  return (
    <div>
        <Carousel />
        <Homeproducts />
        <HomeShop />
        <HomeVlog />

    </div>
  );
}

export default Home;
