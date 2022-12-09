import StripeCheckout from 'react-stripe-checkout';
import {useState, useEffect} from 'react';
import './Payment.css';

const KEY ='pk_test_51MB5OkGhZOoCGnNYdb5dmbQjM8bzwGx86ILnqNOI39KPz3UIDc6dgvQLIG3lzHsGLSIDhdiV8SkycYgydlGJtvPq00ZaSGmxUN';

const Payment = () =>{
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) =>{
    setStripeToken(token)

  };

    useEffect(()=>{
      const paymentRequest = async () =>{
        try {
          const res = await axios.post("http://localhost:5001/paymnet", 
          {
            tokenId: stripeToken.id,
            amount: 2000,
          })
          
        console.log(res.data)
        } catch (err) {
          res.status(500).json(err)
        }
      }
      stripeToken && paymentRequest
      
    }, [stripeToken])

  return(
    <div>
      <StripeCheckout 
        name='Level Up'   
        image='../images/Logo.png'
        billingAddress
        shippingAddress
        description='Your total is $50'
        amount={2000}
        token={onToken}
        stripeKey={KEY}
        >
        <button className='payBtn'>
            Pay Now
        </button>
      </StripeCheckout>
        
    </div>
  )
}
export default Payment;