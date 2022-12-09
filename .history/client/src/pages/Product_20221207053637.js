import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import './Product.css'


const Product = (props) => {
  const products = props.products;

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("products/find/" + id);
        setProduct(res.product);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size , price:product.price * quantity})
    );
  };
  return (
    // <div className='card'>
    //   {
    //      products.map(product => (
    //   <div className='card-wrapper'>
    //       <div className='card-imgPro'>
    //         <img src={product.img} />
    //       </div>
    //       <div className='content"'>
    //         <h3 >{product.title}</h3>
    //         <p >{product.desc}</p>
    //         <p >$ {product.price}</p>
    //         <p > {product.color}</p>
    //       </div>

          <div className="Container">
          <div className="Wrapper">
            <div className='ImgContainer'>
              <img className='Image' src={product.img} />
            </div>
          <div className='InfoContainer content'>
          <h1 className='Title'>{product.title}</h1>
          <p className='Desc'>{product.desc}</p>
          <span className='Price'>$ {product.price}</span>
          <div className='FilterContainer'>
            <select className='Filter'>
              <span className='FilterTitle'>Color</span>
              {product.color?.map((c) => (
                <div className='FilterColor' color={c} key={c} onClick={() => setColor(c)}></div>
              ))}
            </select>
            <div className='Filter'>
              <span className='FilterTitle'>Size</span>
              <select className='FilterSize' onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <option className='FilterSizeOption' key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
         
          <div className='AddContainer'>
            <div className='AmountContainer'>
              <Remove onClick={() => handleQuantity("dec")} />
              <div className='Amount'>{quantity}</div>
              <Add onClick={() => handleQuantity("inc")} />
            </div>
            <button className='Button' onClick={handleClick}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
 )  
}
export default Product;