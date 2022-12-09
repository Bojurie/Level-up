import StripeCheckout from 'react-stripe-checkout';
import './Payment.css';

const Payment = () =>{
  return(
    <div>
      <StripeCheckout>
        <button className='payBtn'>
            Pay Now
        </button>
      </StripeCheckout>
        
    </div>
  )
}
export default Payment;