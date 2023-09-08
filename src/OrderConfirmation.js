import React from 'react';
import './OrderConfirmation.css'; // Import your CSS file for styling

function OrderConfirmation() {
  return (
    <div className="confirmation-container">
      <h2>Thank you for your business!</h2>
      <p>Your order confirmation number is 2302-ACC-PT-WEB-PT-D .</p>
      <p>Please complete a short survey about your experience shopping on the K.I.S.S.E.S. website.</p>
      <p>As a token of our appreciation for completing the survey we will send a surprise gift with your order!</p>
    </div>
  );
}

export default OrderConfirmation;
