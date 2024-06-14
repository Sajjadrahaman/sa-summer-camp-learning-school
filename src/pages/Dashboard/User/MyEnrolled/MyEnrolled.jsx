import usePayment from "../../../../hooks/usePayment";

const MyEnrolled = () => {
    const {payments} = usePayment();
    console.log(payments)
    return (
        <div>
            
        </div>
    );
};

export default MyEnrolled;