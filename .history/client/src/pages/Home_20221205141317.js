import {useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import HomeVlog from '../components/HomeVlog';
import Homeproducts from '../components/HomeProducts';
import HomeShop from '../components/HomeShop';


const Home = () => {
  const navigate = useNavigate()

  useEffect(()=> {
    if(!localStorage.getItem("token")){
      navigate("/login")
    }
  }, [])

  
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
