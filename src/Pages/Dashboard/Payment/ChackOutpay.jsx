import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";


const ChackOutpay = () => { 
const [error,setError]=useState();
const [clientSecret, setClientSecret] = useState("");
const [transactionId, setTransactionId]=useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure=useAxiosSecure();
    const {user} =useAuth();
    const [cart]=useCart();
    const totalPrice=cart.reduce((total,item)=>total+item.price,0)
    
    useEffect(()=>{
axiosSecure.post('/create-payment-intent',{price:totalPrice})
.then(res=>{
  console.log(res.data.clientSecret);
  setClientSecret(res.data.clientSecret);
})
    },[axiosSecure,totalPrice])

    const handleSubmit = async (event) => {



        // Block native form submission.
        event.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
    
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);
    
        if (card == null) {
          return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
        
    if (error) {
      console.log('[error]', error);
      setError(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError();
    }
    // confirm payment
    const {paymentIntent, error: confirmerror} = await stripe.confirmCardPayment(clientSecret,{
     payment_method:{
      card:card,
      billing_details:{
      email:user?.email ||'anonymous',
      name:user?.displayName ||'anonymous'

      }
     }
    })
if(confirmerror){
  console.log('confirm error')
}
else{
  console.log('payment-intent',paymentIntent)
  if(paymentIntent.status === 'succeeded'){
    console.log('transaction id',paymentIntent.id);
    setTransactionId(paymentIntent.id);
    // now save the payment in the database
    const payment={
      email:user.email,
      price:totalPrice,
      transactionId:paymentIntent.id,
      date:new Date(),//utc date convert.use moment js to server
     cartIds: cart.map(item=> item.id),
      menueIds:cart.map(item=>item.menueId),
      status:'panding',
    

    }
    const res = await axiosSecure.post('/payments',payment);
    console.log('payment save',res).data;
  }
}
    
    };
    

    return (
        <form onSubmit={handleSubmit}>
        <CardElement
        className="felx -py-10 w-[500px]"
          options={{
            style: {
              base: { 
              
                  width:'1000px',
                 gap:'10px',
                fontSize: '20px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                gap:'10px',
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="text-orange-500 btn btn-success my-4 text-center"  type="submit"
         disabled={!stripe ||!clientSecret}>
          Pay
        </button>
  <p className="text-red-600">{error} </p>
  {transactionId && <p className="text-green-600">Your Transaction id:{transactionId}</p>}
      </form>
    );
};

export default ChackOutpay;