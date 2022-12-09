import './HomeShop.css'
import ShopCard from './ShopCard';
import useApiFetch from './useApiFetch.js';


const HomeShop = () =>{
const {data: products, isLoading, error } = useApiFetch("http://localhost:5001/products");
  return (
    <div className='homeShop'>
        <div className='homeShop-wrapper'>
             <div className='homeShop_header'>
              <h1>New Arrivals</h1>
              <p></p>
            </div>

            <div className='homeShop-product'>
              {error && <div>{error}</div>}
              {isLoading && <div>Loading ...</div>}
              {products && <ShopCard products={products}/>}
            </div>
        </div>
          
    </div>
  );
}

export default HomeShop;
