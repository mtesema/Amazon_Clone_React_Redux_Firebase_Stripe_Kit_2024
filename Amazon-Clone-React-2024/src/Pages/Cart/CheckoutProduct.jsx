import React from "react";
import "./Style/CheckoutProduct.css";
import { useStateValue } from "../../Utility/StateProvider";
import Rating from "@mui/material/Rating";
import { formatPrice } from "../../Utility/formatCurrency ";

function CheckoutProduct({
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

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="checkoutProduct__info">
        <div className="checkoutProduct__details">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__description">{description}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price.toFixed(2)}</strong>
          </p>
          <div className="checkoutProduct__rating">
            <Rating value={rating.rate} precision={0.5} />
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
  );
}

export default CheckoutProduct;