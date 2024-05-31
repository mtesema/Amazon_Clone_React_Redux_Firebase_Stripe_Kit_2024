import React, { useState } from "react";
import "./Style/CheckOutPage.css";
import axios from "axios";
import { useStateValue } from "../../Utility/StateProvider";
import { getBasketTotal } from "../../Utility/Reducer";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../Utility/formatCurrency";
import { loadStripe } from "@stripe/stripe-js";
import Loading from "../../Components/Loading/Loading";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

axios.defaults.baseURL = "http://localhost:4242";

function CheckoutPage() {
  const navigate = useNavigate();
  const [{ basket, user }] = useStateValue();
  const [loading, setLoading] = useState(false);

  const basketTotal = getBasketTotal(basket);
  const formattedTotal = formatCurrency(basketTotal);

  const handleCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!basket || !user || !user.email) {
      console.error("Missing basket items or user data");
      setLoading(false);
      return;
    }

    try {
      const checkoutSession = await axios.post("/create-checkout-session", {
        items: basket,
        user:user,
        email: user.email,
      });

      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>{formattedTotal}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      {user === null ? (
        <button onClick={() => navigate("/login")}>Sign in to Checkout</button>
      ) : (
        <form onSubmit={handleCheckout}>
          <button type="submit" disabled={loading}>
            {loading ? <Loading /> : "Checkout"}
          </button>
        </form>
      )}
    </div>
  );
}

export default CheckoutPage;