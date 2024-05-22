import React from "react";
import "./Style/Cart.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../../Utility/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Includes from "../../Includes/Includes";

function CartPage() {
  const [{ basket, user }] = useStateValue();

  console.log("this is the basket >>>", basket);

  return (
    <Includes>
      <div className="checkout">
        <div className="checkout__left">
          <div>
            <h3>Hello, {user?.email}</h3>
            <div className="checkout__wrapper">
              <h2 className="checkout__title">Shopping Cart</h2>
              <a className="checkout__deslect">Deslect all items</a>
            </div>

            {basket.map((item) => (
              
              <CheckoutProduct
             
                key={item.id}
                description={item.description}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
              />
              
            ) )}
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
