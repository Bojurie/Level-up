import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";


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
      addProduct({ ...product, quantity, color, size })
    );
  };
  return (
    <div className='card'>
      {
         products.map(product => (
      <div className='card-wrapper'>
        <div className='card-imgPro'>
          <img src={product.img} />
        </div>
        <div className='content"'>
          <h3 >{product.title}</h3>
          <p >{product.desc}</p>
          <p >$ {product.price}</p>
          <p > {product.color}</p>
          <div className='FilterContainer'>
            <div className='Filter'>
              <div className='FilterTitle'>color</div>
              {product.color ?.map((c) => (
                <div className='FilterColor' color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </div>
            <div className='Filter'>
              <div className='FilterTitle'>Size</div>
              <div className='FilterSize' onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <div className='FilterSizeOption' key={s}>{s}</div>
                ))}
              </div>
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
         ))
   }
    </div>
  );
};

export default Product;