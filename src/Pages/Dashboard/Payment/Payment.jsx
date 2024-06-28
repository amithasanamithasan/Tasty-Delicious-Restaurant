import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";


const Payment = () => {
    // TODO :add publishable key
    const stripePromise = loadStripe   ('');
    return (
        <div>
            <SectionTitle heading="payment" subHeading="Please pay to eate"></SectionTitle>
            <div>
            <Elements stripe={stripePromise} >
           
            </Elements>
            </div>
        </div>
    );
};

export default Payment;