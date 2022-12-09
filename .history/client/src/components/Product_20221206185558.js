import {useState, useEffect }from 'react'
import { publicRequest } from '../requestMethods'

import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import './Product.css';



const Product = ({ products}) =>  {
  const [product, setProduct] = useState({})

  useEffect(() => {
    const getProduct = async () =>{
      try {
        const res = await publicRequest.get("/products/find/" +_id)
        setProduct(res.data)
      } catch  {}
    };
    getProduct()
  }, [_id])


    return (
      <div className='Container'>
        <div className='Circle'>
          <Circle />
        </div>
        
        <Image src={product.img} />
        <div className='Info'>
          <div className='Icon'>
            <ShoppingCartOutlined />
          </div>
          <div className='Icon' >
            <Link to={`/product/${product._id}`}>
            <SearchOutlined />
            </Link>
          </div>
          <div className='Icon'>
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>
    );
};
export default Product;