import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";


const Product = ({product}) => {
    // const products = props.products; 

  return (
    <div className='Container'>
      <div className='Circle' />
      <div className='Image'>
        <Image  alt='product-image' />{product.img}
        </div> 
      <div className='Info'>
        <div className='Icon'>
          <ShoppingCartOutlined />
        </div>
        <div className='Icon'>
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