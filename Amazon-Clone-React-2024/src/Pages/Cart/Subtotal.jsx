import React from "react";
import "./Style/CheckoutProduct.css";
import { useStateValue } from "../../Utility/StateProvider";
import { getBasketTotal } from "../../Utility/Reducer";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../Utility/formatCurrency "; 

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  const basketTotal = getBasketTotal(basket);
  const formattedTotal = formatCurrency(basketTotal);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>{formattedTotal}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
