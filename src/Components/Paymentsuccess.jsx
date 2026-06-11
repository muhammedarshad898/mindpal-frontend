import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Paymentsuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paymentId = params.get('paymentId');
    const PayerID = params.get('PayerID');
    const doctorid = params.get('doctorid');

    if (paymentId && PayerID) {
      sessionStorage.setItem('paymentSuccess', 'true');
      toast.success("Payment Successful! Complete your booking.");
      setTimeout(() => {
        if (doctorid) {
          navigate(`/booking/${doctorid}`);
        } else {
          navigate('/');
        }
      }, 2000);
    } else {
      navigate('/');
    }
  }, [location, navigate]);

  const params = new URLSearchParams(location.search);
  const paymentId = params.get('paymentId');

  return (
    <div className="mp-payment-status">
      <h2 className="text-success">Payment Successful!</h2>
      {paymentId && <p><strong>Payment ID:</strong> {paymentId}</p>}
      <p>Your payment has been processed successfully.</p>
      <p>Redirecting to complete your booking...</p>
    </div>
  );
}

export default Paymentsuccess;
