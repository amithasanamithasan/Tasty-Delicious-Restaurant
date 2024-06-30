import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";

import ChackOutpay from "./ChackOutpay";

const Payment = () => {
    // TODO :add publishable key
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_PK);
    return (
        <div>
            <SectionTitle heading="payment" subHeading="Please pay to eate"></SectionTitle>
            <div >
            <Elements  stripe={stripePromise} >
           <ChackOutpay  ></ChackOutpay>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;