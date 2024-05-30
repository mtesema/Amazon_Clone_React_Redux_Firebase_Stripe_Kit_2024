import React from "react";
import "./Style/Cart.css";
import CheckoutPage from "./CheckoutPage";
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
    <div className="checkout">
      <Includes>
        <div className="main-container">
          <div className="checkout__left">
            <div className="checkout__content">
              <h3 className="checkout_account">Hello, {firstName}</h3>
              <h2 className="checkout__title">Shopping Cart</h2>
              <a className="checkout__deselect">Deselect all items</a>
           
              <hr />

              <div className="checkout__items">
                {basket.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img
                      className="cart-item__image"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="cart-item__info">
                      <h3 className="cart-item__title">{item.title}</h3>
                      <p className="cart-item__price">
                        Price: <strong>{formatCurrency(item.price)}</strong>
                      </p>
                      <p className="cart-item__quantity">
                        Quantity: {item.quantity}
                      </p>
                      <p className="cart-item__description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="checkout_subtotal">
              Subtotal: <strong>{formatCurrency(basketTotal)}</strong>
            </div>
          </div>
          <div className="checkout__right">
            <CheckoutPage />
          </div>
        </div>
      </Includes>
    </div>
  );
}

export default CartPage;
