import React from "react";
import "./Style/Cart.css";
import Subtotal from "./CheckoutPage"; // Assuming this is the correct import for Subtotal component
import { useStateValue } from "../../Utility/StateProvider";
import Includes from "../../Includes/Includes";
import { getBasketTotal } from "../../Utility/Reducer";
import CartProps from "./CartProps";
import { formatCurrency } from "../../Utility/formatCurrency";
import EmptyCartPage from "./EmptyCartPage";

function CartPage() {
  const [{ basket, user }] = useStateValue();

  const basketTotal = getBasketTotal(basket);

  const firstName = user?.displayName
    ? user.displayName.split(" ")[0]
    : "Guest";

  if (basket.length === 0) {
    return (
      <Includes>
        <EmptyCartPage />
      </Includes>
    );
  }

  return (
    <Includes>
      <div className="checkout">
        <div>
          <h3 className="checkout_account">Hello, {firstName}</h3>
          <div className="main-container">
            <div className="checkout__left">
              <div className="checkout__content">
                <div className="checkout__wrapper">
                  <h2 className="checkout__title">Shopping Cart</h2>
                  <a className="checkout__deselect">Deselect all items</a>
                  <p>Price</p>
                  <hr />
                </div>
                <div className="checkout__items">
                  {basket.map((item) => (
                    <CartProps
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                      quantity={item.quantity}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
              <hr />
              <div className="checkout_subtotal">
                Subtotal :&nbsp; <strong>{formatCurrency(basketTotal)}</strong>
              </div>
            </div>
            <div className="checkout__right">
              <Subtotal />
            </div>
          </div>
        </div>
      </div>
    </Includes>
  );
}

export default CartPage;
