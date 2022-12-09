import StripeCheckout from 'react-stripe-checkout';
import './Payment.css';

const Payment = () =>{
  return(
    <div>
        <button className='payBtn'>
            Pay Now
        </button>
    </div>
  )
}
export default Payment;