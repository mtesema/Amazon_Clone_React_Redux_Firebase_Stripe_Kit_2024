import React from "react";
import "./Style/Cart.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../../Utility/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Includes from "../../Includes/Includes";

function CarPage() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <Includes>
      <div className="checkout">
        <div className="checkout__left">
          <div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            
            <h3>Hello, {user?.email}</h3>

            <h2 className="checkout__title">Your shopping Basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </Includes>
  );
}

export default CarPage;
