import usePayment from "../../../../hooks/usePayment";

const PaymentHistory = () => {
    const [payment,] = usePayment();
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {

                            payment.sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date in descending order
                                .map((payment, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <th>TransactionId: {payment.transactionId}</th>
                                        <th>Amount: {payment.price}</th>
                                        <th>Date: {payment.date}</th>
                                    </tr>
                                ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;