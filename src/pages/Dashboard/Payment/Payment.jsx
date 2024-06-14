import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    const [cart] = useCart();

    const total = cart.reduce((sum, item)=> sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className="w-full">
            <h3 className="text-3xl my-5 text-center font-bold text-teal-600">Payment</h3>
            <div className="w-6/12 mx-auto pt-10">
            <Elements stripe={stripePromise}>
                <Checkout cart={cart} price={price}></Checkout>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;