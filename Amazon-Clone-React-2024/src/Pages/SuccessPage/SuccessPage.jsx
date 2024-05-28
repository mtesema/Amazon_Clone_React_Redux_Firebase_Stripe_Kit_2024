import React from "react";
import "./Style/StripeSuccessPage.css";
import images from  '../../Resource/images'
import Includes from "../../Includes/Includes";

const StripeSuccessPage = () => {
  return (
    <Includes >

    <div className="success-container">
      <div className="success-card">
        <img src={images.successIcon} alt="Success" className="success-icon" />
        <h1>Payment Successful!</h1>
        <p>
          Thank you for your purchase. Your payment has been processed
          successfully. We'll send you a confirmation once your items have
          shipped. If you would like to check the status of your order(s),
          please visit the
        </p>
        <button
          className="home-button"
          onClick={() => (window.location.href = "/orders")}
        >
          Go to my Orders
        </button>
      </div>
    </div>
    </Includes>
  );
};

export default StripeSuccessPage;
