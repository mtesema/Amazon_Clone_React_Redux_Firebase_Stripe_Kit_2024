import React from "react";
import "./Style/Cart.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../../Utility/StateProvider";
import Includes from "../../Includes/Includes";
import { getBasketTotal } from "../../Utility/Reducer";
import CartProps from "./CartProps";
import { formatCurrency } from "../../Utility/formatCurrency ";

function CartPage() {
  const [{ basket, user }] = useStateValue();

  const basketTotal = getBasketTotal(basket);

  console.log("this is the basket >>>", basket);

  return (
    <Includes>
      <div className="checkout">
        <div>
          <h3 className="checkout_account">Hello, {user?.email}</h3>
          <div className="checkout__left">
            <div>
              <div className="checkout__wrapper">
                <h2 className="checkout__title">Shopping Cart</h2>
                <a className="checkout__deslect">Deselect all items</a>
                <p>Price</p>
                <hr />
              </div>

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
            <hr />
          </div>
          <div className="checkout_subtotal">
            Subtotal :&nbsp; <strong>{formatCurrency(basketTotal)}</strong>
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </Includes>
  );
}

export default CartPage;
