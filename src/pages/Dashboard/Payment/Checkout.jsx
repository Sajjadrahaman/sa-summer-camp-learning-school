import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Checkout = ({ price, cart }) => {
    console.log(cart)
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState();
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');



    useEffect(() => {
        if(price > 0){
            axiosSecure.post('/create-payment-intent', { price })
            .then((res => {
                setClientSecret(res.data.clientSecret)
            }))
        }
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }


        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')

        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    }
                }
            }
        )


        if (confirmError) {
            console.log(confirmError)
        }
        console.log(paymentIntent)
        setProcessing(false)
        

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItem: cart.map(item => item._id),
                item: cart.map(item => item.cartId),
                itemNames: cart.map(item => item.name),
                itemImage: cart.map(item => item.image),
                itemPrice: cart.map(item => item.price),
                orderStatus: 'service pending'
            }
            axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data);
                if(res.data.result.insertedId){
          
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Payment Success',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }

    }

    return (
        <>
            <form  onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="bg-teal-600 text-white btn btn-sm mt-5 hover:bg-teal-900" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600">{cardError}</p>}
            {transactionId && <p className="text-green-600">Transaction completed {transactionId}</p>}
        </>
    );
};

export default Checkout;