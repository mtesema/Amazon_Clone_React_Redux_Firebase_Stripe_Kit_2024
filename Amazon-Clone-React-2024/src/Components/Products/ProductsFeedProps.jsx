import React, { useContext } from "react";
import Rating from "@mui/material/Rating";

import "./Style/ProductsFeed.css";
import { Link } from "react-router-dom";
import {formatPrice} from '../../Utility/formatCurrency '
import { StateContext } from "../../Utility/StateProvider";

function ProductsFeedProps({ product }) {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  const [state, dispatch] = useContext(StateContext);

  const addToCartHandlet = () =>{
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        rating: product.rating,
      },
    });
  }


  return (
    <div className="Product_Feed_Container">
      <Link to={`products/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <div>
        <h3>{truncateText(product.title, 25)}</h3>
        <div className="Product_rating">
          {/* rating */}
          <p>{product.rating.rate}</p>
          <Rating
            className="rating_stars"
            value={product.rating.rate}
            precision={0.1}
            size="small"
          />

          {/* number of reviews */}
          <small>{product.rating.count}</small>

          {/* price */}
        </div>
        <div className="product_feed_pricing">{formatPrice(product.price)}</div>
        {/* add to cart button */}
        <button className="product_feed_button" onClick={addToCartHandlet}>
          <small>Add to cart</small>
        </button>
      </div>
    </div>
  );
}

export default ProductsFeedProps;
