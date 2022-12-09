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
        const res = await publicRequest.get("find/" + id);
        setProduct(res.data);
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
    <div className='Container'>
      {
         products.map(product => (
      <div className='Wrapper'>
        <div className='ImgContainer'>
          <image className='Image' src={product.img} />
        </div>
        <div className='InfoContainer'>
          <div className='Title'>{product.title}</div>
          <div className='Desc'>{product.desc}</div>
          <div className='Price'>$ {product.price}</div>
          <div className='FilterContainer'>
            <div className='Filter'>
              <div className='FilterTitle'>{product.color}</div>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </div>
            <div className='Filter'>
              <div className='FilterTitle'>Size</div>
              <div className='FilterSize' onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
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