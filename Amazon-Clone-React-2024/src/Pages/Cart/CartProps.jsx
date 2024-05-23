import React from "react";
import "./Style/CartProps.css";
import { useStateValue } from "../../Utility/StateProvider";
import Rating from "@mui/material/Rating";


function CartProps({
  id,
  image,
  title,
  price,
  rating,
  hideButton,
  quantity,
  description,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const increaseQuantity = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, title, image, price, rating, description },
    });
  };

  const decreaseQuantity = () => {
    dispatch({
      type: "REMOVE_ONE_FROM_BASKET",
      id: id,
    });
  };

  // Format today's date
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short", // Display short day of the week
    month: "short", // Display short month name
    day: "numeric", // Display numeric day of the month
  });

  // Calculate date 2 days from now
  const twoDaysFromNow = new Date();
  twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 2);
  const formattedTwoDaysFromNow = twoDaysFromNow.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt={title} />
        <div className="checkoutProduct__info">
          <div className="checkoutProduct__details">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__description">{description}</p>
            <p className="check-out-instock"> In Stock </p>
            <div className="check-out-prime">
              <img
                src="../../../public/NicePng_abominable-snowman-png_1159983.png"
                alt=""
              />
              <small>Two-day</small>
            </div>

            <small>
              Free Delivery <strong>{formattedTwoDaysFromNow}</strong>
            </small>

            <p className="checkoutProduct__price">
              <strong>$</strong>
              <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
              <Rating value={rating.rate} precision={0.5} />
              <strong>({rating.count})</strong>
            </div>
            <div className="checkoutProduct__quantityContainer">
              <button
                className="checkoutProduct__button"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="checkoutProduct__quantity">{quantity}</span>
              <button
                className="checkoutProduct__button"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>
          <div className="checkoutProduct__removeWarpper">
            {!hideButton && (
              <button
                className="checkoutProduct__removeButton"
                onClick={removeFromBasket}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="checkoutProduct_subtotal"></div>
    </>
  );
}

export default CartProps;
