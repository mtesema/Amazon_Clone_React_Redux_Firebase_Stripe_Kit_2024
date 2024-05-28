import React from "react";
import "./Style/Subtotal.css";
import axios from "axios";
import { useStateValue } from "../../Utility/StateProvider";
import { getBasketTotal } from "../../Utility/Reducer";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../Utility/formatCurrency";
import { loadStripe } from "@stripe/stripe-js";
import Loading from "../../Components/Loading/Loading";

// Access the environment variable
const { VITE_STRIPE_PUBLIC_KEY } = import.meta.env;
const stripePromise = loadStripe(VITE_STRIPE_PUBLIC_KEY);

axios.defaults.baseURL = "http://localhost:4242"; // Set the base URL for axios

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket, user }] = useStateValue();
  console.log("number of items in basket >>> ", basket?.length);
  console.log("current user name>>>", user?.displayName);
  console.log("current user email>>>", user?.email);
  const basketTotal = getBasketTotal(basket);
  const formattedTotal = formatCurrency(basketTotal);

  const handleCheckout = async (event) => {
    event.preventDefault();
    const stripe = await stripePromise;

    try {
      const checkoutSession = await axios.post("/create-checkout-session", {
        items: basket,
        email: user.email,
      });

      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
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
        <form onSubmit={handleCheckout} >
          <button type="submit">Checkout</button>
        </form>
      )}
    </div>
  );
}

export default Subtotal;
