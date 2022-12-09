import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { mobile } from "../components/responsive";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

import './Card.css'

const KEY = process.env.STRIPE_KEY;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
 const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate("/success", {
          stripeData: res.data,
          products: cart, });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);
  return (
    <div className='Container'>
      <div className='Wrapper'>
        <h1 className='Title'>Cart Items</h1>
        <div className='Top'>
          <button className='TopButton'>CONTINUE SHOPPING</button>
          <div className='TopTexts'>
            <span className='TopText'>Shopping Bag(2)</span>
            <span className='TopText'>Your Wishlist (0)</span>
          </div>
          <button className='TopButton' type="filled">CHECKOUT NOW</button>
        </div>
        <div className='Bottom'>
          <div className='Info'>
            {cart.products.map((product) => (
              <div className='Product'>
                <div className='ProductDetail'>
                  <img className='Image' src={product.img} />
                  <div className='Details'>
                    <span className='ProductName'>
                      <b>Product:</b> {product.title}
                    </span>
                    <span className='ProductId'>
                      <b>ID:</b> {product._id}
                    </span>
                    <div className='ProductColor' color={product.color} />
                    <span className='ProductSize'>
                      <b>Size:</b> {product.size}
                    </span>
                  </div>
                </div>
                <div className='PriceDetail'>
                  <div className='ProductAmountContainer'>
                    <Add />
                    <div className='ProductAmount'>{product.quantity}</div>
                    <Remove />
                  </div>
                  <div className='ProductPrice'>
                    $ {product.price * product.quantity}
                  </div>
                </div>
              </div>
            ))}
            <hr className='Hr' />
          </div>
          <div className='Summary'>
            <div className='SummaryTitle'>ORDER SUMMARY</div>
            <div className='SummaryItem'>
              <span className='SummaryItemText'>Subtotal</span>
              <span className='SummaryItemPrice'>$ {cart.total}</span>
            </div>
            <div className='SummaryItem'>
              <span className='SummaryItemText'>Estimated Shipping</span>
              <div className='SummaryItemPrice'>$ 5.90</div>
            </div>
            <div className='SummaryItem'>
              <span className='SummaryItemText'>Shipping Discount</span>
              <div className='SummaryItemPrice'>$ -5.90</div>
            </div>
            <div className='SummaryItem' type="total">
              <div className='SummaryItemText'>Total</div>
              <div className='SummaryItemPrice'>$ {cart.total}</div>
            </div>
            <StripeCheckout
              name="Level Up"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button classNme='Button'>CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;