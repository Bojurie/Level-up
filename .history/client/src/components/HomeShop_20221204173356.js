import axios from 'axios';


import './HomeShop.css'
import ShopCard from './ShopCard';
import useApiFetch from './useApiFetch.js';


const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGJhMzQzNjY5MTM5ZDg2ZmU5MGZjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDE3MjA1OSwiZXhwIjoxNjcxMDM2MDU5fQ.xf3J1JOH5mhPlhvQVzsmky3u1luYC9YAAsOPoBv7YCE';


const authAxios = axios.create({
  baseUrl: apiUrl,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
})

const HomeShop = () =>{
const {data, isLoading, error } = useApiFetch("http://localhost:5001/products")
  return (
    <div className='homeShop'>
      <div>
        <h1>Level-up Shop</h1><hr/>
        <p></p>
      </div>

      <div className='homeShop-product'>
        {error && <div>{error}</div>}
        {isLoading && <div>Loading ...</div>}
       {products && <ShopCard products={products}/>}
      </div>
    </div>
  );
}

export default HomeShop;
