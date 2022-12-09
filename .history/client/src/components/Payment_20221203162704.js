import StripeCheckout from 'react-stripe-checkout';
import './Payment.css';

const KEY ='pk_test_51MB5OkGhZOoCGnNYdb5dmbQjM8bzwGx86ILnqNOI39KPz3UIDc6dgvQLIG3lzHsGLSIDhdiV8SkycYgydlGJtvPq00ZaSGmxUN'
const Payment = () =>{
  return(
    <div>
      <StripeCheckout 
        name='Level Up'   
        image='../images/Logo.png'
        billingAddress
        shippingAddress
        description='Your total is $50'
        amount={2000}

        >
        <button className='payBtn'>
            Pay Now
        </button>
      </StripeCheckout>
        
    </div>
  )
}
export default Payment;