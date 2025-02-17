import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { executePaymentApi } from '../services/allapi';

function Paymentsuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paymentId = params.get('paymentId');
    const PayerID = params.get('PayerID');

    if (paymentId && PayerID) {
      // No need for JWT token here for the PayPal success route
      const header = {
        'Content-Type': 'application/json',
      };

      executePaymentApi(paymentId, PayerID, header)
        .then(response => {
          if (response.status === 200) {
            toast.success("Payment Successful!");
            console.log("Payment Details:", response.data.payment);
            setPaymentDetails(response.data.payment);
            setTimeout(() => navigate('/appointment'), 3000);
          } else {
            toast.error("Payment verification failed");
          }
        })
        .catch(error => {
          toast.error("Payment verification failed");
          console.error(error);
        });
    }
  }, [location, navigate]);

  return (
    <div className="container text-center mt-5">
      <h2 className="text-success">Payment Successful!</h2>
      {paymentDetails ? (
        <div className="payment-details">
          <p><strong>Transaction ID:</strong> {paymentDetails.id}</p>
          <p><strong>Amount:</strong> {paymentDetails.transactions[0].amount.total} {paymentDetails.transactions[0].amount.currency}</p>
          <p><strong>Payment Status:</strong> {paymentDetails.state}</p>
          <p><strong>Payer Name:</strong> {paymentDetails.payer.payer_info.first_name} {paymentDetails.payer.payer_info.last_name}</p>
          <p><strong>Email:</strong> {paymentDetails.payer.payer_info.email}</p>
          <p><strong>Shipping Address:</strong> {paymentDetails.payer.shipping_address.line1}, {paymentDetails.payer.shipping_address.city}, {paymentDetails.payer.shipping_address.state}, {paymentDetails.payer.shipping_address.postal_code}, {paymentDetails.payer.shipping_address.country_code}</p>
          <p><strong>Payment Mode:</strong> {paymentDetails.transactions[0].payment_mode}</p>
          <p><strong>Transaction Fee:</strong> {paymentDetails.transactions[0].transaction_fee.value} {paymentDetails.transactions[0].transaction_fee.currency}</p>
        </div>
      ) : (
        <p>Fetching payment details...</p>
      )}
      <p>Redirecting to your appointments...</p>
    </div>
  );
}

export default Paymentsuccess;


